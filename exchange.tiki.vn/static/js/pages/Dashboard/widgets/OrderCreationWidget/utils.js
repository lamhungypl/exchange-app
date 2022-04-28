import * as R from 'ramda';
import { formatNumber } from '@utils';

export const toInt = (value) => Number.parseInt(value, 10);
const toString = (value) => `${value}`;
const splitNumber = (splitN, value) => {
  const mulNum = Math.pow(10, splitN);
  return [Math.floor(value / mulNum), value % mulNum];
};

export const rightWay = ([upper, lower], splitN) => {
  const strValue = toString(lower);
  if (strValue.length > splitN) {
    const [extra, _lower] = splitNumber(splitN, lower);
    return [extra + upper, _lower];
  }
  return [upper, lower];
};
export const joinNumber = ([upper, lower], splitN) => {
  const [_upper, _lower] = rightWay([upper, lower], splitN);

  const mulNum = Math.pow(10, splitN);
  return R.concat(
    formatNumber(_upper),
    R.slice(1, Infinity, formatNumber(toInt(_lower) + mulNum)),
  );
};

export const genMaxValue = (a, b, type) => {
  if (R.equals('min', type)) return '0';
  const [min, max] = [R.min(a, b), R.max(a, b)];
  const res = R.map(R.multiply(min), splitNumber(9, max));
  return joinNumber(res, 9);
};

export const nanCheck = (v, v1, v2, type) =>
  v === 'NaN' ? genMaxValue(v1, v2, type) : v;

export const safeDiv = (n) => (d) => !!d ? n / d : '';
export const calcBalancePercent = (amount, balance) => (amount / balance) * 100;
