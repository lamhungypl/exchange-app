import React from 'react';
import { ORDER_TYPE, TRANSACTION_TYPE } from '@constants';
import { Avatar, Tooltip } from 'antd';
import AstraSvg from '@assets/images/astra.png';
import TikiXuSvg from '@assets/images/tiki-xu.svg';
import { ReactComponent as InfoCircleIcon } from '@assets/images/info-circle.svg';
import withAuthContainer from '@containers/AuthenticationContainer';
import { formatNumber } from '@utils';
import useDashboardTracking from '@pages/Dashboard/tracking';

import {
  AuthButtons,
  BuyButton,
  Field,
  FIELD_ICON_SIZE,
  Form,
  Input,
  RadioButton,
  RadioButtonGroup,
  SellButton,
  TooltipLabel,
  WidgetContainer,
} from './styles';
import useOrderForm from './useOrderForm';
import { useSelector } from 'react-redux';
import Tabs, { TabPane } from '@components/Tabs';
import {
  AmountSliderField,
  SuccessModal,
  useSuccessModalProps,
  TabTitle,
} from './components';
import LabelField from '@components/LabelField';

const FORM_STYLE_PROPS = {
  layout: 'horizontal',
  labelAlign: 'left',
  labelCol: { lg: 8, md: 24, sm: 24, xs: 24 },
  wrapperCol: { lg: 16, md: 24, sm: 24, xs: 24 },
  colon: false,
  requiredMark: false,
  labelWrap: true,
};

const TOOLTIP_CONTENT = {
  LIMIT_ORDER:
    'Lệnh chờ là lệnh mua hoặc bán với mức giá cụ thể. Hệ thống sẽ khớp lệnh với mức giá bạn mong muốn hoặc mức giá tốt hơn.',
  MARKET_ORDER:
    'Lệnh nhanh là lệnh mua với giá thấp nhất hoặc bán với giá cao nhất trên thị trường. Lệnh sẽ được thực hiện ngay lập tức.',
  USAGE_BALANCE:
    'Số lượng và mức giá khớp lệnh sau cùng sẽ phụ thuộc vào kết quả giao dịch thực tế.',
};

const ORDER_TABS = [
  {
    key: ORDER_TYPE.MARKET_ORDER,
    title: 'Lệnh nhanh',
    isNew: true,
    tooltipContent: TOOLTIP_CONTENT.MARKET_ORDER,
  },
  {
    key: ORDER_TYPE.LIMIT_ORDER,
    title: 'Lệnh chờ',
    tooltipContent: TOOLTIP_CONTENT.LIMIT_ORDER,
  },
];

const MarketLabel = () => <span>Thị trường</span>;
const UsageBalanceLabel = ({ isMarketOrder }) => (
  <TooltipLabel>
    Số Xu sử dụng&nbsp;
    {isMarketOrder && (
      <Tooltip title={TOOLTIP_CONTENT.USAGE_BALANCE}>
        <InfoCircleIcon />
      </Tooltip>
    )}
  </TooltipLabel>
);

const ExecTransactionBtn = withAuthContainer(
  ({ type, disabled, isLoggedIn, onLogin, onRegister }) => {
    const orderCreating = useSelector(
      (state) => state.loading.effects['order/createOrder'],
    );
    const BtnRenderer = type === TRANSACTION_TYPE.BUY ? BuyButton : SellButton;
    return isLoggedIn ? (
      <BtnRenderer
        loading={orderCreating}
        size="large"
        htmlType="submit"
        disabled={disabled}
      />
    ) : (
      <AuthButtons onLogin={onLogin} onRegister={onRegister} />
    );
  },
);

const BuyFormContent = withAuthContainer(
  ({ userInfo: { xu }, isMarketOrder }) => {
    return (
      <>
        <Field name="price" label="Giá mua Astra">
          {isMarketOrder ? (
            <MarketLabel />
          ) : (
            <Input
              size="large"
              placeholder="0,0"
              suffix={<Avatar size={FIELD_ICON_SIZE} src={TikiXuSvg} />}
              autoComplete="off"
              disabled={isMarketOrder}
            />
          )}
        </Field>
        <Field
          name="total"
          label={<UsageBalanceLabel isMarketOrder={isMarketOrder} />}
        >
          <Input
            size="large"
            placeholder="0,0"
            suffix={<Avatar size={FIELD_ICON_SIZE} src={TikiXuSvg} />}
            max={xu}
            autoComplete="off"
          />
        </Field>
        <Field name="total" label="Chọn nhanh % tài sản">
          <AmountSliderField balance={xu} />
        </Field>
        {!isMarketOrder && (
          <Field name="previewAmount" label="KL Astra ước tính nhận được">
            <LabelField
              formatter={formatNumber}
              suffix={<Avatar size={FIELD_ICON_SIZE} src={AstraSvg} />}
            />
          </Field>
        )}
      </>
    );
  },
);

const SellFormContent = withAuthContainer(
  ({ userInfo: { astra }, isMarketOrder }) => {
    return (
      <>
        <Field name="price" label="Giá bán Astra">
          {isMarketOrder ? (
            <MarketLabel />
          ) : (
            <Input
              size="large"
              placeholder="0,0"
              suffix={<Avatar size={FIELD_ICON_SIZE} src={TikiXuSvg} />}
              autoComplete="off"
            />
          )}
        </Field>
        <Field name="volume" label="KL Astra">
          <Input
            size="large"
            placeholder="0,0"
            suffix={<Avatar size={FIELD_ICON_SIZE} src={AstraSvg} />}
            max={astra}
            autoComplete="off"
          />
        </Field>
        <Field name="volume" label="Chọn nhanh % tài sản">
          <AmountSliderField balance={astra} />
        </Field>
        {!isMarketOrder && (
          <Field name="previewAmount" label="Số Xu ước tính nhận được">
            <LabelField
              formatter={formatNumber}
              suffix={<Avatar size={FIELD_ICON_SIZE} src={TikiXuSvg} />}
            />
          </Field>
        )}
      </>
    );
  },
);

const useTransactionType = () => {
  const [selectedTransactionType, setTransactionType] = React.useState(
    TRANSACTION_TYPE.BUY,
  );
  const { trackSelectOrderType } = useDashboardTracking();

  const handleChangeTransactionType = React.useCallback(
    (e) => {
      const type = e.target.value;
      setTransactionType(type);
      trackSelectOrderType(type);
    },
    [trackSelectOrderType],
  );

  return {
    selectedTransactionType,
    handleChangeTransactionType,
  };
};

const useOrderType = ({ defaultOrderType }) => {
  const [selectedOrderType, setOrderType] = React.useState(defaultOrderType);
  React.useEffect(() => {
    setOrderType(defaultOrderType);
  }, [defaultOrderType]);
  const handleChangeOrderType = React.useCallback((type) => {
    setOrderType(type);
  }, []);

  return {
    selectedOrderType,
    handleChangeOrderType,
  };
};

const OrderForm = ({
  orderType,
  selectedTransactionType,
  openSuccessModal,
}) => {
  const orderFormProps = useOrderForm({
    side: selectedTransactionType,
    orderType,
    openSuccessModal,
  });
  const { isSubmittable } = orderFormProps;
  const FormRenderer =
    selectedTransactionType === TRANSACTION_TYPE.BUY
      ? BuyFormContent
      : SellFormContent;

  const isMarketOrder = orderType === ORDER_TYPE.MARKET_ORDER;

  return (
    <Form {...orderFormProps} {...FORM_STYLE_PROPS}>
      <FormRenderer isMarketOrder={isMarketOrder} />
      <ExecTransactionBtn
        type={selectedTransactionType}
        disabled={!isSubmittable}
      />
    </Form>
  );
};

const visibleOrderTabs = ORDER_TABS;
const OrderCreationWidget = () => {
  const defaultOrderType = React.useMemo(() => visibleOrderTabs[0].key, []);
  const { selectedTransactionType, handleChangeTransactionType } =
    useTransactionType();
  const { selectedOrderType, handleChangeOrderType } = useOrderType({
    defaultOrderType,
  });
  const { handleOpenModal: openSuccessModal, ...successModalProps } =
    useSuccessModalProps();
  const orderFormProps = { selectedTransactionType, openSuccessModal };

  return (
    <WidgetContainer>
      <RadioButtonGroup
        value={selectedTransactionType}
        defaultValue={TRANSACTION_TYPE.BUY}
        onChange={handleChangeTransactionType}
        buttonStyle="solid"
      >
        <RadioButton className="btn-buy" value={TRANSACTION_TYPE.BUY}>
          Mua
        </RadioButton>
        <RadioButton className="btn-sell" value={TRANSACTION_TYPE.SELL}>
          Bán
        </RadioButton>
      </RadioButtonGroup>
      <Tabs
        activeKey={selectedOrderType}
        onChange={handleChangeOrderType}
        destroyInactiveTabPane
      >
        {visibleOrderTabs.map(({ key, ...titleProps }) => (
          <TabPane key={key} tab={<TabTitle {...titleProps} />}>
            <OrderForm orderType={key} {...orderFormProps} />
          </TabPane>
        ))}
      </Tabs>
      <SuccessModal {...successModalProps} />
    </WidgetContainer>
  );
};

export default OrderCreationWidget;
