import styled from 'styled-components';
import { Layout, Drawer as AntDrawer } from 'antd';

const { Header: AntHeader } = Layout;

const Header = styled(AntHeader)`
  display: flex;
  width: calc(100% - 2px);
  height: var(--header-height);
  justify-content: space-between;
  background: var(--dark-bg);
  padding: 0 var(--side-padding);
  margin: 0 1px;

  * {
    color: white;
  }
`;

const LeftHeader = styled.div`
  display: flex;
`;

const RightHeader = styled.div`
  display: flex;
  grid-gap: 20px;
  align-items: center;

  > * {
    cursor: pointer;
  }
`;

const Logo = styled.div`
  user-select: none;
  font-weight: 600;
  font-size: 18px;
`;

const Drawer = styled(AntDrawer)`
  .ant-drawer-content {
    &,
    .ant-drawer-header {
      color: white;
      background: var(--dark-bg);
    }
    .ant-drawer-header-title {
      justify-content: flex-end;
      .ant-drawer-close {
        color: var(--gray-50);
        margin-right: 0;
      }
    }
  }
`;

const NavMenu = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 24px;
`;

const MenuItem = styled.div`
  text-align: center;

  * {
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    color: white;
  }
`;

export { Header, LeftHeader, RightHeader, Logo, Drawer, NavMenu, MenuItem };
