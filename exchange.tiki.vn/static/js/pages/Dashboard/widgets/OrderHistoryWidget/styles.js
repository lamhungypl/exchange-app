import styled from 'styled-components';
import { Tabs as AntTabs, Table as AntTable } from 'antd';
import {
  alwaysDisplayHorizontalScrollbar,
  alwaysDisplayVerticalScrollbar,
} from '@components/styles';
import { WidgetTitle } from '@components/GridWidget';
import { SCREEN_BREAKPOINT } from '@config/layout';

const { TabPane: AntTabPane } = AntTabs;
export const WidgetContainer = styled.div`
  display: grid;
  grid-template-rows: 56px minmax(0, 1fr);
  height: 100%;
  width: 100%;

  > ${WidgetTitle} {
    padding: var(--side-padding);
  }
`;

export const Tabs = styled(AntTabs)`
  &.ant-tabs-top > .ant-tabs-nav::before {
    border-bottom-color: var(--gray-1);
  }

  &.ant-tabs-top > .ant-tabs-nav {
    margin: unset;
  }

  &.ant-tabs {
    color: var(--gray-60);
  }

  .ant-tabs-tab {
    padding: 12px 16px;
  }

  .ant-tabs-tab + .ant-tabs-tab {
    margin: unset;
  }

  .ant-tabs-tab-btn {
    line-height: 20px;
  }

  .ant-tabs-content {
    height: 100%;
    & > .ant-tabs-tabpane {
      color: white;
    }
  }

  @media only screen and (max-width: ${SCREEN_BREAKPOINT.sm}px) {
    &.ant-tabs > .ant-tabs-nav .ant-tabs-nav-list {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      width: 100%;

      & > .ant-tabs-tab {
        justify-content: center;
      }
    }

    .ant-tabs-content-holder {
      padding-top: 8px;
    }
  }
`;

export const PlaceholderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const TabPane = styled(AntTabPane)``;

export const Table = styled(AntTable)`
  .ant-table,
  .ant-table-thead > tr > th,
  .ant-table-tbody > tr.ant-table-placeholder:hover > td,
  .ant-table-expanded-row > .ant-table-cell {
    background: transparent;
    border-color: transparent;
  }

  .ant-table-thead > tr > th {
    border-color: var(--gray-2);
  }

  .ant-table-expanded-row > .ant-table-cell {
    padding: 8px 20px 12px 52px;
  }

  .processing_order.ant-table-expanded-row > .ant-table-cell {
    padding: 8px 20px 12px 112px;
  }

  .ant-table-tbody > tr > td.ant-table-cell-row-hover {
    background: transparent;
  }

  .ant-table-tbody > tr > td {
    border-bottom: none;
  }

  .ant-table-tbody > tr.ant-table-row:hover > td {
    background: none !important;
  }

  .ant-table-tbody > tr.ant-table-row {
    &.even {
      background: #202433;
    }
  }

  .ant-table-body {
    ${alwaysDisplayHorizontalScrollbar};
    ${alwaysDisplayVerticalScrollbar};
  }

  .ant-table-tbody > tr > td > .ant-table-wrapper:only-child .ant-table {
    margin-left: 40px;
  }

  .ant-table-cell.ant-table-cell-scrollbar {
    visibility: hidden;
  }

  .ant-table-thead .ant-table-cell {
    color: var(--gray-60);
    font-weight: 400;
  }

  .ant-table-cell {
    color: var(--gray-20);
    font-size: 12px;
  }

  .ant-table-cell::before {
    display: none;
  }

  .ant-table-row-expand-icon {
    background: transparent;
    color: white;
  }

  .ant-table-cell.trade-progress-cell {
    padding: 0;
    text-align: center;
  }
`;
