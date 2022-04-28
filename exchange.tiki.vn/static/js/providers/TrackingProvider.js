import isEmpty from 'lodash/isEmpty';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as RudderStack from '@tikivn/stackity-web-sdk';

const TrackingContext = React.createContext(null);
const useTrackingContext = () => React.useContext(TrackingContext);

const useRudderStackTracking = () => {
  const dispatch = useDispatch();
  const { isSdkInitialized, pendingEvents } = useSelector(
    (state) => state.tracking,
  );
  React.useEffect(() => {
    RudderStack.load(
      process.env.REACT_APP_RUDDERSTACK_WRITE_KEY,
      process.env.REACT_APP_RUDDERSTACK_DATA_PLANE_URL,
      {
        configUrl: process.env.REACT_APP_RUDDERSTACK_CONTROL_PLANE_URL,
      },
    );
    RudderStack.ready(() => {
      dispatch({
        type: 'tracking/setInitialized',
        payload: true,
      });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  React.useEffect(() => {
    if (isSdkInitialized && !isEmpty(pendingEvents)) {
      dispatch({
        type: 'tracking/sendPendingEvents',
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSdkInitialized, pendingEvents]);

  const track = React.useCallback((eventName, eventProps) => {
    dispatch({
      type: 'tracking/track',
      payload: {
        eventName,
        eventProps,
      },
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    track,
  };
};

const TrackingProvider = ({ children }) => {
  const { track } = useRudderStackTracking();
  const providerValue = {
    track,
  };

  return (
    <TrackingContext.Provider value={providerValue}>
      {' '}
      {children}{' '}
    </TrackingContext.Provider>
  );
};

export { TrackingProvider, useTrackingContext };
export default TrackingProvider;
