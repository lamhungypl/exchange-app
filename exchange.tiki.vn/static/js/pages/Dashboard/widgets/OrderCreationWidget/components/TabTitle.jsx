import React from 'react';
import { Tooltip } from 'antd';
import styled from 'styled-components';
import NewTag from '@components/NewTag';
import { ReactComponent as InfoCircleIcon } from '@assets/images/info-circle.svg';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;
const Title = styled.div`
  &:not(:first-child) {
    margin-left: 8px;
  }
  &:not(:last-child) {
    margin-right: 8px;
  }
`;

const TabTitle = ({ isNew, title, tooltipContent }) => (
  <Wrapper>
    {isNew && <NewTag />}
    <Title>{title}</Title>
    <Tooltip title={tooltipContent}>
      <InfoCircleIcon />
    </Tooltip>
  </Wrapper>
);

export default TabTitle;
