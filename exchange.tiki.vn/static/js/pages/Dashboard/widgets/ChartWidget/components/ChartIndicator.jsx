import React from 'react';
import styled from 'styled-components';
import classnames from 'classnames';
import { DIFF_TYPE } from '@constants';
import { formatTickTime } from '@pages/Dashboard/utils';
import { formatNumber } from '@utils';
import { CHART_MODE } from '@config/chart';

const IndicatorContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  grid-gap: 8px;
  z-index: 9;
  font-size: 12px;
  &.up .value {
    color: var(--color-up);
  }
  &.down .value {
    color: var(--color-down);
  }

  &.line .value {
    color: var(--blue-60);
  }
`;

const FieldContainer = styled.div`
  display: flex;
  grid-gap: 4px;
  line-height: 16px;
  > .label {
    color: grey;
  }
`;

const IndicatorField = ({ label, children }) => (
  <FieldContainer>
    {label && <div className="label">{label}</div>}
    <div className="value">{children}</div>
  </FieldContainer>
);

const LineIndicator = (props) => {
  const { time, close, timeDisplayFormat } = props;
  return (
    <IndicatorContainer className="line">
      {time && (
        <IndicatorField>
          {formatTickTime(time, timeDisplayFormat)}
        </IndicatorField>
      )}
      {close && (
        <IndicatorField label="Đóng">{formatNumber(close)}</IndicatorField>
      )}
    </IndicatorContainer>
  );
};

const CandleIndicator = (props) => {
  const { time, high, low, open, close, timeDisplayFormat } = props;
  const type = open > close ? DIFF_TYPE.DES : DIFF_TYPE.INC;
  return (
    <IndicatorContainer
      className={classnames({
        up: type === DIFF_TYPE.INC,
        down: type === DIFF_TYPE.DES,
      })}
    >
      {time && (
        <IndicatorField>
          {formatTickTime(time, timeDisplayFormat)}
        </IndicatorField>
      )}
      {open && <IndicatorField label="Mở">{formatNumber(open)}</IndicatorField>}
      {close && (
        <IndicatorField label="Đóng">{formatNumber(close)}</IndicatorField>
      )}
      {high && (
        <IndicatorField label="Cao">{formatNumber(high)}</IndicatorField>
      )}
      {low && <IndicatorField label="Thấp">{formatNumber(low)}</IndicatorField>}
    </IndicatorContainer>
  );
};

const IndicatorRenderer = ({ chartMode, ...renderProps }) =>
  ({
    [CHART_MODE.LINE]: <LineIndicator {...renderProps} />,
    [CHART_MODE.K_LINE]: <CandleIndicator {...renderProps} />,
  }[chartMode]);

const ChartIndicator = (props) => {
  const { chartMode } = props;

  return <IndicatorRenderer chartMode={chartMode} {...props} />;
};

export default ChartIndicator;
