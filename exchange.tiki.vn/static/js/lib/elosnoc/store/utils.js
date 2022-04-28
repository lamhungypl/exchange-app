import * as R from 'ramda';

const safeParseWithDefaultValue = (defaultValue) =>
  R.tryCatch(
    R.compose(R.defaultTo(defaultValue), (value) => JSON.parse(value)),
    R.always(defaultValue),
  );

export const observerChannel = () => {
  const self = {
    listeners: {},
  };
  const register = (name, cb) => {
    const listeners = self.listeners[name] || [];
    listeners.push(cb);
    self.listeners[name] = listeners;
    return () => removeListener(name, cb);
  };

  const removeListener = (name, cb) => {
    const listeners = self.listeners[name] || [];
    self.listeners[name] = R.reject(R.equals(cb), listeners);
  };

  const invoke = (name, ...data) => {
    const listeners = self.listeners[name] || [];
    R.map(R.compose(R.applyTo(data), R.apply), listeners);
  };
  const debug = (namer) => {
    console.log(namer, self.listeners[namer]);
  };

  return {
    register,
    invoke,
    debug,
  };
};

export const storageModule = (key, defaultValue) => {
  const isStorageChangedEvent = R.propEq('key', key);
  const internalSafeParse = safeParseWithDefaultValue(defaultValue);
  const self = {
    channel: observerChannel(),
  };

  const setItem = (session) => {
    window.localStorage.setItem(key, JSON.stringify(session));
  };
  const getItem = () => internalSafeParse(window.localStorage.getItem(key));
  const removeItem = () => window.localStorage.removeItem(key);
  const subscription = (callback) => {
    return self.channel.register('change', callback);
  };
  const pushChangeEvent = (value) => {
    return self.channel.invoke('change', value);
  };
  window.addEventListener(
    'storage',
    R.when(
      isStorageChangedEvent,
      R.compose(pushChangeEvent, internalSafeParse, R.path(['newValue'])),
    ),
  );
  return {
    setItem,
    getItem,
    removeItem,
    subscription,
  };
};
