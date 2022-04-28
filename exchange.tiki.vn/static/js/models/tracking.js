import * as RudderStack from '@tikivn/stackity-web-sdk';

export default {
  namespace: 'tracking',
  state: {
    isSdkInitialized: false,
    pendingEvents: [],
  },
  effects: {
    *track({ payload }, { put, select }) {
      const { eventName, eventProps } = payload;
      const isSdkInitialized = yield select(
        (state) => state.tracking.isSdkInitialized,
      );
      if (!isSdkInitialized) {
        yield put({
          type: 'pushPendingEvents',
          payload,
        });
        return;
      }
      RudderStack.track(eventName, eventProps);
    },
    *sendPendingEvents(_, { put, select }) {
      const pendingEvents = yield select(
        (state) => state.tracking.pendingEvents,
      );
      pendingEvents.forEach(({ eventName, eventProps }) => {
        RudderStack.track(eventName, eventProps);
      });
      yield put({
        type: 'clearPendingEvents',
      });
    },
  },
  reducers: {
    setInitialized(state, { payload }) {
      return {
        ...state,
        isSdkInitialized: payload,
      };
    },
    pushPendingEvents(state, { payload }) {
      return {
        ...state,
        pendingEvents: [...state.pendingEvents, payload],
      };
    },
    clearPendingEvents(state) {
      return {
        ...state,
        pendingEvents: [],
      };
    },
  },
};
