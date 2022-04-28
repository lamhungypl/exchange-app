import * as R from 'ramda';
import numeral from 'numeral';

export const formatNumber = (
  value = 0,
  { format = '0,0.[000]', unit, roundingFn } = {},
) => {
  const normalizedValue = typeof value === 'string' ? Number(value) : value;
  const formattedValue = numeral(normalizedValue).format(format, roundingFn);
  return R.join(' ', R.filter(Boolean, [formattedValue || '0', unit]));
};

export const delay = (time) => new Promise((res) => setTimeout(res, time));
export const repeat =
  (fn, checkFn, times, delayTime) =>
  async (...props) => {
    let response = null;
    try {
      for (var i = 0; i < times; i++) {
        response = await fn(...props);
        if (checkFn(response)) return response;
        await delay(delayTime);
      }
      return response;
    } catch (error) {
      return Promise.reject(error);
    }
  };

export const safelyParseJson = (jsonString, defaultValue = null) => {
  try {
    const jsonObject = JSON.parse(jsonString);
    return jsonObject || defaultValue;
  } catch {
    return defaultValue;
  }
};

export const compose = (...fns) =>
  fns.reduce(
    (f, g) =>
      (...args) =>
        f(g(...args)),
  );
