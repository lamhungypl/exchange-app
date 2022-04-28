import styled from 'styled-components';

export const WidgetContainer = styled.div`
  display: grid;
  grid-template-rows: fit-content(70px) minmax(0, 1fr);
  padding: var(--side-padding);

  .ant-spin-nested-loading,
  .ant-spin-container {
    min-width: 100%;
    width: 100%;
    height: 100%;
  }
`;

export const ChartContainer = styled.div`
  position: relative;
  width: calc(100% - var(--side-padding));
  height: 100%;
`;
