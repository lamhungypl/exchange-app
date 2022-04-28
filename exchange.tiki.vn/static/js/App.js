import React from 'react';
import numeral from 'numeral';
import { Lines } from 'react-preloaders2';
import { useDispatch, useSelector } from 'react-redux';

import Message from './components/Message';
import GlobalStyle, { STYLE_SYSTEM } from './components/styles/GlobalStyle';
import Routes from './routes';

numeral.register('locale', 'vi', {
  delimiters: {
    thousands: '.',
    decimal: ',',
  },
  abbreviations: {},
  currency: {},
});
numeral.locale('vi');

function App({ history, broker }) {
  const isAuthInitialized = useSelector((state) => state.auth.isInitialized);
  const pageLoading = !isAuthInitialized;
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch({
      type: 'auth/initAuth',
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Lines
        customLoading={pageLoading}
        color={STYLE_SYSTEM.color['blue-60']}
        background={STYLE_SYSTEM.color['dark-bg']}
      />{' '}
      {!pageLoading && (
        <div className="App">
          <Routes history={history} /> <Message broker={broker} />{' '}
        </div>
      )}{' '}
      <GlobalStyle />
    </>
  );
}

export default App;
