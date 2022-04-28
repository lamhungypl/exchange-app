import * as R from 'ramda';
import isString from 'lodash/isString';
import { createSelector } from 'reselect';
import translate from '@utils/translate';

import { guid } from '../helpers/utils';

export default {
  namespace: 'message',
  state: {
    toast: [],
  },
  effects: {
    *showApiError({ payload: { error, formatters } }, { put }) {
      const errorContent = R.pathOr(null, ['errors', 0], error);
      const errorKey = isString(errorContent)
        ? errorContent
        : R.path(['error'], errorContent);
      const errorParams = isString(errorContent)
        ? {}
        : R.omit(['error'], errorContent);
      const errorMsg = translate(errorKey, errorParams, formatters);
      yield put({
        type: 'message',
        payload: {
          type: 'error',
          message: errorMsg,
        },
      });
    },
  },
  reducers: {
    message(state, action) {
      return {
        ...state,
        toast: R.append(
          R.set(R.lensProp('id'), guid(), action.payload),
          state.toast,
        ),
      };
    },
    flush(state, action) {
      return {
        ...state,
        toast: R.differenceWith(R.eqProps('id'), state.toast, action.payload),
      };
    },
  },
  autoload: [
    {
      topic: 'toast',
      selector: createSelector((state) => state.message.toast, R.identity),
    },
  ],
};
