import * as R from 'ramda';

const createError = (message) => () => {
  throw Error(message);
};
const validateModel = (fn, message) => R.when(fn, createError(message));

function injectModel(persistor, model, force) {
  const models = this._models;
  const existsModel = R.find(
    R.whereEq({
      namespace: model.namespace,
    }),
    models,
  );
  validateModel(
    ({ namespace }) => R.isNil(namespace) || R.isEmpty(namespace),
    'Not valid model, require `namespace`, `reducers` fields',
  )(model);
  if (existsModel && !force) return;
  if (existsModel && force) return this.replaceModel(model);
  this.model(persistor.rehyrate(model));
}

export default injectModel;
