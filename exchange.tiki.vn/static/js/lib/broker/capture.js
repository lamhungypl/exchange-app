import * as R from 'ramda';
const equals = (a, b) => a === b;

const queues = {};

const captureStore =
  (q) =>
  (broker) =>
  (topic, value, compare = equals) => {
    if (!R.prop(topic, q)) {
      q[topic] = [];
    }
    const lastValue = R.last(q[topic]);
    if (!compare(value, lastValue)) {
      q[topic] = R.append(value, q[topic]);
      broker.invoke(topic, value);
    }
  };

export default captureStore(queues);
