import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import TrackingProvider from './TrackingProvider';

const AppProvider = ({ appConfig, children }) => {
  const { store } = appConfig;
  return (
    <ReduxProvider store={store._store}>
      <TrackingProvider> {children} </TrackingProvider>{' '}
    </ReduxProvider>
  );
};

export default AppProvider;
