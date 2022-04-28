import React from 'react';
import styled from 'styled-components';
import { Progress } from 'antd';
import { STYLE_SYSTEM } from '@components/styles/GlobalStyle';
import { TRANSACTION_TYPE } from '@constants';

const TradeProgress = styled(Progress)`
  .ant-progress-text {
    color: white;
  }
`;

const TradeProgressCell = ({ record = {} }) => {
  const { side, executedPercent } = record;
  const strokeColor =
    side === TRANSACTION_TYPE.BUY
      ? STYLE_SYSTEM.color['color-up']
      : STYLE_SYSTEM.color['color-down'];

  return (
    <TradeProgress
      type="circle"
      strokeWidth={12}
      trailColor={STYLE_SYSTEM.color['gray-1']}
      strokeColor={strokeColor}
      percent={Math.floor(executedPercent)}
      width={40}
    />
  );
};

export default TradeProgressCell;
