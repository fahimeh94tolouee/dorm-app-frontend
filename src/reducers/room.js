import * as types from '../actions/actionTypes';
const initialState = {
  loading: false,
  list: [],
  data: {},
};

const Room = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_ROOMS_LIST_REQUEST:
      return {...state, loading: true};
    case types.GET_ROOMS_LIST_SUCCESS:
      return {...state, loading: false, list: action.data};
    case types.GET_ROOMS_LIST_FAILURE:
      return {...state, loading: false};

    case types.GET_ROOM_USERS_LIST_REQUEST:
      return {...state, loading: true};
    case types.GET_ROOM_USERS_LIST_SUCCESS:
      return {...state, loading: false, data: action.data};
    case types.GET_ROOM_USERS_LIST_FAILURE:
      return {...state, loading: false};
    default:
      return state;
  }
};
export default Room;
