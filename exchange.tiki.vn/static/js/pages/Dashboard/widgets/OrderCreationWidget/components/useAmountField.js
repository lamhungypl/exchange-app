import React from 'react';
import { calcBalancePercent } from '../utils';

const useAmountField = (props) => {
  const { value = 0, onChange, balance = 0 } = props;
  const usageBalancePercent = React.useMemo(
    () => calcBalancePercent(value, balance),
    [value, balance],
  );

  const handleSliderChange = React.useCallback(
    (percent) => {
      const usageBalanceValue = Math.floor((percent * balance) / 100);
      onChange(usageBalanceValue);
    },
    [balance, onChange],
  );

  return {
    balance,
    usageBalancePercent,
    handleSliderChange,
  };
};

export default useAmountField;
