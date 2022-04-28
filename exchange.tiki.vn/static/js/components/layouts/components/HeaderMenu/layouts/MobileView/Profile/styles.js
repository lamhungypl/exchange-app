import styled from 'styled-components';

const UnAuthorizedContainer = styled.div`
  display: flex;
  justify-content: center;
  grid-gap: 12px;

  .ant-btn {
    color: white;
  }
`;

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  grid-gap: 12px;
  border-bottom: 1px solid var(--gray-70);
  padding-bottom: 24px;
  margin-bottom: 24px;
`;

const ProfileName = styled.div`
  display: flex;
  grid-gap: 8px;
  align-items: center;
  font-size: 12px;
  text-align: center;

  .title {
    font-size: 14px;
    font-weight: 600;
  }
`;

const BalanceContainer = styled.div`
  cursor: initial;

  .label {
    color: var(--gray-70);
    line-height: 20px;
  }

  .content {
    display: flex;
  }
`;

const CurrencyContainer = styled.div`
  display: flex;
  line-height: 20px;
  align-items: center;
  > img {
    width: 16px;
    height: 16px;
    margin-right: 4px;
  }
  > .balance {
    font-weight: 600;
  }
  & + & {
    padding-left: 8px;
    margin-left: 8px;
    border-left: 1px solid var(--gray-70);
  }
`;

export {
  UnAuthorizedContainer,
  ProfileName,
  ProfileContainer,
  BalanceContainer,
  CurrencyContainer,
};
