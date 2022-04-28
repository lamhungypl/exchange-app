import * as R from 'ramda';
import Moment from 'moment';
import {
  fetchAstraKLine,
  fetchMarketSummary,
  fetchOrderBook,
} from '@services/public';
import { formatNumber } from '@utils';
import {
  AVAILABLE_TICK_PERIOD_MAPPING,
  PERIOD_QUERY_PARAMS_MAPPING,
} from '@config/chart';
import { DIFF_TYPE } from '@constants';

const marketSummaryNormalizer = (market = {}) => {
  const { ticker = {} } = market;
  const diffValue = Number(ticker.price_change_percent.slice(0, -1));
  return {
    diffType:
      diffValue === 0
        ? DIFF_TYPE.REMAIN
        : diffValue > 0
        ? DIFF_TYPE.INC
        : DIFF_TYPE.DES,
    highest24hValue: formatNumber(Number(ticker.high), {
      unit: 'Xu',
    }),
    lowest24hValue: formatNumber(Number(ticker.low), {
      unit: 'Xu',
    }),
    matchingPrice: formatNumber(Number(ticker.last), {
      unit: 'Xu',
    }),
    diffValue: formatNumber(Number(diffValue), {
      unit: '%',
    }),
    volumeInLast24h: formatNumber(Number(ticker.amount), {
      format: '0,0.[00]',
      roundingFn: Math.floor,
      unit: 'Astra',
    }),
  };
};

const normalizeOrderBookItem = ([p, v]) => {
  const volumeValue = Number(v);
  const volume = formatNumber(volumeValue);
  const price = formatNumber(Number(p));
  return {
    volume,
    price,
    volumeValue,
  };
};
// get total volume and normalize each item in list
const normalizeOrderBookList = R.mapAccum(
  (totalVol, orderBookItem) => [
    totalVol + Number(orderBookItem[1]),
    normalizeOrderBookItem(orderBookItem),
  ],
  0,
);
const normalizeOrderBook = R.compose(
  R.over(R.lensProp('bids'), R.compose(normalizeOrderBookList, R.take(20))),
  R.over(R.lensProp('asks'), R.compose(normalizeOrderBookList, R.take(20))),
);

const astraChartNormalizer = (data = []) =>
  data.map(([time, open, high, low, close, volume]) => ({
    time,
    open,
    close,
    high,
    low,
    value: close,
  }));

export default {
  namespace: 'public',
  state: {
    marketSummary: {},
    astraData: [],
    orderBook: {},
  },
  effects: {
    *fetchMarketSummary(_, { call, put }) {
      const marketSummary = yield call(fetchMarketSummary);
      const normalizedMarketSummary = marketSummaryNormalizer(marketSummary);
      yield put({
        type: 'saveMarketSummary',
        payload: normalizedMarketSummary,
      });
    },
    *fetchAstraData({ payload: period, callback }, { call, put }) {
      if (!R.isEmpty(period)) {
        const { ticksNum, periodMinutes } = PERIOD_QUERY_PARAMS_MAPPING[period];
        const tickPeriod = AVAILABLE_TICK_PERIOD_MAPPING[period];
        const fromPreviousMinutes = ticksNum * periodMinutes;
        const normalizedQueryParams = {
          period: tickPeriod,
          time_from: Moment().subtract(fromPreviousMinutes, 'minutes').unix(),
          time_to: Moment().unix(),
        };
        const astraData = yield call(fetchAstraKLine, normalizedQueryParams);
        const normalizedAstraData = astraChartNormalizer(astraData);

        yield put({
          type: 'saveAstraData',
          payload: normalizedAstraData,
        });
        if (typeof callback === 'function') {
          callback(normalizedAstraData);
        }
      }
    },
    *fetchOrderBook(_, { call, put }) {
      const orderBook = yield call(fetchOrderBook);
      const normalizedOrderBook = normalizeOrderBook(orderBook);
      yield put({
        type: 'saveOrderBook',
        payload: normalizedOrderBook,
      });
    },
  },
  reducers: {
    saveMarketSummary(state, action) {
      return {
        ...state,
        marketSummary: action.payload,
      };
    },
    saveAstraData(state, action) {
      return {
        ...state,
        astraData: action.payload,
      };
    },
    saveOrderBook(state, action) {
      return {
        ...state,
        orderBook: action.payload,
      };
    },
  },
};
