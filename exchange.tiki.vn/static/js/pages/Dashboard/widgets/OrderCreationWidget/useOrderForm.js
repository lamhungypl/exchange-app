import React from 'react';
import { Form } from 'antd';
import * as R from 'ramda';
import isNumber from 'lodash/isNumber';
import { ORDER_TYPE, TRANSACTION_TYPE } from '@constants';
import { formatNumber } from '@utils';
import { useDispatch, useSelector } from 'react-redux';
import numeral from 'numeral';
import useDashboardTracking from '@pages/Dashboard/tracking';
import { calcBalancePercent, nanCheck, safeDiv } from './utils';

const FEE_RATE = 0.999;
const feeApply = (v) => v * FEE_RATE;
const floor = (s) => (v) =>
  R.equals(s, TRANSACTION_TYPE.SELL) ? Math.floor(v) : v;

const validateTransaction = (params) => {
  const { balance, orderType, volume, side, total, price } = params;
  const balanceValue = numeral(balance || '0').value();

  const usedBalance = R.equals('sell', side) ? volume : total;
  const isLessThanBalance = R.lte(usedBalance, balanceValue);
  if (!isNumber(usedBalance) || !isLessThanBalance) {
    return 'Khối lượng không hợp lệ, vui lòng kiểm tra lại thông tin!';
  }
  const isValidLimitOrder =
    price > 0 && (R.equals('sell', side) ? volume : total) !== 0;
  const isValidMarketOrder = (R.equals('sell', side) ? volume : total) !== 0;
  const isValidInput =
    orderType === ORDER_TYPE.LIMIT_ORDER
      ? isValidLimitOrder
      : isValidMarketOrder;

  return isValidInput ? '' : 'Vui lòng kiểm tra lại thông tin!';
};

const calculateTransactionPayload = (params) => {
  const { total, price, volume, side, orderType } = params;
  if (orderType === ORDER_TYPE.LIMIT_ORDER) {
    const normalizedVolume =
      side === TRANSACTION_TYPE.BUY ? safeDiv(total)(price) : volume;
    const normalizedValues = {
      side,
      price: Math.floor(price),
      volume: Math.floor(normalizedVolume),
    };
    return normalizedValues;
  } else if (orderType === ORDER_TYPE.MARKET_ORDER) {
    const normalizedValues = {
      side,
      amount: side === TRANSACTION_TYPE.BUY ? total : undefined,
      volume: side === TRANSACTION_TYPE.SELL ? volume : undefined,
    };
    return normalizedValues;
  }
  return null;
};

const useOrderForm = ({ side, orderType, openSuccessModal }) => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const [isValidTransaction, setValidTransaction] = React.useState(false);
  const userInfo = useSelector((state) => state.auth.userInfo);
  const balanceField = side === TRANSACTION_TYPE.BUY ? 'xu' : 'astra';
  const balance = userInfo[balanceField];
  const { trackSubmitExchangeOrder } = useDashboardTracking();

  const resetForm = React.useCallback(() => {
    form.resetFields();
    setValidTransaction(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  React.useEffect(() => {
    resetForm();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [side]);

  const onValuesChange = React.useCallback(
    (_, allValues) => {
      const { total, volume, price } = allValues;
      const isInvalidTransaction = validateTransaction({
        ...allValues,
        side,
        orderType,
        balance,
      });
      setValidTransaction(!isInvalidTransaction);

      const formatNumber3Options = R.equals(side, TRANSACTION_TYPE.BUY)
        ? {
            format: '0,0.[00]',
            roundingFn: Math.floor,
          }
        : {
            format: '0,0.[00]',
          };

      const buyVolume = safeDiv(total)(price);
      const sellTotal = volume * price;
      const number3Value =
        side === TRANSACTION_TYPE.BUY ? buyVolume : sellTotal;
      const isFilled = !!number3Value && !!price;
      const previewAmount = isFilled
        ? formatNumber(
            floor(side)(feeApply(number3Value)),
            formatNumber3Options,
          )
        : '';
      const normalizedPreviewAmount = nanCheck(
        previewAmount,
        R.equals(side, TRANSACTION_TYPE.BUY) ? total : volume,
        price,
        R.equals(side, TRANSACTION_TYPE.BUY) ? 'min' : 'max',
      );
      form.setFieldsValue({
        previewAmount: numeral(normalizedPreviewAmount).value() || 0,
      });
    },
    [form, side, orderType, balance],
  );

  const submitCallback = React.useCallback(
    (percentageOfBalance, orderType) => (orderDetail) => {
      resetForm();
      openSuccessModal(orderDetail);
      trackSubmitExchangeOrder({
        orderDetail,
        orderType,
        percentageOfBalance,
      });
    },
    [form, openSuccessModal, trackSubmitExchangeOrder],
  );

  const onFinish = React.useCallback(
    (values) => {
      const params = {
        side,
        orderType,
        ...values,
      };
      const normalizedValues = calculateTransactionPayload(params);
      const { total, volume } = values;
      const amount = side === TRANSACTION_TYPE.BUY ? total : volume;
      const percentageOfBalance = calcBalancePercent(amount, balance);
      dispatch({
        type: 'order/createOrder',
        orderType,
        payload: normalizedValues,
        callback: submitCallback(percentageOfBalance, orderType),
      });
    },
    [side, orderType, dispatch, balance, submitCallback],
  );

  const handleQuickTransaction = React.useCallback(() => {
    const valueName = side === TRANSACTION_TYPE.BUY ? 'total' : 'volume';
    const balanceField = side === TRANSACTION_TYPE.BUY ? 'xu' : 'astra';
    const formatBalance = (v) => Math.floor(v);
    form.setFieldsValue({
      [valueName]: formatBalance(userInfo[balanceField]),
    });
  }, [form, userInfo, side]);

  return {
    form,
    initialValues: {
      previewAmount: 0,
    },
    onValuesChange,
    onFinish,
    handleQuickTransaction,
    isSubmittable: isValidTransaction,
  };
};

export default useOrderForm;
