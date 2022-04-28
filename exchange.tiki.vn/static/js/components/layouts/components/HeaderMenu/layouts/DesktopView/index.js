import React from 'react';
import { Link } from 'react-router-dom';
import { INTERNAL_ROUTE, LINK } from '@constants';
import { Header, LeftHeader, RightHeader, NavMenu } from './styles';
import Profile from './Profile';
import Settings from './Settings';

const DesktopView = ({ logo }) => {
  return (
    <Header>
      <LeftHeader>
        {' '}
        {logo}{' '}
        <NavMenu>
          <a href={LINK.TIKI_REWARDS} target="_blank" rel="noreferrer">
            Tiki Rewards{' '}
          </a>{' '}
          <Link to={INTERNAL_ROUTE.EXCHANGE_FAQ}> FAQ </Link>{' '}
        </NavMenu>{' '}
      </LeftHeader>{' '}
      <RightHeader>
        <Profile />
        <Settings />
      </RightHeader>{' '}
    </Header>
  );
};

export default DesktopView;
