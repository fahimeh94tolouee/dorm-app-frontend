import * as types from '../actions/actionTypes';
const initialState = {
  loading: false,
  list: [],
};

const Message = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_LOG_MESSAGES_REQUEST:
      return {...state, loading: true};
    case types.GET_LOG_MESSAGES_SUCCESS:
      return {
        ...state,
        loading: false,
        list: action.data,
      };
    case types.GET_LOG_MESSAGES_FAILURE:
      return {...state, loading: false};

    default:
      return state;
  }
};
export default Message;
