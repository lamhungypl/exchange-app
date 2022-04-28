import { connectRouter, routerMiddleware } from 'connected-react-router';

import * as core from '../../dva-core';

const dva = function (opts = {}) {
  const {
    history,
    broker,
    auth,
    persistor,
    middlewares: extMiddlewares = [],
  } = opts;
  const createOpts = {
    initialReducer: {
      router: connectRouter(history),
    },
    setupMiddlewares(middlewares) {
      return [
        routerMiddleware(history),
        persistor.middleware,
        ...extMiddlewares,
        ...middlewares,
      ];
    },
    setupApp(app) {
      app._history = history;
      app.broker = broker;
      app.auth = auth;
    },
  };

  const app = core.create(opts, createOpts);
  const oldAppStart = app.start;

  function start() {
    if (!app._store) {
      oldAppStart.call(app);
    }
  }
  return Object.assign(app, {
    start,
  });
};

export default dva;
