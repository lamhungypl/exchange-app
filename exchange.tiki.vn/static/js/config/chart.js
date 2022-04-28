export const CHART_MODE = {
  LINE: 'line',
  K_LINE: 'candlestick',
};

export const AVAILABLE_TICK_PERIOD_MAPPING = {
  '1m': '1',
  '5m': '5',
  '15m': '15',
  '30m': '30',
  '1h': '60',
  '2h': '120',
  '4h': '240',
  '6h': '360',
  '12h': '720',
  '1d': '1440',
  '3d': '4310',
  '1w': '10_080',
};

export const DEFAULT_TICKS_NUM = 500;

export const PERIOD_QUERY_PARAMS_MAPPING = {
  '5m': {
    ticksNum: DEFAULT_TICKS_NUM,
    periodMinutes: 5,
    tickDisplayFormat: 'DD/MM HH:mm',
  },
  '15m': {
    ticksNum: DEFAULT_TICKS_NUM,
    periodMinutes: 15,
    tickDisplayFormat: 'DD/MM HH:mm',
  },
  '30m': {
    ticksNum: DEFAULT_TICKS_NUM,
    periodMinutes: 30,
    tickDisplayFormat: 'DD/MM HH:mm',
  },
  '1h': {
    ticksNum: DEFAULT_TICKS_NUM,
    periodMinutes: 60,
    tickDisplayFormat: 'DD/MM HH:mm',
  },
  '6h': {
    ticksNum: DEFAULT_TICKS_NUM,
    periodMinutes: 360,
    tickDisplayFormat: 'DD/MM HH:mm',
  },
  '1d': {
    ticksNum: DEFAULT_TICKS_NUM,
    periodMinutes: 1440,
    tickDisplayFormat: 'DD/MM/YYYY',
  },
};

export const MARKET_REFRESH_INTERVAL = 5000;
