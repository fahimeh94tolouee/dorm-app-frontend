import * as types from '../actions/actionTypes';
const initialState = {
  loading: false,
  message: '',
  userLoggedIn: false,
};

const Auth = (state = initialState, action) => {
  switch (action.type) {
    case types.LOGIN_REQUEST:
      return {...state, loading: true};
    case types.LOGIN_SUCCESS:
      return {...state, loading: false};
    case types.LOGIN_FAILURE:
      return {...state, loading: false};

    case types.REGISTER_REQUEST:
      return {...state, loading: true};
    case types.REGISTER_SUCCESS:
      return {...state, loading: false};
    case types.REGISTER_FAILURE:
      return {...state, loading: false};

    case types.CHANGE_USER_LOGGED_IN:
      return {...state, userLoggedIn: action.payLoad};

    default:
      return state;
  }
};

export default Auth;
