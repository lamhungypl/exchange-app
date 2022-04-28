import React from 'react';
import { Responsive, WidthProvider } from '@components/GridLayout';
import GridWidget from '@components/GridWidget';
import { WIDGETS } from '@constants/layout';
import { useWidgetsLayout } from './hooks';
import {
  ChartWidget,
  MarketSummaryWidget,
  OrderBookWidget,
  OrderCreationWidget,
  OrderHistoryWidget,
} from './widgets';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';

const ResponsiveGridLayout = WidthProvider(Responsive);

const Dashboard = () => {
  const gridLayoutProps = useWidgetsLayout();

  return (
    <ResponsiveGridLayout {...gridLayoutProps}>
      <GridWidget
        key={WIDGETS.MARKET_SUMMARY}
        component={MarketSummaryWidget}
      />
      <GridWidget key={WIDGETS.CHART} component={ChartWidget} />
      <GridWidget key={WIDGETS.ORDER_BOOK} component={OrderBookWidget} />
      <GridWidget
        key={WIDGETS.ORDER_CREATION}
        component={OrderCreationWidget}
      />
      <GridWidget key={WIDGETS.ORDER_HISTORY} component={OrderHistoryWidget} />
    </ResponsiveGridLayout>
  );
};

export default Dashboard;
