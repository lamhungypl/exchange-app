import React from 'react';
import { Layout } from 'antd';
import HeaderMenu from './components/HeaderMenu';
import { LayoutWrapper } from './styles';

const { Content } = Layout;

const MasterLayout = ({ children }) => {
  return (
    <LayoutWrapper>
      <HeaderMenu />
      <Content>{children}</Content>
    </LayoutWrapper>
  );
};

export default MasterLayout;
