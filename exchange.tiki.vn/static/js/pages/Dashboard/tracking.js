import React from 'react';
import round from 'lodash/round';
import { useTrackingContext } from '@providers/TrackingProvider';
import { ORDER_TYPE } from '@constants';

const ASA_XU_PAIR = 'ASA/XU';
const roundPercentNumber = (number) => {
  const MIN_PERCENT = 0.001;
  const roundedNumber = round(number, 2) || MIN_PERCENT;
  return number === 0 ? number : roundedNumber;
};

const normalizeSubmitOrderDetail = ({
  orderDetail,
  orderType,
  percentageOfBalance,
}) => {
  const { side } = orderDetail;
  const isMarketorder = orderType === ORDER_TYPE.MARKET_ORDER;

  return {
    trade_type: side,
    percentage_of_current_balance: roundPercentNumber(percentageOfBalance),
    pair: ASA_XU_PAIR,
    is_market_order: isMarketorder,
  };
};

const normalizeCancelOrderDetail = (orderDetail) => {
  const { side, executedPercent } = orderDetail;

  return {
    trade_type: side,
    pair: ASA_XU_PAIR,
    percentage_of_trade_fulfilled: roundPercentNumber(executedPercent),
    is_market_order: false,
  };
};

const useDashboardTracking = () => {
  const { track } = useTrackingContext();
  const trackSubmitExchangeOrder = React.useCallback(
    ({ orderDetail, orderType, percentageOfBalance }) => {
      const normalizedDetail = normalizeSubmitOrderDetail({
        orderDetail,
        orderType,
        percentageOfBalance,
      });
      track('submit_exchange_order', normalizedDetail);
    },
    [track],
  );

  const trackCancelExchangeOrder = React.useCallback(
    (orderDetail) => {
      const normalizedDetail = normalizeCancelOrderDetail(orderDetail);
      track('cancel_exchange_order', normalizedDetail);
    },
    [track],
  );

  const trackSelectOrderType = React.useCallback(
    (orderType) => {
      track('select_exchange_order_type', {
        trade_type: orderType,
      });
    },
    [track],
  );

  const trackSelectChartInterval = React.useCallback(
    (type) => {
      track('select_exchange_chart_interval', {
        interval_type: type,
      });
    },
    [track],
  );

  const trackSelectChartType = React.useCallback(
    (type) => {
      track('select_exchange_chart_type', {
        chart_type: type,
      });
    },
    [track],
  );

  return {
    trackSubmitExchangeOrder,
    trackCancelExchangeOrder,
    trackSelectOrderType,
    trackSelectChartInterval,
    trackSelectChartType,
  };
};

export default useDashboardTracking;
