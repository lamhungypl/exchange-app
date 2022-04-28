import React from 'react';
import styled from 'styled-components';
import { Empty as AntEmpty } from 'antd';
import EmptyStateImg from '@assets/images/empty-state.png';

const Empty = styled(AntEmpty)`
  &.ant-empty {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const DescriptionContainer = styled.div`
  margin-top: 24px;
  max-width: 320px;

  .description-text {
    color: var(--gray-50);
    line-height: 20px;
    margin-top: 8px;
  }
`;

const EmptyState = () => {
  return (
    <Empty
      image={<img src={EmptyStateImg} alt="empty" />}
      description={
        <DescriptionContainer>
          <div>Bạn chưa có giao dịch nào</div>
          <div className="description-text">
            Các giao dịch mua bán Astra của bạn sẽ được hiển thị ở đây
          </div>
        </DescriptionContainer>
      }
    />
  );
};

export default EmptyState;
