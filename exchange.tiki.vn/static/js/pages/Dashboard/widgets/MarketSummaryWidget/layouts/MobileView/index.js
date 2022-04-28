import React from 'react';
import { Avatar } from 'antd';
import AstraSvg from '@assets/images/astra.png';
import {
  AstraContainer,
  Field,
  FieldsContainer,
  LeftContainer,
  WidgetContainer,
} from './styles';

const LOGO_SIZE = 36;

const MobileView = (props) => {
  const {
    diffType,
    diffValue,
    highest24hValue,
    lowest24hValue,
    matchingPrice,
    volumeInLast24h,
  } = props;

  return (
    <WidgetContainer>
      <LeftContainer>
        <AstraContainer>
          <Avatar size={LOGO_SIZE} className="logo" src={AstraSvg} />{' '}
          <div className="label"> Astra </div>{' '}
        </AstraContainer>{' '}
        <Field label="Giá gần nhất" className="bold">
          {' '}
          {matchingPrice}{' '}
        </Field>{' '}
      </LeftContainer>{' '}
      <FieldsContainer>
        <Field label="Thay Đổi 24h" diffType={diffType}>
          {' '}
          {diffValue}{' '}
        </Field>{' '}
        <Field label="24h Cao"> {highest24hValue} </Field>{' '}
        <Field label="24h Thấp"> {lowest24hValue} </Field>{' '}
        <Field label="KL giao dịch trong 24h"> {volumeInLast24h} </Field>{' '}
      </FieldsContainer>{' '}
    </WidgetContainer>
  );
};

export default MobileView;
