import React from 'react';
import styled from 'styled-components';
import classnames from 'classnames';
import { SCREEN_BREAKPOINT } from '@config/layout';

const FilterWrapper = styled.div`
  display: flex;
  align-items: center;
  grid-gap: 8px;
  cursor: pointer;

  @media only screen and (max-width: ${SCREEN_BREAKPOINT.sm}px) {
    grid-gap: 4px;
  }
`;

const FilterItem = styled.div`
  border-radius: 4px;
  color: var(--gray-60);
  font-size: 12px;
  font-weight: 500;
  height: fit-content;
  line-height: 16px;
  padding: 4px 12px;

  &.active {
    color: white;
    background: var(--gray-1);
  }

  @media only screen and (max-width: ${SCREEN_BREAKPOINT.sm}px) {
    padding: 4px 10px;
  }
`;

const DEFAULT_PERIOD_OPTIONS = [
  {
    value: '5m',
    label: '5m',
  },
  {
    value: '15m',
    label: '15m',
  },
  {
    value: '30m',
    label: '30m',
  },
  {
    value: '1h',
    label: '1h',
  },
  {
    value: '6h',
    label: '6h',
  },
  {
    value: '1d',
    label: '1D',
  },
];

const TimeFilter = ({
  value: activeValue,
  onChange,
  filterOptions = DEFAULT_PERIOD_OPTIONS,
}) => {
  const onItemClick = React.useCallback(
    (itemValue) => () => {
      onChange(itemValue);
    },
    [onChange],
  );
  return (
    <FilterWrapper>
      {filterOptions.map(({ value, label }) => (
        <FilterItem
          key={value}
          className={classnames({ active: value === activeValue })}
          onClick={onItemClick(value)}
        >
          {label}
        </FilterItem>
      ))}
    </FilterWrapper>
  );
};

export default TimeFilter;
