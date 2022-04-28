import React from 'react';
import styled, { css } from 'styled-components';
import { ORDER_STATUS } from '@constants';
import numeral from 'numeral';
import { SCREEN_BREAKPOINT } from '@config/layout';

const STATUS_LABEL_MAPPING = {
  [ORDER_STATUS.PARTIAL]: 'Khớp một phần',
  [ORDER_STATUS.DONE]: 'Khớp',
  [ORDER_STATUS.CANCEL]: 'Đã hủy',
};

const TAG_STYLE = {
  [ORDER_STATUS.PARTIAL]: css`
    color: var(--yellow-70);
  `,
  [ORDER_STATUS.DONE]: css`
    color: var(--color-up);
  `,
  [ORDER_STATUS.CANCEL]: css``,
};

const TagContainer = styled.div`
  padding: 4px 8px;
  width: fit-content;
  border-radius: 4px;
  background: var(--gray-1);
  color: var(--gray-40);

  ${({ status }) => TAG_STYLE[status]};

  @media only screen and (max-width: ${SCREEN_BREAKPOINT.sm}px) {
    padding: 4px;
    font-size: 12px;
  }
`;

const StatusCell = ({ record }) => {
  const orderStatus = React.useMemo(() => {
    if (
      record.state === ORDER_STATUS.CANCEL &&
      numeral(record.remaining_volume).value() <
        numeral(record.origin_volume).value()
    ) {
      return ORDER_STATUS.PARTIAL;
    }
    return record.state;
  }, [record]);

  return (
    <TagContainer status={orderStatus}>
      {STATUS_LABEL_MAPPING[orderStatus]}
    </TagContainer>
  );
};

export default StatusCell;
