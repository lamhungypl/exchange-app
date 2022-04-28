import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useResponsiveLayout, useInterval } from '@hooks';
import { MARKET_REFRESH_INTERVAL } from '@config/chart';
import { MobileView, DesktopView } from './layouts';

const MarketSummaryWidget = () => {
  const dispatch = useDispatch();
  const marketSummary = useSelector(
    (state) => state.public.marketSummary || {},
  );

  const { layout: LayoutRenderer } = useResponsiveLayout({
    mobileView: MobileView,
    desktopView: DesktopView,
  });
  useInterval(() => {
    dispatch({ type: 'public/fetchMarketSummary' });
  }, MARKET_REFRESH_INTERVAL);

  return <LayoutRenderer {...marketSummary} />;
};

export default MarketSummaryWidget;
