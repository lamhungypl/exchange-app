import capture from './capture';
import { TOPICS } from './config';
import { observerChannel } from './utils';

const channel = observerChannel();
const captureStore = capture(channel);
export { TOPICS, captureStore };
channel.captureStore = captureStore;
channel.TOPICS = TOPICS;
export default channel;
