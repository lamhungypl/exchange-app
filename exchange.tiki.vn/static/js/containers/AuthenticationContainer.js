import { connect } from 'react-redux';
import isEmpty from 'lodash/isEmpty';

const container = connect(
  (state) => ({
    userInfo: state.auth.userInfo,
    isLoggedIn: !isEmpty(state.auth.userInfo),
  }),
  (dispatch) => ({
    onLogin: () =>
      dispatch({
        type: 'auth/login',
      }),
    onRegister: () =>
      dispatch({
        type: 'auth/login',
        payload: {
          isRegister: true,
        },
      }),
    onLogout: () =>
      dispatch({
        type: 'auth/logout',
      }),
  }),
);

export default container;
