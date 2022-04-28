import React from 'react';
import styled from 'styled-components';
import { Tabs as AntTabs } from 'antd';
import { SCREEN_BREAKPOINT } from '@config/layout';

const StyledTabs = styled(AntTabs)`
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
    padding: 12px var(--side-padding);
  }

  .ant-tabs-tab + .ant-tabs-tab {
    margin: unset;
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

const Tabs = (props) => <StyledTabs {...props} />;
const TabPane = AntTabs.TabPane;

export { TabPane };
export default Tabs;
