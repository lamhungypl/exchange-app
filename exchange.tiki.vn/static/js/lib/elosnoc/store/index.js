import * as R from 'ramda';

import dva from './dva';
import injectModel from './injectModel';
import createPersistor from './persist';

const createStore = (appConfig) => {
  const {
    persistKey,
    whitelist = [],
    history,
    models,
    enhancers,
    middlewares,
    broker,
    auth,
  } = appConfig;
  const persistor = createPersistor(persistKey, whitelist);
  const appInstance = dva({
    history,
    persistor,
    middlewares,
    broker,
    auth,
  });
  const appInstanceWithInject = Object.assign(appInstance, {
    injectModel: injectModel.bind(appInstance, persistor),
  });
  R.forEach(appInstanceWithInject.injectModel, models);
  R.forEach(appInstanceWithInject.use, enhancers);
  appInstanceWithInject.start();
  return appInstanceWithInject;
};

const setup = (appConfig) => {
  return {
    ...appConfig,
    store: createStore(appConfig),
  };
};

export { setup };
export default createStore;
