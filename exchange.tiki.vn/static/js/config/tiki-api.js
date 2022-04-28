import urlcat from 'urlcat';

const tikiAPI = process.env.REACT_APP_TIKI_API;

const sandseel = '/sandseel/api/v2/:main/:sub';

export default {
  TIKI_API: tikiAPI,
  SANDSEEL: {
    MARKET: {
      ORDERS: urlcat(tikiAPI, sandseel, {
        main: 'market',
        sub: 'orders',
      }),
      TRADES: urlcat(tikiAPI, sandseel, {
        main: 'market',
        sub: 'trades',
      }),
      LIMIT_ORDERS: urlcat(tikiAPI, sandseel, {
        main: 'market',
        sub: 'limit_orders',
      }),
      MARKET_ORDERS: urlcat(tikiAPI, sandseel, {
        main: 'market',
        sub: 'market_orders',
      }),
    },
    ACCOUNT: {
      BALANCES: urlcat(tikiAPI, '/sandseel/api/v2/account/me/balances'),
    },
    PUBLIC: {
      MARKET: urlcat(tikiAPI, sandseel, {
        main: 'public',
        sub: 'markets',
      }),
    },
  },
};
