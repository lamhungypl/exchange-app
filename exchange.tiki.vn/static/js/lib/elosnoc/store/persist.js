import * as R from 'ramda';

import { storageModule as createStorageModule } from './utils';

const createTracker = (id, cb) => {
  const self = {
    last: null,
  };
  return (state) => {
    const changed = state[id] !== self.last;
    if (changed) {
      self.last = state[id];
      cb(id, state[id]);
    }
  };
};

const persistModule = (persistKey, whitelist) => {
  const self = {
    rehyrated: [],
    storage: createStorageModule(persistKey, {}),
    trackers: [],
    statedDatabase: {},
    whitelist,
  };
  const ItemChange = (key, newData) => {
    self.statedDatabase[key] = newData;
  };

  const onStateChange = (state) => {
    R.forEach(R.tap(R.applyTo(state)), self.trackers);
    if (R.not(R.isEmpty(self.statedDatabase))) {
      self.storage.setItem(
        R.mergeLeft(self.statedDatabase, self.storage.getItem()),
      );
      self.statedDatabase = {};
    }
  };

  const middleware = (store) => (next) => (action) => {
    const nextValue = next(action);
    onStateChange(store.getState());
    return nextValue;
  };

  const rehyrate = (model) => {
    if (model.cache && !R.includes(model.namespace, self.whitelist)) {
      self.whitelist = R.append(model.namespace, self.whitelist);
    }
    if (
      R.includes(model.namespace, self.whitelist) &&
      !R.includes(model.namespace, self.rehyrated)
    ) {
      self.rehyrated = R.append(model.namespace, self.rehyrated);
      self.trackers = R.append(
        createTracker(model.namespace, ItemChange),
        self.trackers,
      );
      return {
        ...model,
        state: {
          ...model.state,
          ...R.pathOr({}, [model.namespace], self.storage.getItem()),
        },
      };
    }
    return model;
  };

  return {
    middleware,
    rehyrate,
  };
};

export default persistModule;
