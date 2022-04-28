import numeral from 'numeral';
import * as R from 'ramda';
import {
    initClient as initSsoClient
} from '@tikivn/tiki-sso-client';
import {
    safelyParseJson
} from '@utils';
import * as RudderStack from '@tikivn/stackity-web-sdk';

import authService from '../services/auth';
import {
    getBalances,
    getUserInfo
} from '../services/me';

const TIKI_FIRST_GROUP_ID = 12;
export default {
    namespace: 'auth',
    state: {
        isInitialized: false,
        token: null,
        userInfo: {},
        isTikiUser: false,
    },
    effects: {
        * initAuth(_, {
            call,
            put
        }) {
            try {
                yield call(initSsoClient, {
                    env: process.env.REACT_APP_SSO_ENV
                });
                yield call(authService.resolveTalaAccount);
                const storedSession = safelyParseJson(
                    localStorage.getItem('seel-identity'), {}
                );
                if (!R.isEmpty(storedSession)) {
                    yield put({
                        type: 'saveSession',
                        payload: R.pathOr(null, ['accessToken'], storedSession),
                    });
                }
            } finally {
                yield put({
                    type: 'setInitialized',
                    payload: true
                });
            }
        },
        * login({
            payload: {
                isRegister = false
            } = {}
        }, {
            call,
            put
        }) {
            const authAction = isRegister ? authService.register : authService.login;
            const response = yield call(authAction);
            yield put({
                type: 'saveSession',
                payload: R.pathOr(null, ['accessToken'], response),
            });
        },
        sessionWatcher: [
            function*({
                take,
                put
            }) {
                while (true) {
                    const {
                        payload
                    } = yield take('saveSession');
                    if (payload) {
                        yield put({
                            type: 'fetchUserInfo'
                        });
                    } else {
                        yield put({
                            type: 'saveUserInfo',
                            payload: {}
                        });
                    }
                }
            },
            {
                type: 'watcher'
            },
        ],
        * fetchUserInfo(_, {
            call,
            put,
            all
        }) {
            try {
                const [userInfo, {
                    balances
                } = {}] = yield all([
                    call(getUserInfo),
                    call(getBalances),
                ]);
                const formatedBalance = {
                    astra: numeral(
                        R.pathOr(
                            '', ['balance'],
                            R.find(R.whereEq({
                                currency: 'asa'
                            }), balances || [])
                        )
                    ).value(),
                    xu: numeral(
                        R.pathOr(
                            '', ['balance'],
                            R.find(R.whereEq({
                                currency: 'xu'
                            }), balances || [])
                        )
                    ).value(),
                };
                yield put({
                    type: 'saveUserInfo',
                    payload: R.ifElse(
                        R.either(R.isEmpty, R.isNil),
                        R.always({}),
                        R.mergeRight(formatedBalance)
                    )(userInfo),
                });
                RudderStack.identify(userInfo.id, {
                    email: userInfo.email
                });
            } catch (error) {
                console.warn(error);
            }
        },
        * logout(_, {
            call,
            put
        }) {
            yield call(authService.logout);
        },
    },
    reducers: {
        setInitialized(state, action) {
            return {
                ...state,
                isInitialized: action.payload,
            };
        },
        saveSession(state, action) {
            return {
                ...state,
                token: action.payload,
            };
        },
        saveUserInfo(state, {
            payload
        }) {
            const isTikiUser = payload ? .group_id === TIKI_FIRST_GROUP_ID;
            return {
                ...state,
                userInfo: payload,
                isTikiUser,
            };
        },
    },
    subscriptions: {
        onEvent({
            auth,
            dispatch
        }) {
            return auth.onChange((session) => {
                dispatch({
                    type: 'saveSession',
                    payload: R.pathOr(null, ['accessToken'], session),
                });
            });
        },
    },
};