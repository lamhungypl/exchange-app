import { isEmpty, isArray, isNumber, every } from 'lodash';
import { DEFAULT_WIDGETS_LAYOUTS } from '@config/layout';
import { safelyParseJson } from '@utils';
import { STORAGE_KEY } from '@constants';

const checkIsValidLayout = (layout) => {
  if (isEmpty(layout) || !isArray(layout)) {
    return false;
  }

  return every(
    layout,
    ({ x, y, w, h }) =>
      isNumber(x) && isNumber(y) && isNumber(w) && isNumber(h),
  );
};

export default {
  namespace: 'layout',
  state: {
    breakpoint: 'lg',
    layouts: DEFAULT_WIDGETS_LAYOUTS,
  },
  effects: {
    *loadLayouts(_, { put, select }) {
      const currentBreakpoint = yield select(
        (state) => state.layout.breakpoint,
      );
      const persistedLayout = safelyParseJson(
        localStorage.getItem(STORAGE_KEY.PERSISTED_LAYOUT),
        DEFAULT_WIDGETS_LAYOUTS,
      );
      const isValidPersistedLayout = checkIsValidLayout(
        persistedLayout[currentBreakpoint],
      );
      const appliedLayouts = isValidPersistedLayout
        ? {
            ...DEFAULT_WIDGETS_LAYOUTS,
            ...persistedLayout,
          }
        : DEFAULT_WIDGETS_LAYOUTS;

      yield put({
        type: 'setLayouts',
        payload: appliedLayouts,
      });
    },
    *persistCurrentLayout({ payload: layout }, { put, select }) {
      const currentBreakpoint = yield select(
        (state) => state.layout.breakpoint,
      );
      const persistedLayout = safelyParseJson(
        localStorage.getItem(STORAGE_KEY.PERSISTED_LAYOUT),
        DEFAULT_WIDGETS_LAYOUTS,
      );
      const newPersistedLayout = {
        ...persistedLayout,
        [currentBreakpoint]: layout,
      };
      localStorage.setItem(
        STORAGE_KEY.PERSISTED_LAYOUT,
        JSON.stringify(newPersistedLayout),
      );
      yield put({
        type: 'loadLayouts',
      });
    },
    *resetDefaultLayout(_, { put }) {
      yield put({
        type: 'setLayouts',
        payload: DEFAULT_WIDGETS_LAYOUTS,
      });
      yield put({
        type: 'persistCurrentLayout',
        payload: DEFAULT_WIDGETS_LAYOUTS,
      });
    },
  },
  reducers: {
    setLayouts(state, { payload }) {
      return {
        ...state,
        layouts: payload,
      };
    },
    setBreakpoint(state, { payload }) {
      return {
        ...state,
        breakpoint: payload,
      };
    },
  },
};
