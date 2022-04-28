import React from 'react';
import styled from 'styled-components';
import classnames from 'classnames';

export const WidgetContainer = styled.div`
  display: grid;
  grid-template-columns: 120px minmax(0, 1fr);
  grid-gap: 20px;
  font-size: 12px;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 12px var(--side-padding);
`;

export const AstraContainer = styled.div`
  display: flex;
  grid-gap: 12px;
  align-items: center;
  > .label {
    font-weight: 600;
    font-size: 18px;
  }
`;

export const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 12px;
`;

export const FieldsContainer = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  grid-template-rows: repeat(2, minmax(0, 1fr));
  grid-gap: 8px 12px;
`;

const FieldContainer = styled.div`
  > .label {
    font-size: 10px;
    line-height: 12px;
    height: 24px;
    color: var(--gray-70);
  }

  &.bold > .label {
    height: 18px;
  }
  &.bold > .value {
    font-size: 18px;
    line-height: 20px;
  }

  > .value {
    font-size: 11px;
    font-weight: 600;
    line-height: 16px;
    &.inc {
      color: var(--color-up);
    }
    &.des {
      color: var(--color-down);
    }
    &.remain {
      color: var(--yellow-70);
    }
  }
`;

export const Field = ({ label, children, diffType = '', className }) => (
  <FieldContainer className={className}>
    {' '}
    {label && <div className="label"> {label} </div>}{' '}
    <div
      className={classnames(
        {
          [diffType]: true,
        },
        'value',
      )}
    >
      {' '}
      {children}{' '}
    </div>{' '}
  </FieldContainer>
);
