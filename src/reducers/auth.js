import * as types from '../actions/actionTypes';
const initialState = {
  loading: false,
  message: '',
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

    default:
      return state;
  }
};

export default Auth;
