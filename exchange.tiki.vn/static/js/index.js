import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import elosnocConfig from './lib/elosnoc';
import models from './models';
import tikiAuthService from './services/auth';
import * as serviceWorker from './serviceWorker';
import 'antd/dist/antd.dark.css';
import { AppProvider } from 'providers';

const AppContainer = ({ appConfig }) => {
  const { history, auth, broker } = appConfig;
  return (
    <AppProvider appConfig={appConfig}>
      <App history={history} auth={auth} broker={broker} />{' '}
    </AppProvider>
  );
};

elosnocConfig({
  models,
  persistKey: 'persist:data',
  enhancers: [],
  auth: tikiAuthService,
}).fork(console.error, (appConfig) => {
  ReactDOM.render(
    <AppContainer appConfig={appConfig} />,
    document.getElementById('root'),
  );

  // If you want your app to work offline and load faster, you can change
  // unregister() to register() below. Note this comes with some pitfalls.
  // Learn more about service workers: https://bit.ly/CRA-PWA
  serviceWorker.unregister();
});
