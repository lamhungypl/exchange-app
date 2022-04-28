import React from 'react';
import styled from 'styled-components';
import {
  Radio,
  Form as AntForm,
  Divider as AntDivider,
  Button as AntButton,
  Slider as AntSlider,
} from 'antd';
import InputNumber from '@components/InputNumber';
import {
  ExclamationCircleOutlined,
  InfoCircleOutlined,
} from '@ant-design/icons';

export const FIELD_ICON_SIZE = 24;

export const WidgetContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: var(--side-padding) 0;
`;

export const RadioButtonGroup = styled(Radio.Group)`
  padding: 0 var(--side-padding);
  margin-bottom: 16px;

  &.ant-radio-group {
    display: flex;
    grid-gap: 8px;
    width: 100%;

    > .ant-radio-button-wrapper {
      width: 50%;
      height: 36px;
      line-height: 34px;
      font-weight: 500;
      text-align: center;
      background: var(--gray-1);
      border-color: var(--gray-1);
      border-radius: 4px;
      color: white;

      &:focus-within {
        box-shadow: none;
      }

      &.ant-radio-button-wrapper-checked {
        color: white;
        border-color: transparent;

        &.btn-buy {
          background: var(--color-up);
          border-color: var(--color-up);
        }
        &.btn-sell {
          background: var(--color-down);
          border-color: var(--color-down);
        }
      }

      &.ant-radio-button-wrapper-checked::before,
      &:not(:first-child)::before {
        display: none;
      }
    }
  }
`;

export const RadioButton = styled(Radio.Button)``;

export const SectionContainer = styled.div`
  position: relative;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 10px 18px;
`;

export const SectionSubAction = styled.div`
  position: absolute;
  top: 10px;
  right: 18px;
  color: #848e9c;
  font-size: 12px !important;
  text-align: right;
  z-index: 9;

  .text {
    line-height: 22px;
    padding: 2px;

    > .amount {
      font-weight: 600;
    }
  }

  .ant-btn {
    margin: 4px 0;
    line-height: 22px;
    font-size: 12px;
  }
`;

export const SectionSeparator = styled.div`
  --icon-size: 32px;
  --half-icon-size: -16px;
  background: transparent;
  height: 6px;
  position: relative;
  text-align: center;

  > img.icon {
    position: absolute;
    top: var(--half-icon-size);
    left: calc(50% + var(--half-icon-size));
    width: var(--icon-size);
    height: var(--icon-size);
    z-index: 9;
  }
`;

const AuthAction = styled.div`
  display: flex;
  flex-wrap: wrap;
  line-height: 24px;
  color: white;
  text-align: center;
  justify-content: center;
  width: 100%;
`;

export const Button = styled(AntButton)`
  margin-top: 12px;
  border: none;
  color: white;
  &.btn-buy,
  &.btn-buy:disabled:hover {
    background: var(--color-up);
  }
  &.btn-sell,
  &.btn-sell:disabled:hover {
    background: var(--color-down);
  }
  &:disabled {
    opacity: 0.4;
  }
  &:hover,
  &:focus {
    &:not(:disabled) {
      color: white;
      opacity: 0.8;
    }
  }
  &.ant-btn-lg {
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
  }
  &.ant-btn-secondary {
    background: var(--gray-2);
  }
`;

export const AuthButtons = ({ onLogin, onRegister }) => (
  <AuthAction>
    <Button type="primary" size="large" block onClick={onRegister}>
      Đăng ký{' '}
    </Button>{' '}
    <Button type="secondary" block size="large" onClick={onLogin}>
      Đăng nhập{' '}
    </Button>{' '}
  </AuthAction>
);

export const BuyButton = (props) => (
  <Button className="btn-buy" size="large" block {...props}>
    Mua Astra{' '}
  </Button>
);
export const SellButton = (props) => (
  <Button className="btn-sell" size="large" block {...props}>
    Bán Astra{' '}
  </Button>
);

export const Form = styled(AntForm)`
  padding: var(--side-padding);
  &.ant-form-vertical .ant-form-item-label {
    padding: 2px 0;
  }
  .ant-form-item {
    margin-bottom: 16px;
    align-items: center;
    grid-gap: 12px;
  }
  .ant-form-item-label > label {
    color: var(--gray-60);
    line-height: 22px;
  }
  .ant-form-item-explain.ant-form-item-explain-connected {
    display: none;
  }
`;

export const FieldWrapper = styled.div`
  display: grid;
  grid-template-columns: ${FIELD_ICON_SIZE}px minmax(0, 1fr);
  grid-column-gap: 16px;
  > .ant-avatar {
    margin-top: 14px;
  }
`;
export const Field = styled(AntForm.Item)``;
export const Input = styled(InputNumber)`
  &.ant-input,
  &.ant-input-affix-wrapper,
  &.ant-input-affix-wrapper .ant-input {
    color: white;
    background: var(--gray-1) !important;
    border: none;
    border-radius: 4px;
    font-size: 16px;
    line-height: 24px;

    &:focus {
      box-shadow: none;
    }
  }

  &.ant-input-affix-wrapper {
    padding: 10px 12px;
  }
`;
export const Slider = styled(AntSlider)`
  &.ant-slider-with-marks {
    margin-bottom: 10px;
  }

  &.ant-slider:hover {
    .ant-slider-rail {
      background-color: var(--gray-70);
    }
    .ant-slider-track {
      background-color: var(--blue-70);
    }
  }

  .ant-slider-track,
  .ant-slider-rail,
  .ant-slider-step {
    height: 2px;
  }

  .ant-slider-track,
  .ant-slider-rail {
    background: var(--gray-70);
  }

  .ant-slider-mark-text {
    color: var(--gray-50);
    font-size: 12px;
    line-height: 24px;
    text-decoration: underline;
  }
  .ant-slider-track {
    background-color: var(--blue-70);
  }

  .ant-slider-dot,
  .ant-slider-dot-active {
    top: -1px;
    width: 4px;
    height: 4px;
    background-color: var(--gray-20);
    border-color: var(--gray-20);
  }

  .ant-slider-handle {
    background: white;
    border-color: white;
    width: 16px;
    height: 16px;
    margin-top: -6px;
  }

  .ant-slider-mark {
    display: none;
  }
`;
export const Divider = styled(AntDivider)`
  margin: 12px 0;
  border-color: grey;
`;
export const DescriptionField = styled.div`
  display: flex;
  justify-content: space-between;
  color: #848e9c;
  align-items: center;
  font-size: 12px;
  margin-top: 4px;
`;
export const OrderError = styled.div`
  color: #ff4d4f;
  text-align: center;
  margin-top: 8px;
  font-size: 12px;
`;
export const ErrorIcon = styled(ExclamationCircleOutlined)`
  font-size: 12px;
  color: #ff4d4f;
  margin-right: 4px;
`;
export const InfoIcon = styled(InfoCircleOutlined)`
  font-size: 12px;
  color: #848e9c;
  margin-left: 4px;
`;
export const TooltipLabel = styled.div`
  display: flex;
  align-items: center;
`;
