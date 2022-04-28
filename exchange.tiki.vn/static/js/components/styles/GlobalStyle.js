import { createGlobalStyle, css } from 'styled-components';
import { SCREEN_BREAKPOINT } from '@config/layout';

export const COLOR_UP = '#2DC26D';
export const COLOR_DOWN = '#FF424E';

export const STYLE_SYSTEM = {
  color: {
    'color-up': '#2DC26D',
    'color-down': '#FF424E',

    'green-50': '#2DC26D',

    'gray-1': '#303341',
    'gray-2': '#202433',
    'gray-20': '#EBEBF0',
    'gray-40': '#C4C4CF',
    'gray-50': '#A6A6B0',
    'gray-60': '#808089',
    'gray-70': '#64646D',
    'gray-80': '#515158',
    'gray-90': '#38383D',

    'yellow-70': '#FFC400',

    'blue-60': '#1A94FF',
    'blue-70': '#0B74E5;',
    'blue-100': '#052E5C',

    'dark-bg': '#141828',
  },
};

const colorVars = Object.entries(STYLE_SYSTEM.color)
  .map(([key, value]) => `--${key}: ${value};`)
  .join('\n');

const customStyles = css`
  .header-menu-dropdown.ant-dropdown {
    padding-top: 12px;
  }

  .ant-spin-container::after {
    background: rgba(255, 255, 255, 0.1);
  }

  .ant-tooltip-arrow > .ant-tooltip-arrow-content {
    background: var(--tooltip-background-color);
  }
  .ant-tooltip-inner {
    background: var(--tooltip-background-color);
    padding: 8px 12px;
    border-radius: 4px;
    line-height: 20px;
  }
`;

const GlobalStyle = createGlobalStyle`
  html {
    ${colorVars};
    --tooltip-background-color: #0b74e5;
    --side-padding: 16px;

    @media only screen and (max-width: ${SCREEN_BREAKPOINT.sm}px) {
      --side-padding: 8px;
    }
  }

  body {
    /* HACK: Fix horizontal scroll by removing styles added by react-preloaders2 
    when initializing which led to incorrect width calculation in react-grid-layout */
    overflow: auto !important;
    position: relative !important;

    font-family: 'Inter', sans-serif;
  }
  
  ${customStyles};
`;

export default GlobalStyle;
