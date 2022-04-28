import React from 'react';
import styled from 'styled-components';
import { Button, Popconfirm } from 'antd';
import { ReactComponent as TrashIcon } from '@assets/images/trash-icon.svg';
import { useDispatch } from 'react-redux';
import useDashboardTracking from '@pages/Dashboard/tracking';

const StyledButton = styled(Button)`
  &.ant-btn {
    display: flex;
    align-items: center;
    border-color: transparent;
    * {
      color: var(--gray-20) !important;
    }

    &:hover {
      border-color: transparent;
    }
  }
`;

const ActionCell = ({ record }) => {
  const { id } = record;
  const dispatch = useDispatch();
  const { trackCancelExchangeOrder } = useDashboardTracking();
  const handleClickCancel = React.useCallback(() => {
    dispatch({
      type: 'order/cancelOrder',
      payload: id,
      callback: () => {
        trackCancelExchangeOrder(record);
      },
    });
  }, [id, record, trackCancelExchangeOrder, dispatch]);

  return (
    <Popconfirm
      title="Bạn có chắc chắn muốn hủy lệnh này?"
      okText="Hủy lệnh"
      cancelText="Không"
      okButtonProps={{ danger: true }}
      onConfirm={handleClickCancel}
      placement="topLeft"
    >
      <StyledButton type="default" ghost icon={<TrashIcon />}>
        &nbsp; Hủy lệnh
      </StyledButton>
    </Popconfirm>
  );
};

export default ActionCell;
