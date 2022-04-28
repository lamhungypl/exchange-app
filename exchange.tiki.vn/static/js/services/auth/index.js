import * as R from 'ramda';
import {
  login as loginSSO,
  getAccessTokenByCustomerId,
  logoutAllAccounts,
  getTalaAccount,
} from '@tikivn/tiki-sso-client';
import { observerChannel, storageModule } from '../../helpers/utils';

const TOPICS = {
  VALUE: 'VALUE',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGIN_FAILED: 'LOGIN_FAILED',
  GET_TOKEN_SUCCESS: 'GET_TOKEN_SUCCESS',
  GET_TOKEN_FAILED: 'GET_TOKEN_FAILED',
  CHANGE: 'CHANGE',
  LOGOUT: 'LOGOUT',
};
const loginSuccessPayload = (value) => {
  return {
    value,
    type: TOPICS.LOGIN_SUCCESS,
  };
};
const loginFailedPayload = (value) => {
  return {
    value,
    type: TOPICS.LOGIN_FAILED,
  };
};
const getTokenSuccessPayload = (value) => {
  return {
    value,
    type: TOPICS.GET_TOKEN_SUCCESS,
  };
};
const getTokenFailedPayload = (value) => {
  return {
    value,
    type: TOPICS.GET_TOKEN_FAILED,
  };
};

const auth = () => {
  const channel = observerChannel();
  const storage = storageModule('seel-identity');
  const self = {
    session: storage.getItem() || {},
    channel: observerChannel(),
  };

  channel.register(TOPICS.VALUE, ({ value, type }) => {
    if (R.equals(TOPICS.LOGIN_SUCCESS, type)) {
      storage.setItem(value);
      self.session = value;
      channel.invoke(TOPICS.CHANGE, value);
    }
    if (R.equals(TOPICS.LOGIN_FAILED, type)) {
      storage.setItem({});
      self.session = {};
      channel.invoke(TOPICS.CHANGE, {});
    }
    if (R.equals(TOPICS.GET_TOKEN_SUCCESS, type)) {
      const currentStorageValue = storage.getItem();
      const equalsSession = (a, b) =>
        R.equals(
          R.pick(['accessToken', 'customerId'], a),
          R.pick(['accessToken', 'customerId'], b),
        );
      if (!equalsSession(currentStorageValue, value)) {
        storage.setItem(value);
      }
      if (!equalsSession(self.session, value)) {
        self.session = value;
        channel.invoke(TOPICS.CHANGE, value);
      }
    }
    if (R.equals(TOPICS.GET_TOKEN_FAILED, type)) {
      storage.setItem({});
      self.session = {};
      channel.invoke(TOPICS.CHANGE, {});
    }
    if (R.equals(TOPICS.LOGOUT, type)) {
      storage.setItem({});
      self.session = {};
      channel.invoke(TOPICS.CHANGE, {});
    }
  });

  const getAccessToken = () => {
    if (R.has('customerId', self.session)) {
      return getAccessTokenByCustomerId(self.session.customerId)
        .then(invokeMessage(TOPICS.VALUE, getTokenSuccessPayload))
        .catch(invokeMessage(TOPICS.VALUE, getTokenFailedPayload));
    }
    invokeMessage(TOPICS.VALUE, getTokenFailedPayload);
    return Promise.reject('Invalid session');
  };

  const refresh = () => {};
  const logout = () => {
    logoutAllAccounts();
    invokeMessage(
      TOPICS.VALUE,
      R.always({
        type: TOPICS.LOGOUT,
      }),
    )();
  };
  const invokeMessage =
    (topic, fn = R.identity) =>
    (value) => {
      channel.invoke(topic, fn(value));
      return value;
    };
  const resolveTalaAccount = async () => {
    const isNotLoggedIn = R.isEmpty(self.session);
    const isLoggedByTalaAccount = self.session.isTalaAccount;
    if (isNotLoggedIn || isLoggedByTalaAccount) {
      try {
        const talaAccount = await getTalaAccount();
        if (!!talaAccount) {
          const normalizedTalaAccount = {
            ...talaAccount,
            accessToken: talaAccount.access_token,
            customerId: talaAccount.customer_id,
            isTalaAccount: true,
          };
          invokeMessage(
            TOPICS.VALUE,
            loginSuccessPayload,
          )(normalizedTalaAccount);
        } else {
          //Handle revoke logged-out tala account
          throw new Error('Invalid account');
        }
      } catch {
        invokeMessage(TOPICS.VALUE, loginFailedPayload)(null);
      }
    }
  };
  const login = () => {
    return loginSSO()
      .then(invokeMessage(TOPICS.VALUE, loginSuccessPayload))
      .catch(invokeMessage(TOPICS.VALUE, loginFailedPayload));
  };
  const register = () => {
    return loginSSO({
      isRegister: true,
    })
      .then(invokeMessage(TOPICS.VALUE, loginSuccessPayload))
      .catch(invokeMessage(TOPICS.VALUE, loginFailedPayload));
  };

  const onChange = (cb) => {
    return channel.register(TOPICS.CHANGE, cb);
  };

  const getSession = () => {
    return Promise.resolve(self.session);
  };

  return {
    resolveTalaAccount,
    getAccessToken,
    refresh,
    login,
    register,
    logout,
    onChange,
    getSession,
  };
};
export default auth();
