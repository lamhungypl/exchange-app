import { css } from 'styled-components';

export const alwaysDisplayVerticalScrollbar = css`
  overflow-y: scroll !important;

  ::-webkit-scrollbar {
    -webkit-appearance: none;
    width: 6px;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 4px;
    background-color: rgba(0, 0, 0, 0.5);
    -webkit-box-shadow: 0 0 1px rgba(255, 255, 255, 0.3);
  }

  ::-webkit-scrollbar-corner {
    background-color: transparent;
  }
`;

export const alwaysDisplayHorizontalScrollbar = css`
  overflow-x: scroll !important;

  ::-webkit-scrollbar {
    -webkit-appearance: none;
    height: 6px;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 4px;
    background-color: rgba(0, 0, 0, 0.5);
    -webkit-box-shadow: 0 0 1px rgba(255, 255, 255, 0.3);
  }

  ::-webkit-scrollbar-corner {
    background-color: transparent;
  }
`;
