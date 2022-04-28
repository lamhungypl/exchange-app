import React from 'react';
import isEmpty from 'lodash/isEmpty';
import { Button, Dropdown, Menu, Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import withAuthContainer from '@containers/AuthenticationContainer';
import AstraSvg from '@assets/images/astra.png';
import { ReactComponent as ProfileIcon } from '@assets/images/user.svg';
import TikiXuSvg from '@assets/images/tiki-xu.svg';
import PlusIconSvg from '@assets/images/plus-icon.svg';
import {
  Divider,
  SmallDivider,
  ProfileName,
  ProfileContainer,
  BalanceContainer,
  CurrencyContainer,
} from './styles';
import { formatNumber } from '@utils';
import { ASTRA_LABEL, XU_LABEL } from '@constants';

const Profile = ({ userInfo, onLogin, onLogout, onRegister }) => {
  const isLoggedIn = !isEmpty(userInfo);
  if (!isLoggedIn) {
    return (
      <ProfileContainer>
        <Button type="text" onClick={onLogin}>
          Đăng nhập{' '}
        </Button>{' '}
        <Button type="primary" onClick={onRegister}>
          Đăng ký{' '}
        </Button>{' '}
      </ProfileContainer>
    );
  }
  const topupXuUrl = `${process.env.REACT_APP_TIKI_TOPUP_XU_URL}?callback=${process.env.REACT_APP_EXCHANGE_URL}`;

  return (
    <ProfileContainer>
      <BalanceContainer>
        <div className="label"> Tài sản của tôi: </div>{' '}
        <CurrencyContainer>
          <img src={AstraSvg} alt="astra-icon" />
          <div className="balance">
            {' '}
            {formatNumber(userInfo.astra, ASTRA_LABEL)}{' '}
          </div>{' '}
        </CurrencyContainer>{' '}
        <SmallDivider />
        <CurrencyContainer>
          <img src={TikiXuSvg} alt="tiki-xu" />
          <div className="balance">
            {' '}
            {formatNumber(userInfo.xu, XU_LABEL)}{' '}
          </div>{' '}
          <Button type="text" size="small" href={topupXuUrl}>
            <img src={PlusIconSvg} alt="topup-xu-icon" className="plus-icon" />
            <span className="plus-text"> Nạp </span>{' '}
          </Button>{' '}
        </CurrencyContainer>{' '}
      </BalanceContainer>{' '}
      <Divider />
      <Dropdown
        overlayClassName="header-menu-dropdown"
        overlay={
          <Menu>
            <Menu.Item key="profile">
              <ProfileName>
                <Avatar
                  size={48}
                  src={userInfo.avatar_url}
                  icon={<UserOutlined />}
                />{' '}
                <div>
                  <div className="title"> {userInfo.name} </div>{' '}
                  <div> {userInfo.email || userInfo.phone_number} </div>{' '}
                </div>{' '}
              </ProfileName>{' '}
            </Menu.Item>{' '}
            <Menu.Divider />
            <Menu.Item key="logout">
              <div onClick={onLogout}> Đăng xuất </div>{' '}
            </Menu.Item>{' '}
          </Menu>
        }
      >
        <ProfileIcon />
      </Dropdown>{' '}
    </ProfileContainer>
  );
};

export default withAuthContainer(Profile);
