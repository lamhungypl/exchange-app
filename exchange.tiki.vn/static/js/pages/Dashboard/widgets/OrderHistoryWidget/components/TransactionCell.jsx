import React from 'react';
import classNames from 'classnames';
import styled from 'styled-components';
import { TRANSACTION_TYPE } from '@constants';

const CellContainer = styled.div`
  &.buy {
    color: var(--color-up);
  }
  &.sell {
    color: var(--color-down);
  }
`;

const TransactionCell = ({ value }) => {
  const isBuy = value === TRANSACTION_TYPE.BUY;
  const className = classNames({ buy: isBuy, sell: !isBuy });
  return (
    <CellContainer className={className}>{isBuy ? 'Mua' : 'Bán'}</CellContainer>
  );
};

export default TransactionCell;
