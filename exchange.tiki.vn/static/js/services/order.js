import axios from 'axios';
import { API } from '@config';
import urlcat from 'urlcat';

export const getListOrder = (params) =>
  axios.get(API.SANDSEEL.MARKET.ORDERS, {
    params,
  });

export const getOrderDetail = (id) =>
  axios.get(
    urlcat(API.SANDSEEL.MARKET.ORDERS, '/:id', {
      id,
    }),
  );

export const getTrades = (id) =>
  axios.get(urlcat(API.SANDSEEL.MARKET.TRADES), {
    params: {
      order_id: id,
    },
  });

export const createLimitOrder = (data) =>
  axios.post(API.SANDSEEL.MARKET.LIMIT_ORDERS, data);

export const createMarketOrder = (data) =>
  axios.post(API.SANDSEEL.MARKET.MARKET_ORDERS, data);

export const cancelOrder = (id) =>
  axios.post(
    urlcat(API.SANDSEEL.MARKET.ORDERS, '/:id/cancel', {
      id,
    }),
  );
