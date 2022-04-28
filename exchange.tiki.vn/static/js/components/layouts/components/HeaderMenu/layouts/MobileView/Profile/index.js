import React from 'react';
import isEmpty from 'lodash/isEmpty';
import { Button, Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import withAuthContainer from '@containers/AuthenticationContainer';
import AstraSvg from '@assets/images/astra.png';
import TikiXuSvg from '@assets/images/tiki-xu.svg';
import {
  ProfileName,
  ProfileContainer,
  BalanceContainer,
  CurrencyContainer,
  UnAuthorizedContainer,
} from './styles';
import { formatNumber } from '@utils';
import { ASTRA_LABEL, XU_LABEL } from '@constants';

const Profile = ({ userInfo, onLogin, onRegister }) => {
  const isLoggedIn = !isEmpty(userInfo);
  if (!isLoggedIn) {
    return (
      <ProfileContainer>
        <UnAuthorizedContainer>
          <Button type="text" onClick={onLogin}>
            Đăng nhập{' '}
          </Button>{' '}
          <Button type="primary" onClick={onRegister}>
            Đăng ký{' '}
          </Button>{' '}
        </UnAuthorizedContainer>{' '}
      </ProfileContainer>
    );
  }

  return (
    <ProfileContainer>
      <ProfileName>
        <Avatar size={40} src={userInfo.avatar_url} icon={<UserOutlined />} />{' '}
        <div>
          <div className="title"> {userInfo.name} </div>{' '}
          <div> {userInfo.email || userInfo.phone_number} </div>{' '}
        </div>{' '}
      </ProfileName>{' '}
      <BalanceContainer>
        <div className="content">
          <CurrencyContainer>
            <img src={AstraSvg} alt="astra-icon" />
            <div className="balance">
              {' '}
              {formatNumber(userInfo.astra, ASTRA_LABEL)}{' '}
            </div>{' '}
          </CurrencyContainer>{' '}
          <CurrencyContainer>
            <img src={TikiXuSvg} alt="tiki-xu" />
            <div className="balance">
              {' '}
              {formatNumber(userInfo.xu, XU_LABEL)}{' '}
            </div>{' '}
          </CurrencyContainer>{' '}
        </div>{' '}
      </BalanceContainer>{' '}
    </ProfileContainer>
  );
};

export default withAuthContainer(Profile);
