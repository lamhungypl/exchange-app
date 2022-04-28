import React from 'react';
import { Link } from 'react-router-dom';
import { INTERNAL_ROUTE, LINK } from '@constants';
import { MenuOutlined } from '@ant-design/icons';
import withAuthContainer from '@containers/AuthenticationContainer';
import {
  Header,
  LeftHeader,
  RightHeader,
  Drawer,
  NavMenu,
  MenuItem,
} from './styles';
import Profile from './Profile';

const MobileView = ({ onLogout, logo }) => {
  const [menuVisible, setMenuVisible] = React.useState(false);

  const handleOpenMenu = React.useCallback(() => {
    setMenuVisible(true);
  }, []);
  const handleCloseMenu = React.useCallback(() => {
    setMenuVisible(false);
  }, []);

  return (
    <Header>
      <LeftHeader> {logo} </LeftHeader>{' '}
      <RightHeader>
        <MenuOutlined
          onClick={handleOpenMenu}
          style={{
            fontSize: '18px',
          }}
        />{' '}
      </RightHeader>{' '}
      <Drawer placement="right" onClose={handleCloseMenu} visible={menuVisible}>
        <Profile />
        <NavMenu>
          <MenuItem>
            <a href={LINK.TIKI_REWARDS} target="_blank" rel="noreferrer">
              Tiki Rewards{' '}
            </a>{' '}
          </MenuItem>{' '}
          <MenuItem>
            {' '}
            {/* TODO: Temporary solution to close menu, will revamp it later */}{' '}
            <Link onClick={handleCloseMenu} to={INTERNAL_ROUTE.EXCHANGE_FAQ}>
              FAQ{' '}
            </Link>{' '}
          </MenuItem>{' '}
          <MenuItem>
            <div onClick={onLogout}> Đăng xuất </div>{' '}
          </MenuItem>{' '}
        </NavMenu>{' '}
      </Drawer>{' '}
    </Header>
  );
};

export default withAuthContainer(MobileView);
