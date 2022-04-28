import prefixedDispatch from './prefixedDispatch';
import { isFunction } from './utils';

export function run(subs, model, app, onError) {
  const funcs = [];
  const nonFuncs = [];
  for (const key in subs) {
    if (Object.prototype.hasOwnProperty.call(subs, key)) {
      const sub = subs[key];
      const unlistener = sub(
        {
          dispatch: prefixedDispatch(app._store.dispatch, model),
          auth: app.auth,
          broker: app.broker,
        },
        onError,
      );
      if (isFunction(unlistener)) {
        funcs.push(unlistener);
      } else {
        nonFuncs.push(key);
      }
    }
  }
  return {
    funcs,
    nonFuncs,
  };
}

export function unlisten(unlisteners, namespace) {
  if (!unlisteners[namespace]) return;

  const { funcs } = unlisteners[namespace];
  for (const unlistener of funcs) {
    unlistener();
  }
  delete unlisteners[namespace];
}
