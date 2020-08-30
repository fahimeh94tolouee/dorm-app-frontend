import * as types from '../actions/actionTypes';
const initialState = {
  loading: true,
  userLoggedIn: false,
  data: {},
};

const Init = (state = initialState, action) => {
  switch (action.type) {
    case types.INIT_REQUEST:
      return {...state, loading: true};
    case types.INIT_SUCCESS:
      return {...state, loading: false, data: action.data};
    case types.INIT_FAILURE:
      return {...state, loading: false};

    default:
      return state;
  }
};

export default Init;
