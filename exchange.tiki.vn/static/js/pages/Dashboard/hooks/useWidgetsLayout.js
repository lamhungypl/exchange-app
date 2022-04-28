import React from 'react';
import { DEFAULT_LAYOUT_CONFIG } from '@config/layout';
import { useDispatch, useSelector } from 'react-redux';

const useWidgetsLayout = () => {
  const dispatch = useDispatch();
  const currentLayouts = useSelector((state) => state.layout.layouts);

  const handleBreakpointChange = React.useCallback(
    (breakpoint) =>
      dispatch({
        type: 'layout/setBreakpoint',
        payload: breakpoint,
      }),
    [dispatch],
  );

  const handleDragStop = React.useCallback(
    (layout, oldItem, newItem) => {
      dispatch({
        type: 'layout/persistCurrentLayout',
        payload: layout,
      });
    },
    [dispatch],
  );
  const handleResizeStop = React.useCallback(
    (layout, oldItem, newItem) => {
      dispatch({
        type: 'layout/persistCurrentLayout',
        payload: layout,
      });
    },
    [dispatch],
  );

  React.useEffect(() => {
    dispatch({
      type: 'layout/loadLayouts',
    });
  }, [dispatch]);

  return {
    onDragStop: handleDragStop,
    onResizeStop: handleResizeStop,
    onBreakpointChange: handleBreakpointChange,
    layouts: currentLayouts,
    ...DEFAULT_LAYOUT_CONFIG,
  };
};

export default useWidgetsLayout;
