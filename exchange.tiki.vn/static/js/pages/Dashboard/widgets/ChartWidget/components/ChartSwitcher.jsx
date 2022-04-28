import React from 'react';
import styled from 'styled-components';
import { CHART_MODE } from '@config/chart';
import { ReactComponent as CandleStickIcon } from '@assets/images/candle-stick.svg';
import { ReactComponent as AreaChartIcon } from '@assets/images/area-chart.svg';
import classNames from 'classnames';

const SwitchContainer = styled.div`
  display: flex;
  background: transparent;
  border-radius: 4px;
  height: 24px;
  overflow: hidden;
`;

const SwitchItem = styled.div`
  cursor: pointer;
  color: var(--gray-70);
  padding: 4px 12px;
  > * {
    width: 16px;
    height: 16px;
  }

  &.active {
    background: var(--gray-1);
    color: white;
  }
`;

const SWITCH_OPTIONS = [
  {
    value: CHART_MODE.K_LINE,
    label: <CandleStickIcon />,
  },
  {
    value: CHART_MODE.LINE,
    label: <AreaChartIcon />,
  },
];

const ChartSwitcher = ({ value, onChange }) => {
  const onItemClick = React.useCallback(
    (itemValue) => () => {
      onChange(itemValue);
    },
    [onChange],
  );

  return (
    <SwitchContainer>
      {SWITCH_OPTIONS.map(({ value: itemValue, label }) => (
        <SwitchItem
          key={itemValue}
          className={classNames({ active: value === itemValue })}
          onClick={onItemClick(itemValue)}
        >
          {label}
        </SwitchItem>
      ))}
    </SwitchContainer>
  );
};

export default ChartSwitcher;
