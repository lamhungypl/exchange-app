import React from 'react';
import { useInterval } from '@hooks';
import { useDispatch, useSelector } from 'react-redux';
import { ORDER_BOOK_TYPE } from '@constants';
import { MARKET_REFRESH_INTERVAL } from '@config/chart';
import {
  ItemContainer,
  OrderBookContainer,
  VolumeBar,
  WidgetContainer,
  OrderBookLayout,
} from './styles';
import { withSize } from 'react-sizeme';
import classNames from 'classnames';
import { WidgetTitle } from '@components/GridWidget';

const HORIZONTAL_LAYOUT_BREAKPOINT = 360;
const OrderBookItem = ({ totalVolume, volume, price, volumeValue }) => {
  const barWidth = (volumeValue / totalVolume) * 100;

  return (
    <ItemContainer>
      <div className="price">{price}</div>
      <div className="volume">{volume}</div>
      <VolumeBar className="volume-bar" barWidth={barWidth} />
    </ItemContainer>
  );
};

const OrderBookWidget = withSize({ monitorWidth: true })(
  ({ size: { width } }) => {
    const dispatch = useDispatch();
    const { asks = [], bids = [] } = useSelector(
      (state) => state.public.orderBook || {},
    );
    const [totalBidsVolume, bidItems = []] = bids || [];
    const [totalAsksVolume, askItems = []] = asks || [];
    const isHorizontalLayout = width >= HORIZONTAL_LAYOUT_BREAKPOINT;
    useInterval(() => {
      dispatch({ type: 'public/fetchOrderBook' });
    }, MARKET_REFRESH_INTERVAL);

    return (
      <WidgetContainer>
        <WidgetTitle>Sổ lệnh</WidgetTitle>
        <OrderBookLayout
          className={classNames({
            'horizontal-layout': isHorizontalLayout,
          })}
        >
          <OrderBookContainer type={ORDER_BOOK_TYPE.BID}>
            <ItemContainer className="label">
              <div>Giá đặt mua</div>
              <div>KL</div>
            </ItemContainer>
            {bidItems.map((item, index) => (
              <OrderBookItem
                key={index}
                totalVolume={totalBidsVolume}
                {...item}
              />
            ))}
          </OrderBookContainer>
          <OrderBookContainer type={ORDER_BOOK_TYPE.ASK}>
            <ItemContainer className="label">
              <div>Giá đặt bán</div>
              <div>KL</div>
            </ItemContainer>
            {askItems.map((item, index) => (
              <OrderBookItem
                key={index}
                totalVolume={totalAsksVolume}
                {...item}
              />
            ))}
          </OrderBookContainer>
        </OrderBookLayout>
      </WidgetContainer>
    );
  },
);

export default OrderBookWidget;
