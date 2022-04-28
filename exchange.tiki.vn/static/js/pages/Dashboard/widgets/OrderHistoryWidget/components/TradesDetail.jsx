import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import {
  ASTRA_LABEL,
  PROCESSING_STATUSES,
  TRANSACTION_TYPE,
  XU_LABEL,
} from '@constants';
import { formatNumber } from '@utils';
import { SCREEN_BREAKPOINT } from '@config/layout';
import { useMobileLayout } from '@hooks';
import ActionCell from './ActionCell';

const DetailContainer = styled.div`
  display: grid;
  grid-template-columns: 180px 110px 120px;
  grid-gap: 4px;
  background: var(--gray-2);
  border-radius: 12px;
  padding: 12px;

  @media only screen and (max-width: ${SCREEN_BREAKPOINT.sm}px) {
    grid-template-columns: 120px repeat(2, minmax(0, 1fr));
    grid-column-gap: 16px;
    grid-row-gap: 4px;
  }
`;

const HeaderTitle = styled.div`
  color: var(--gray-50);
`;

const MobileAction = styled.div`
  margin-top: 8px;
`;

const TradesDetail = ({ record }) => {
  const { id, side, state } = record;
  const { isMobile } = useMobileLayout();
  const dispatch = useDispatch();
  const trades = useSelector((state) => state.order.orderTrades[id] || []);
  const feeType = side === TRANSACTION_TYPE.BUY ? ASTRA_LABEL : XU_LABEL;

  const showCancelBtn = isMobile && PROCESSING_STATUSES.includes(state);
  React.useEffect(() => {
    dispatch({ type: 'order/fetchTrades', payload: id });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <DetailContainer>
      <HeaderTitle>Khối lượng khớp</HeaderTitle>
      <HeaderTitle>Giá khớp</HeaderTitle>
      <HeaderTitle>Phí ({feeType})</HeaderTitle>
      {trades.map(({ amount, price, fee_amount }) => (
        <>
          <div>{formatNumber(amount)}</div>
          <div>{formatNumber(price)}</div>
          <div>{formatNumber(fee_amount)}</div>
        </>
      ))}
      <div>-</div>
      <div>-</div>
      <div>-</div>
      {showCancelBtn && (
        <MobileAction>
          <ActionCell record={record} />
        </MobileAction>
      )}
    </DetailContainer>
  );
};

export default TradesDetail;
