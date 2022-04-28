import React from 'react';
import styled from 'styled-components';
import { List as AntList } from 'antd';
import moment from 'moment';
import {
  ASTRA_LABEL,
  MOMENT_DATE_TIME_DISPLAY_FORMAT,
  ORDER_HISTORY_TAB,
  XU_LABEL,
} from '@constants';
import { formatNumber } from '@utils';
import classNames from 'classnames';
import { ReactComponent as ArrowUp } from '@assets/images/arrow-up.svg';
import TradeProgressCell from './TradeProgressCell';
import TransactionCell from './TransactionCell';
import StatusCell from './StatusCell';
import TradesDetail from './TradesDetail';

const List = styled(AntList)`
  &.ant-list {
    height: 100%;
    overflow: scroll;
  }
`;

const ItemOuterWrapper = styled.div`
  padding: 12px;

  &:not(:last-child) {
    border-bottom: 2px solid var(--gray-1);
  }
`;

const ItemWrapper = styled.div`
  display: flex;
  grid-gap: 12px;
`;

const ContentWrapper = styled.div`
  .label {
    color: var(--gray-60);
  }

  .flex {
    display: flex;
    grid-gap: 4px;
  }
`;

const RightWrapper = styled.div`
  margin-left: auto;
  text-align: right;
`;

const ExpandWrapper = styled.div`
  margin-top: 12px;
  overflow: hidden;
  max-height: 0;
  transition: max-height 0.2s;

  &.expanded {
    max-height: 1000px;
    overflow: auto;
  }
`;

const useExpand = () => {
  const [expanded, setExpanded] = React.useState(false);
  const handleToggleExpand = React.useCallback(() => {
    setExpanded(!expanded);
  }, [expanded]);

  return {
    expanded,
    handleToggleExpand,
  };
};

const ListItem = ({ record = {}, orderType }) => {
  const { side, origin_volume, price } = record;
  const isProcessingOrder = orderType === ORDER_HISTORY_TAB.PROCESSING_ORDER;
  const orderCreationTime = moment(record.created_at).format(
    MOMENT_DATE_TIME_DISPLAY_FORMAT,
  );

  const { expanded, handleToggleExpand } = useExpand();

  return (
    <ItemOuterWrapper>
      <ItemWrapper>
        {isProcessingOrder && <TradeProgressCell record={record} />}
        <ContentWrapper>
          <div className="flex">
            <TransactionCell value={side} />
            <div>{formatNumber(origin_volume, { unit: ASTRA_LABEL })}</div>
            <span>
              <span className="label">- Giá: </span>
              <span>
                {price ? formatNumber(price, { unit: XU_LABEL }) : 'Thị trường'}
              </span>
            </span>
          </div>
          <div className="label">{orderCreationTime}</div>
        </ContentWrapper>
        <RightWrapper>
          {!isProcessingOrder && <StatusCell record={record} />}
          <ArrowUp
            onClick={handleToggleExpand}
            style={{
              transform: expanded ? 'unset' : 'rotate(180deg)',
              cursor: 'pointer',
              transition: '0.3s all',
            }}
          />
        </RightWrapper>
      </ItemWrapper>
      <ExpandWrapper className={classNames({ expanded })}>
        {expanded && <TradesDetail record={record} />}
      </ExpandWrapper>
    </ItemOuterWrapper>
  );
};

const MobileOrderList = ({ orderType, loading, dataSource }) => {
  return (
    <List
      rowKey="id"
      dataSource={dataSource}
      loading={loading}
      renderItem={(record) => (
        <ListItem record={record} orderType={orderType} />
      )}
    />
  );
};

export default MobileOrderList;
