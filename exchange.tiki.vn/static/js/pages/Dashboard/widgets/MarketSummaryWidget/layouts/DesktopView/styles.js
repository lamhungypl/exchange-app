import React from 'react';
import styled from 'styled-components';
import classnames from 'classnames';

export const WidgetContainer = styled.div`
  display: grid;
  grid-template-columns: 66px 1px minmax(0, 1fr);
  grid-gap: 20px;
  font-size: 12px;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 8px var(--side-padding);

  .ant-divider-vertical {
    height: 100%;
    margin: 0;
    border-color: var(--gray-2);
  }
`;

export const AstraContainer = styled.div`
  display: flex;
  grid-gap: 4px;
  align-items: center;
  > .label {
    font-size: 12px;
  }
`;

export const FieldsContainer = styled.div`
  display: flex;
  grid-gap: 32px;
  align-items: center;
  width: 100%;
  height: fit-content;
  overflow-x: auto;
`;

const FieldContainer = styled.div`
  display: grid;
  grid-row-gap: 2px;
  > .label {
    color: var(--gray-60);
    white-space: nowrap;
  }

  > .value {
    white-space: nowrap;
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

export const Field = ({ label, children, diffType = '' }) => (
  <FieldContainer>
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
