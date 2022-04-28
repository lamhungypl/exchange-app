import styled, { css } from 'styled-components';
import { ORDER_BOOK_TYPE } from '@constants';

const ORDER_STYLE_MAPPER = {
  [ORDER_BOOK_TYPE.BID]: css`
    .price {
      color: var(--color-up);
    }
    .volume-bar {
      background: var(--color-up);
    }
  `,
  [ORDER_BOOK_TYPE.ASK]: css`
    .price {
      color: var(--color-down);
    }
    .volume-bar {
      background: var(--color-down);
    }
  `,
};

export const WidgetContainer = styled.div`
  display: grid;
  grid-template-rows: fit-content(48px) minmax(0, 1fr);
  grid-row-gap: 16px;
  padding: var(--side-padding);
  height: 100%;
  font-size: 12px;

  .title {
    font-size: 14px;
    font-weight: 600;
    line-height: var(--title-line-height);
  }

  .erd_scroll_detection_container.erd_scroll_detection_container_animation_active {
    display: none !important;
  }
`;

export const OrderBookLayout = styled.div`
  display: grid;
  height: 100%;
  grid-template-rows: repeat(2, minmax(0, 1fr));
  grid-row-gap: 8px;

  &.horizontal-layout {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    grid-template-rows: minmax(0, 1fr);
    grid-column-gap: 16px;
  }
`;

export const OrderBookContainer = styled.div`
  overflow: hidden;
  ${({ type }) => ORDER_STYLE_MAPPER[type]}
`;

export const ItemContainer = styled.div`
  width: 100%;
  line-height: 16px;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &.label {
    height: 16px;
    color: var(--gray-60);
    margin-bottom: 8px;
  }

  &:not(.label) {
    height: 24px;
    padding: 4px 0;
  }

  > .volume {
    color: var(--gray-20);
  }
`;

export const VolumeBar = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: ${({ barWidth = 0 }) => barWidth}%;
  height: 100%;
  opacity: 0.15;
`;
