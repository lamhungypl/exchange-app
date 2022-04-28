import React from 'react';
import { Slider } from '../styles';
import useAmountField from './useAmountField';

const SLIDER_MARKS = {
  0: '0%',
  25: '25%',
  50: '50%',
  75: '75%',
  100: '100%',
};

const tipFormatter = (value) => `${value}%`;

const AmountSliderField = (props) => {
  const { handleSliderChange, usageBalancePercent } = useAmountField(props);

  return (
    <Slider
      value={usageBalancePercent}
      onChange={handleSliderChange}
      min={0}
      max={100}
      marks={SLIDER_MARKS}
      tipFormatter={tipFormatter}
    />
  );
};

export default AmountSliderField;
