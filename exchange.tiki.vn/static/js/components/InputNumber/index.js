import React from 'react';
import { isNumber } from 'lodash';
import { Input as AntInput } from 'antd';
import { formatNumber } from '@utils';
import numeral from 'numeral';

const InputNumber = React.forwardRef((props, ref) => {
  const { value, max, onChange, ...restProps } = props;
  const [internalValue, setInternalValue] = React.useState('');

  const normalizedValue = React.useMemo(() => {
    const fieldValue = isNumber(value) ? value : internalValue;
    if (!fieldValue) {
      return fieldValue;
    }
    const formattedValue = formatNumber(fieldValue);
    return formattedValue;
  }, [value, internalValue]);

  const handleKeyPress = React.useCallback((e) => {
    const isNumber = /^[0-9]$/i.test(e.key);
    if (!isNumber) {
      e.preventDefault();
    }
  }, []);

  const handleChange = React.useCallback(
    (e) => {
      const { value } = e.target;
      const numberValue = numeral(value).value();
      if ((max && numberValue > max) || numberValue > Number.MAX_SAFE_INTEGER) {
        if (max) {
          onChange(max);
        }
        return;
      }

      if (typeof onChange === 'function') {
        onChange(numberValue);
      }
      setInternalValue(numberValue);
    },
    [max, onChange],
  );

  return (
    <AntInput
      ref={ref}
      value={normalizedValue}
      onChange={handleChange}
      onKeyPress={handleKeyPress}
      {...restProps}
    />
  );
});

export default InputNumber;
