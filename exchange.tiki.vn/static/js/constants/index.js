export const ASTRA_LABEL = 'Astra';
export const XU_LABEL = 'Xu';
export const DIFF_TYPE = {
  INC: 'inc',
  DES: 'des',
  REMAIN: 'remain',
};

export const ORDER_BOOK_TYPE = {
  ASK: 'ask',
  BID: 'bid',
};

export const TRANSACTION_TYPE = {
  BUY: 'buy',
  SELL: 'sell',
};

export const ORDER_TYPE = {
  LIMIT_ORDER: 'limit_order',
  MARKET_ORDER: 'market_order',
};

export const ORDER_STATUS = {
  PENDING: 'pending',
  WAIT: 'wait',
  DONE: 'done',
  CANCEL: 'cancel',
  PARTIAL: 'partial_match',
};

export const PROCESSING_STATUSES = [ORDER_STATUS.WAIT, ORDER_STATUS.PENDING];
export const COMPLETED_STATUSES = [ORDER_STATUS.DONE, ORDER_STATUS.CANCEL];

export const ORDER_HISTORY_TAB = {
  PROCESSING_ORDER: 'processing_order',
  COMPLETED_ORDER: 'completed_order',
};

export const MOMENT_DATE_TIME_DISPLAY_FORMAT = 'hh:mm:ss, DD/MM/YYYY';
export const STORAGE_KEY = {
  PERSISTED_LAYOUT: 'persisted-layout',
};

export const INTERNAL_ROUTE = {
  EXCHANGE_FAQ: '/faq',
};

export const LINK = {
  TIKI_REWARDS: 'https://tiki.vn/sep',
};
