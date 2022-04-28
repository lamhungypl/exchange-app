import * as R from 'ramda';

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
