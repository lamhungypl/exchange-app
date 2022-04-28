import React from 'react';
import { useSelector } from 'react-redux';
import { ORDER_HISTORY_TAB, XU_LABEL } from '@constants';
import { formatNumber } from '@utils';
import { ReactComponent as ArrowUp } from '@assets/images/arrow-up.svg';
import {
  ActionCell,
  DateCell,
  StatusCell,
  TradeProgressCell,
  TradesDetail,
  TransactionCell,
} from './components';

const useTableColumns = ({ type }) => {
  const columns = React.useMemo(
    () => [
      type === ORDER_HISTORY_TAB.PROCESSING_ORDER
        ? {
            dataIndex: 'trade_progress',
            className: 'trade-progress-cell',
            width: 60,
            render: (_, record) => <TradeProgressCell record={record} />,
          }
        : null,
      {
        title: 'Thời gian',
        dataIndex: 'created_at',
        width: 180,
        render: (_, record) => <DateCell record={record} />,
      },
      {
        title: 'Loại giao dịch',
        dataIndex: 'side',
        width: 120,
        render: (text) => <TransactionCell value={text} />,
      },
      {
        title: 'Số lượng',
        dataIndex: 'origin_volume',
        width: 110,
        render: (text) => formatNumber(text),
      },
      {
        title: 'Giá giao dịch',
        dataIndex: 'price',
        width: 110,
        render: (text) =>
          text ? formatNumber(text, { unit: XU_LABEL }) : 'Thị trường',
      },
      {
        title: 'KL đã khớp',
        dataIndex: 'executed_volume',
        width: 110,
        render: (text) => formatNumber(text),
      },
      type === ORDER_HISTORY_TAB.PROCESSING_ORDER
        ? null
        : {
            title: 'Trạng thái',
            dataIndex: 'state',
            render: (_, record) => <StatusCell record={record} />,
          },
      type === ORDER_HISTORY_TAB.PROCESSING_ORDER
        ? {
            key: 'action',
            width: 150,
            render: (_, record) => <ActionCell record={record} />,
          }
        : null,
    ],
    [type],
  );
  return columns.filter((column) => column);
};

const useExpand = ({ type }) => {
  return {
    expandIcon: ({ expanded, onExpand, record }) =>
      Number(record.executed_volume) > 0 ? (
        <ArrowUp
          onClick={(e) => onExpand(record, e)}
          style={{
            transform: expanded ? 'unset' : 'rotate(180deg)',
            cursor: 'pointer',
            transition: '0.3s all',
          }}
        />
      ) : null,
    expandedRowClassName: () => type,
    expandedRowRender: (record, index, indent, expanded) =>
      expanded ? <TradesDetail record={record} /> : null,
  };
};

const useOrderTable = ({ type, containerHeight }) => {
  const loading = useSelector(
    (state) => state.loading.effects['order/fetchOrders'],
  );
  const dataSource = useSelector((state) =>
    type === ORDER_HISTORY_TAB.PROCESSING_ORDER
      ? state.order.processingOrders
      : state.order.completedOrders,
  );
  const columns = useTableColumns({ type });
  const expandable = useExpand({ type });
  const scroll = React.useMemo(
    () => ({
      x: columns.reduce((prev, { width }) => prev + width, 0),
      y: containerHeight - 46 - 52 - 8,
    }), // container - tab - table_header  - table_scroll
    [containerHeight, columns],
  );
  return {
    orderType: type,
    loading,
    rowKey: 'id',
    columns,
    dataSource,
    expandable,
    scroll,
    pagination: false,
  };
};

export default useOrderTable;
