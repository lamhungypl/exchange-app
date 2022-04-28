import styled from 'styled-components';
import { Layout as AntLayout } from 'antd';

const LayoutWrapper = styled(AntLayout)`
  --header-height: 56px;
  display: grid;
  grid-template-rows: var(--header-height) minmax(0, 1fr);
  width: 100%;
  height: 100%;
  min-height: 100vh;
  color: var(--gray-20);
  font-size: 12px;
  line-height: 16px;
  background: black;
`;

export { LayoutWrapper };
