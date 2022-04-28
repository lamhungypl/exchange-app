import axios from 'axios';
import urlcat from 'urlcat';
import { API } from '@config';

export const fetchMarketSummary = () => {
  return axios.get(urlcat(API.SANDSEEL.PUBLIC.MARKET, 'astra/summary'), {
    isPublic: true,
  });
};
export const fetchAstraKLine = (params) => {
  return axios.get(urlcat(API.SANDSEEL.PUBLIC.MARKET, 'asaxu/klines', params), {
    isPublic: true,
  });
};
export const fetchOrderBook = () => {
  return axios.get(urlcat(API.SANDSEEL.PUBLIC.MARKET, 'asaxu/depth'), {
    isPublic: true,
  });
};
