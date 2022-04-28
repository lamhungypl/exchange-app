import React from 'react';
import { debounce, isEqual } from 'lodash';
import { SCREEN_BREAKPOINT } from '@config/layout';

export const usePrevious = (value) => {
  const ref = React.useRef();
  React.useEffect(() => {
    ref.current = value;
  }, [value]);
  return ref.current;
};

export const useInterval = (callback, time = 1000, dependencies = []) => {
  const intervalCallbackRef = React.useRef();
  const prevDependencies = usePrevious(dependencies);
  const [counter, setCounter] = React.useState(0);

  React.useEffect(() => {
    intervalCallbackRef.current = callback;
  }, [callback]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  React.useEffect(() => {
    if (!isEqual(dependencies, prevDependencies)) {
      setCounter(counter + 1);
    }
  });

  React.useEffect(() => {
    const tick = () => {
      if (typeof intervalCallbackRef.current === 'function') {
        intervalCallbackRef.current();
      }
    };
    tick();
    const intervalId = setInterval(tick, time);
    return () => clearInterval(intervalId);
  }, [time, counter]);
};

export const useWindowWidth = (delay = 800) => {
  const [width, setWidth] = React.useState(window.innerWidth);

  React.useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    const debouncedHandleResize = debounce(handleResize, delay);
    window.addEventListener('resize', debouncedHandleResize);
    return () => {
      window.removeEventListener('resize', debouncedHandleResize);
    };
  }, [delay]);

  return width;
};

export const useMobileLayout = () => {
  const screenWidth = useWindowWidth();
  const isMobile = screenWidth <= SCREEN_BREAKPOINT.sm;
  return {
    isMobile,
  };
};

export const useResponsiveLayout = ({
  mobileView: MobileView,
  desktopView: DesktopView,
} = {}) => {
  const { isMobile } = useMobileLayout();
  return {
    isMobile,
    layout: isMobile ? MobileView : DesktopView,
  };
};

export const useLayoutCustomization = () => {
  const screenWidth = useWindowWidth();
  const canCustomize = screenWidth >= SCREEN_BREAKPOINT.md;
  return {
    canCustomize,
  };
};
