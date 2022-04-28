import createLoading from 'dva-loading';
import { createBrowserHistory } from 'history';
import * as R from 'ramda';
import { Future } from 'ramda-fantasy';

import broker from '../broker';
import setupRequest from './request';
import { setup as setupStore } from './store';

const isCaptureInfo = R.both(R.has('topic'), R.has('selector'));
const isAutoLoadInfo = R.either(
  isCaptureInfo,
  R.allPass([R.is(Array), R.length, R.all(isCaptureInfo)]),
);

const autoloadF = (captureTool) => (autoload) => (state) =>
  captureTool(autoload.topic, autoload.selector(state));

const elosnocConfig = ({
  persistKey = 'persist:data',
  enhancers = [],
  models = [],
  ...configs
}) =>
  Future.of({
    history: createBrowserHistory(),
    enhancers: [createLoading(), ...enhancers],
    models,
    broker,
    persistKey,
    ...configs,
  })
    .map(({ broker: brokerInstance, models, enhancers, ...cfs }) => {
      const autoloads = R.map(
        autoloadF(brokerInstance.captureStore),
        R.filter(isAutoLoadInfo, R.flatten(R.pluck('autoload', models))),
      );
      const onStateChange = (state) => {
        R.map(R.applyTo(state), autoloads);
      };
      const modelsWithoutAutoload = R.map(R.omit(['autoload']), models);
      return {
        ...cfs,
        broker: brokerInstance,
        models: modelsWithoutAutoload,
        enhancers: R.append(
          {
            onStateChange,
          },
          enhancers,
        ),
      };
    })
    .map(setupStore)
    .map(setupRequest);

export default elosnocConfig;
