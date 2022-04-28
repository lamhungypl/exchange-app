import { parse } from 'qs';
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

export const redirectUrl = {
  reserve: R.pipe(
    R.prop('search'),
    (queryString) =>
      parse(queryString, {
        ignoreQueryPrefix: true,
      }),
    R.prop('destination'),
    R.ifElse(Boolean, (value) => decodeURIComponent(value), R.always('/')),
  ),
  compose: (location, url) => {
    const { pathname, search, hash } = location;
    const destinationOnQueryString = parse(search, {
      ignoreQueryPrefix: true,
    }).destination;
    const currentLocation = encodeURIComponent(
      R.join('', [pathname, search, hash]),
    );
    const destination = destinationOnQueryString || currentLocation;
    return {
      pathname: url,
      search: destination ? `?destination=${destination}` : '',
    };
  },
};
const idManager = (() => {
  const self = {
    ids: new Set(),
  };

  function _guid() {
    let d = new Date().getTime();
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
      const r = (d + Math.random() * 16) % 16 | 0;
      d = Math.floor(d / 16);
      return (c === 'x' ? r : (r & 0x3) | 0x8).toString(16);
    });
  }
  const getId = () => {
    const newId = _guid();
    if (!self.ids.has(newId)) {
      self.ids.add(newId);
      return newId;
    }
    return getId();
  };

  return {
    getId,
  };
})();
export const guid = idManager.getId;
