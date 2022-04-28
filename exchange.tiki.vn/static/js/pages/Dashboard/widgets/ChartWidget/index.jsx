import React from 'react';
import { first, last, isEmpty, isNumber, pick } from 'lodash';
import { createChart, CrosshairMode } from 'lightweight-charts';
import { useDispatch, useSelector } from 'react-redux';
import {
  CHART_MODE,
  MARKET_REFRESH_INTERVAL,
  PERIOD_QUERY_PARAMS_MAPPING,
} from '@config/chart';
import { useInterval } from '@hooks';
import { STYLE_SYSTEM } from '@components/styles/GlobalStyle';
import { formatTickTime } from '../../utils';
import { ChartHeader, ChartIndicator } from './components';
import { ChartContainer, WidgetContainer } from './styles';
import useDashboardTracking from '@pages/Dashboard/tracking';

const CHART_BORDER_COLOR = '#202433';

const DEFAULT_CHART_CONFIG = {
  layout: {
    background: {
      color: 'transparent',
    },
    textColor: STYLE_SYSTEM.color['gray-70'],
  },
  grid: {
    horzLines: { color: CHART_BORDER_COLOR },
    vertLines: { color: CHART_BORDER_COLOR },
  },
  crosshair: {
    mode: CrosshairMode.Magnet,
  },
  timeScale: {
    borderColor: CHART_BORDER_COLOR,
    barSpacing: 10,
  },
  rightPriceScale: {
    borderColor: CHART_BORDER_COLOR,
  },
};

const AREA_CONFIG = {
  topColor: STYLE_SYSTEM.color['blue-60'],
  bottomColor: 'transparent',
  lineColor: STYLE_SYSTEM.color['blue-60'],
  lineWidth: 2,
};

const CANDLE_STICK_CONFIG = {
  upColor: STYLE_SYSTEM.color['color-up'],
  downColor: STYLE_SYSTEM.color['color-down'],
  borderUpColor: STYLE_SYSTEM.color['color-up'],
  borderDownColor: STYLE_SYSTEM.color['color-down'],
  wickUpColor: STYLE_SYSTEM.color['color-up'],
  wickDownColor: STYLE_SYSTEM.color['color-down'],
};

const useChartHeaderStates = () => {
  const [selectedPeriod, setSelectedPeriod] = React.useState('30m');
  const { trackSelectChartInterval, trackSelectChartType } =
    useDashboardTracking();
  const onPeriodChange = React.useCallback(
    (value) => {
      setSelectedPeriod(value);
      trackSelectChartInterval(value);
    },
    [trackSelectChartInterval],
  );
  const [selectedChartMode, setSelectedChartMode] = React.useState(
    CHART_MODE.LINE,
  );
  const onChartModeChange = React.useCallback(
    (value) => {
      setSelectedChartMode(value);
      trackSelectChartType(value);
    },
    [trackSelectChartType],
  );

  return {
    selectedPeriod,
    onPeriodChange,
    selectedChartMode,
    onChartModeChange,
  };
};

const useChartLogic = ({
  container,
  onChartHover,
  chartMode = CHART_MODE.K_LINE,
}) => {
  const [chart, setChart] = React.useState(null);
  const [selectedSeries, setSelectedSeries] = React.useState(null);
  const isChartInitialized = React.useMemo(
    () => !!selectedSeries,
    [selectedSeries],
  );

  const handleChartModeChange = React.useCallback(
    (selectedMode, initializingChart) => {
      const chartApi = chart || initializingChart;
      if (!chartApi) {
        return;
      }
      if (selectedSeries) {
        chartApi.removeSeries(selectedSeries);
      }
      let selectingSeries = null;
      switch (selectedMode) {
        case CHART_MODE.K_LINE:
          selectingSeries = chartApi.addCandlestickSeries(CANDLE_STICK_CONFIG);
          break;
        case CHART_MODE.LINE:
          selectingSeries = chartApi.addAreaSeries(AREA_CONFIG);
          break;
        default:
          break;
      }

      setSelectedSeries(selectingSeries);
    },
    [chart, selectedSeries],
  );

  const initChart = React.useCallback(
    ({ container, chartMode }) => {
      const { width, height } = container.getBoundingClientRect();
      const chart = createChart(container, {
        width,
        height,
        ...DEFAULT_CHART_CONFIG,
      });
      chart.subscribeCrosshairMove(onChartHover);
      setChart(chart);
      handleChartModeChange(chartMode, chart);
    },
    [onChartHover, handleChartModeChange],
  );

  const subscribeContainerSize = React.useCallback(() => {
    if (container && chart) {
      new ResizeObserver((params) => {
        const { contentRect } = first(params);
        if (!contentRect) {
          return;
        }
        chart.resize(contentRect.width, contentRect.height);
      }).observe(container);
    }
  }, [container, chart]);

  React.useEffect(() => {
    subscribeContainerSize();
  }, [subscribeContainerSize]);

  React.useEffect(() => {
    if (!chart && container) {
      initChart({ container, chartMode });
    }
  }, [container, chartMode, chart, initChart]);

  React.useEffect(() => {
    handleChartModeChange(chartMode);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chartMode]);

  const updateData = React.useCallback(
    (newData) => {
      if (selectedSeries) {
        selectedSeries.setData(newData);
      }
    },
    [selectedSeries],
  );

  const updateTimeScale = React.useCallback(
    ({ displayFormat }) => {
      if (chart) {
        const timeFormatter = (time) => formatTickTime(time, displayFormat);
        chart.applyOptions({
          localization: {
            timeFormatter,
          },
          timeScale: {
            tickMarkFormatter: timeFormatter,
          },
        });
      }
    },
    [chart],
  );

  return { updateData, updateTimeScale, isChartInitialized };
};

const useChartData = ({ timePeriod, chartMode }) => {
  const containerRef = React.useRef(null);
  const dispatch = useDispatch();
  const timeDisplayFormat =
    PERIOD_QUERY_PARAMS_MAPPING[timePeriod].tickDisplayFormat;
  const lastTickNormalizer = React.useCallback(
    (data) =>
      chartMode === CHART_MODE.LINE ? pick(data, ['time', 'close']) : data,
    [chartMode],
  );
  const latestTick = useSelector((state) =>
    lastTickNormalizer(last(state.public.astraData)),
  );
  const loading = useSelector(
    (state) => state.loading.effects['public/fetchAstraData'],
  );
  const [hoveringTickData, setHoveringTickData] = React.useState(null);

  const onChartHover = React.useCallback((param) => {
    const seriesParams = Array.from(param.seriesPrices.values())[0] || {};
    const tickValue =
      typeof seriesParams === 'object' ? seriesParams : { close: seriesParams };
    const tickData =
      isEmpty(seriesParams) && !isNumber(seriesParams)
        ? null
        : { time: param.time, ...tickValue };
    setHoveringTickData(tickData);
  }, []);

  const { updateData, updateTimeScale, isChartInitialized } = useChartLogic({
    container: containerRef.current,
    chartMode,
    onChartHover,
  });

  useInterval(
    () => {
      if (timePeriod && containerRef.current) {
        dispatch({
          type: 'public/fetchAstraData',
          payload: timePeriod,
          callback: (data) => {
            updateData(data);
            updateTimeScale({ displayFormat: timeDisplayFormat });
          },
        });
      }
    },
    MARKET_REFRESH_INTERVAL,
    [isChartInitialized, timePeriod, chartMode],
  );

  return {
    containerRef,
    loading,
    latestTick,
    hoveringTickData,
    timeDisplayFormat,
  };
};

const ChartWidget = (props) => {
  const chartHeaderProps = useChartHeaderStates();
  const { selectedPeriod, selectedChartMode } = chartHeaderProps;
  const { containerRef, timeDisplayFormat, latestTick, hoveringTickData } =
    useChartData({
      timePeriod: selectedPeriod,
      chartMode: selectedChartMode,
    });
  const indicatorProps = hoveringTickData || latestTick;

  return (
    <WidgetContainer {...props}>
      <ChartHeader {...chartHeaderProps} />
      <ChartContainer ref={containerRef}>
        <ChartIndicator
          {...indicatorProps}
          chartMode={selectedChartMode}
          timeDisplayFormat={timeDisplayFormat}
        />
      </ChartContainer>
    </WidgetContainer>
  );
};

export default ChartWidget;
