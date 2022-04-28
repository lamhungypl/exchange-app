import React from 'react';
import { Link } from 'react-router-dom';
import { useResponsiveLayout } from '@hooks';
import { DesktopView, MobileView } from './layouts';
import { Logo } from './styles';

const LogoComponent = () => (
  <Link to="/">
    <Logo
      src="https://salt.tikicdn.com/ts/upload/d1/19/a5/7ff2c3a8c0a43f48c3bd941934b42326.png"
      alt="Tiki Exchange logo"
    />
  </Link>
);

const HeaderMenu = () => {
  const { layout: LayoutRenderer } = useResponsiveLayout({
    mobileView: MobileView,
    desktopView: DesktopView,
  });

  return <LayoutRenderer logo={<LogoComponent />} />;
};

export default HeaderMenu;
