import React from 'react';
import moment from 'moment';
import styled from 'styled-components';
import { MOMENT_DATE_TIME_DISPLAY_FORMAT } from '@constants';

const Wrapper = styled.div`
  color: var(--gray-60);
`;

const DateCell = ({ record }) => (
  <Wrapper>
    {moment(record.created_at).format(MOMENT_DATE_TIME_DISPLAY_FORMAT)}
  </Wrapper>
);

export default DateCell;
