import styled from 'styled-components';

const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
`;

const ProfileName = styled.div`
  display: flex;
  grid-gap: 6px;
  align-items: center;
  text-align: center;

  .title {
    font-weight: 600;
  }
`;

const BalanceContainer = styled.div`
  display: flex;
  grid-gap: 16px;
  cursor: initial;

  > * {
    font-size: 14px;
    line-height: 20px;
  }

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
  .plus-icon {
    margin-right: 4px;
  }
  .plus-text {
    color: #0b74e5;
  }
`;

const Divider = styled.div`
  width: 1px;
  height: 20px;
  border-left: 1px solid var(--gray-1);
  margin: 0 32px;
  cursor: initial;
`;

const SmallDivider = styled.div`
  width: 1px;
  height: 20px;
  border-left: 1px solid var(--gray-1);
  margin: 0 5px;
  cursor: initial;
`;

export {
  ProfileName,
  ProfileContainer,
  BalanceContainer,
  CurrencyContainer,
  Divider,
  SmallDivider,
};
