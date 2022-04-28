import styled from 'styled-components';
import { Layout } from 'antd';

const { Header: AntHeader } = Layout;

const Header = styled(AntHeader)`
  display: flex;
  width: calc(100% - 2px);
  height: var(--header-height);
  justify-content: space-between;
  background: var(--dark-bg);
  padding: 0 16px;
  margin: 0 1px;

  * {
    color: var(--gray-20);
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

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  grid-gap: 32px;
  margin-left: 32px;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;

  > a {
    font-size: 14px;
    line-height: 20px;
    font-weight: 400;
  }
`;

export { Header, LeftHeader, RightHeader, Logo, NavMenu };
