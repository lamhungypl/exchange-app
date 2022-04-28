import Moment from 'moment';

export const formatTickTime = (value, displayFormat) =>
  Moment.unix(value).format(displayFormat);
