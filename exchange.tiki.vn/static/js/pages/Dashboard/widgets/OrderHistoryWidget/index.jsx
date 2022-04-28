import React from 'react';
import withAuthContainer from '@containers/AuthenticationContainer';
import { useDispatch, useSelector } from 'react-redux';
import { withSize } from 'react-sizeme';
import { ORDER_HISTORY_TAB } from '@constants';
import { isEmpty } from 'lodash';
import { compose } from '@utils';
import {
  PlaceholderContainer,
  TabPane,
  Tabs,
  WidgetContainer,
  Table,
} from './styles';
import useOrderTable from './useOrderTable';
import { EmptyState, MobileOrderList } from './components';
import Link from '@components/Link';
import { WidgetTitle } from '@components/GridWidget';
import { useInterval, useResponsiveLayout } from '@hooks';
import { MARKET_REFRESH_INTERVAL } from '@config/chart';

const OrderTable = ({ type, selectingTab, containerHeight }) => {
  const dispatch = useDispatch();
  const processingOrders = useSelector((state) => state.order.processingOrders);
  const tableProps = useOrderTable({ type, containerHeight });
  const { dataSource } = tableProps;
  const shouldRefetchOrders =
    selectingTab === ORDER_HISTORY_TAB.PROCESSING_ORDER &&
    type === selectingTab &&
    !isEmpty(processingOrders);

  React.useEffect(() => {
    dispatch({ type: 'order/fetchOrders', payload: { type } });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [type]);

  useInterval(() => {
    if (shouldRefetchOrders) {
      dispatch({ type: 'order/fetchOrders', payload: { type } });
    }
  }, MARKET_REFRESH_INTERVAL);

  const { layout: LayoutRenderer } = useResponsiveLayout({
    mobileView: MobileOrderList,
    desktopView: Table,
  });

  if (isEmpty(dataSource)) {
    return <EmptyState />;
  }

  return <LayoutRenderer {...tableProps} />;
};

const OrdersContent = compose(
  withSize({ monitorHeight: true }),
  withAuthContainer,
)(({ size: { height: containerHeight }, isLoggedIn, onLogin, onRegister }) => {
  const dispatch = useDispatch();
  const selectingTab = useSelector((state) => state.order.orderTab);
  const handleTabChange = React.useCallback(
    (activeKey) => {
      dispatch({ type: 'order/switchOrderTab', payload: activeKey });
    },
    [dispatch],
  );

  if (!isLoggedIn) {
    return (
      <PlaceholderContainer>
        Vui lòng <Link onClick={onLogin}>Đăng nhập</Link> hoặc{' '}
        <Link onClick={onRegister}>Đăng ký</Link> để giao dịch
      </PlaceholderContainer>
    );
  }

  return (
    <Tabs
      activeKey={selectingTab}
      onChange={handleTabChange}
      destroyInactiveTabPane
    >
      <TabPane key={ORDER_HISTORY_TAB.PROCESSING_ORDER} tab="Đang xử lý">
        <OrderTable
          selectingTab={selectingTab}
          type={ORDER_HISTORY_TAB.PROCESSING_ORDER}
          containerHeight={containerHeight}
        />
      </TabPane>
      <TabPane key={ORDER_HISTORY_TAB.COMPLETED_ORDER} tab="Đã hoàn thành">
        <OrderTable
          type={ORDER_HISTORY_TAB.COMPLETED_ORDER}
          containerHeight={containerHeight}
        />
      </TabPane>
    </Tabs>
  );
});

const OrderHistoryWidget = () => {
  return (
    <WidgetContainer>
      <WidgetTitle>Giao dịch của tôi</WidgetTitle>
      <OrdersContent />
    </WidgetContainer>
  );
};

export default OrderHistoryWidget;
