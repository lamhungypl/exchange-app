import React from 'react';
import styled from 'styled-components';
import { DragOutlined } from '@ant-design/icons';
import { useLayoutCustomization } from '@hooks';

const WidgetWrapper = styled.div`
  position: relative;
  --handler-color: grey;
  &.react-grid-item {
    background: var(--dark-bg);
    overflow: auto;
  }

  > .widget-wrapper {
    width: 100%;
    height: 100%;
  }

  > .react-resizable-handle,
  > .react-resizable-handle::after {
    visibility: hidden;
    border-color: var(--handler-color);
  }
  &:hover {
    > .react-resizable-handle,
    > .react-resizable-handle::after {
      visibility: visible;
    }
  }

  .btn-drag {
    position: absolute;
    top: 2px;
    right: 2px;
    cursor: move;
    visibility: hidden;
    color: var(--handler-color);
    z-index: 10;
  }
  &:hover .btn-drag {
    visibility: visible;
  }
`;

const GridWidget = React.forwardRef((props, ref) => {
  const {
    component: Component,
    children,
    renderProps = {},
    onMouseUp,
    onMouseDown,
    onTouchEnd,
    ...restProps
  } = props;

  const { canCustomize } = useLayoutCustomization();

  return (
    <WidgetWrapper ref={ref} {...restProps}>
      {' '}
      {canCustomize && (
        <DragOutlined
          className="btn-drag"
          onMouseUp={onMouseUp}
          onMouseDown={onMouseDown}
          onTouchEnd={onTouchEnd}
        />
      )}{' '}
      <Component className="widget-wrapper" {...renderProps} /> {children}{' '}
    </WidgetWrapper>
  );
});

export default GridWidget;
export * from './components';
