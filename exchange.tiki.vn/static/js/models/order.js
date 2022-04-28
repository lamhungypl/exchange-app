import {
  COMPLETED_STATUSES,
  ORDER_HISTORY_TAB,
  ORDER_TYPE,
  PROCESSING_STATUSES,
} from '@constants';
import { delay, formatNumber, repeat } from '@utils';
import * as R from 'ramda';
import {
  cancelOrder,
  createLimitOrder,
  createMarketOrder,
  getListOrder,
  getOrderDetail,
  getTrades,
} from '../services/order';

const traceCancelOrder = (id, order) => {
  if (
    !R.whereEq(
      {
        id,
      },
      order,
    )
  )
    return order;
  return Promise.race([
    repeat(
      getOrderDetail,
      R.whereEq({
        state: 'cancel',
      }),
      3,
      500,
    )(id),
    delay(2000).then(R.always(order)),
  ]);
};

const calcExecutedPercent = (executedVolume, originVolume) => {
  const executedVolumeNumber = Number(executedVolume);
  const originVolumeNumber = Number(originVolume);
  if (executedVolumeNumber === originVolumeNumber) return 100;
  const roundedNumber =
    Math.round((executedVolumeNumber / originVolumeNumber) * 1000) / 10;
  if (roundedNumber === 100) return 99.9;
  return roundedNumber;
};

const orderNormalizer = (orderDetail) => {
  const { executed_volume, origin_volume } = orderDetail;
  const executedPercent = calcExecutedPercent(executed_volume, origin_volume);
  return {
    ...orderDetail,
    executedPercent,
  };
};

export default {
  namespace: 'order',
  state: {
    processingOrders: [],
    completedOrders: [],
    orderDetail: {},
    orderTrades: {},
    response: {},
    orderTab: ORDER_HISTORY_TAB.PROCESSING_ORDER,
  },
  effects: {
    *fetchOrders({ payload }, { call, put }) {
      const { type = ORDER_HISTORY_TAB.PROCESSING_ORDER } = payload || {};
      const orderState =
        type === ORDER_HISTORY_TAB.PROCESSING_ORDER
          ? PROCESSING_STATUSES
          : COMPLETED_STATUSES;
      const response = yield call(getListOrder, {
        market: 'asaxu',
        state: orderState,
      });
      if (response && R.is(Array, response)) {
        const normalizedOrders = R.map(orderNormalizer, response);
        yield put({
          type: 'saveOrders',
          payload: normalizedOrders,
        });
      }
    },
    *fetchOrderDetail({ payload: id }, { call, put }) {
      const response = yield call(getOrderDetail, id);
      yield put({
        type: 'saveOrderDetail',
        payload: response,
      });
    },
    *fetchTrades({ payload: id }, { call, put, select }) {
      const response = yield call(getTrades, id);
      yield put({
        type: 'saveTrades',
        payload: {
          orderId: id,
          trades: response,
        },
      });
    },
    *createOrder({ payload, orderType, callback }, { call, put }) {
      try {
        const isMarketOrder = orderType === ORDER_TYPE.MARKET_ORDER;
        const createOrderFunc = isMarketOrder
          ? createMarketOrder
          : createLimitOrder;
        const response = yield call(createOrderFunc, payload);
        if (response) {
          yield call(delay, 500);
          yield put({
            type: 'auth/fetchUserInfo',
          });

          const orderDetail = yield call(getOrderDetail, response.id);
          yield put({
            type: 'order/focusNewOrder',
            payload: orderDetail,
          });
          if (typeof callback === 'function') {
            callback(orderDetail);
          }
        }
      } catch (error) {
        yield put({
          type: 'message/showApiError',
          payload: {
            error,
            formatters: {
              volume: formatNumber,
            },
          },
        });
      }
    },
    *cancelOrder({ payload: id, callback }, { call, put }) {
      try {
        const response = yield call(cancelOrder, id);
        if (!response) {
          throw new Error('Cancel failed');
        }
        yield call(traceCancelOrder, id, response);
        yield put({
          type: 'message/message',
          payload: {
            type: 'success',
            message: 'Hủy lệnh thành công',
          },
        });
        yield put({
          type: 'fetchOrders',
          payload: {
            type: ORDER_HISTORY_TAB.PROCESSING_ORDER,
          },
        });
        yield call(delay, 500);
        yield put({
          type: 'auth/fetchUserInfo',
        });
        if (typeof callback === 'function') {
          callback();
        }
      } catch (error) {
        yield put({
          type: 'message/message',
          payload: {
            type: 'error',
            message: 'Hủy lệnh thất bại',
          },
        });
      }
    },
    *focusNewOrder({ payload: { state } = {} }, { put, select }) {
      const currTab = yield select((state) => state.order.orderTab);
      const focusingTab = PROCESSING_STATUSES.includes(state)
        ? ORDER_HISTORY_TAB.PROCESSING_ORDER
        : ORDER_HISTORY_TAB.COMPLETED_ORDER;

      if (currTab === focusingTab) {
        yield put({
          type: 'fetchOrders',
          payload: {
            type: focusingTab,
          },
        });
      } else {
        yield put({
          type: 'switchOrderTab',
          payload: focusingTab,
        });
      }
    },
  },
  reducers: {
    saveOrders(state, { payload = [] }) {
      const [processingOrders, completedOrders] = payload.reduce(
        ([processing, completed], order) =>
          PROCESSING_STATUSES.includes(order.state)
            ? [[...processing, order], completed]
            : [processing, [...completed, order]],
        [[], []],
      );
      return {
        ...state,
        processingOrders,
        completedOrders,
      };
    },
    saveOrderDetail(state, { payload: detail }) {
      return {
        ...state,
        orderDetail: {
          ...state.orderDetail,
          [detail.id]: detail,
        },
      };
    },
    saveTrades(state, { payload: { orderId, trades } }) {
      return {
        ...state,
        orderTrades: {
          ...state.orderTrades,
          [orderId]: trades,
        },
      };
    },
    switchOrderTab(state, { payload }) {
      return {
        ...state,
        orderTab: payload,
      };
    },
  },
  autoload: {},
};
