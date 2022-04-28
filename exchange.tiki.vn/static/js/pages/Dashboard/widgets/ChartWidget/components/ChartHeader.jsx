import React from 'react';
import styled from 'styled-components';
import TimeFilter from './TimeFilter';
import ChartSwitcher from './ChartSwitcher';
import { SCREEN_BREAKPOINT } from '@config/layout';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 50px 16px 0;

  @media only screen and (max-width: ${SCREEN_BREAKPOINT.sm}px) {
    padding: 0 0 16px 0;
  }
`;

const ChartHeader = ({
  selectedPeriod,
  onPeriodChange,
  selectedChartMode,
  onChartModeChange,
}) => {
  return (
    <Container>
      <TimeFilter value={selectedPeriod} onChange={onPeriodChange} />
      <ChartSwitcher value={selectedChartMode} onChange={onChartModeChange} />
    </Container>
  );
};

export default ChartHeader;
