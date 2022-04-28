import React from 'react';
import styled from 'styled-components';

const Label = styled.div`
  display: flex;
  align-items: center;
  font-size: 16px;
  line-height: 24px;
`;

const Suffix = styled.div`
  margin-left: 8px;
`;

const LabelField = ({ value, suffix, formatter }) => (
  <Label>
    {formatter ? formatter(value) : value}
    {suffix && <Suffix>{suffix}</Suffix>}
  </Label>
);
export default LabelField;
