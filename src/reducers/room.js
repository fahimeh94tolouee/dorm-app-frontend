import * as types from '../actions/actionTypes';
const initialState = {
  loading: false,
  list: [],
  userList: [],
  processing: false,
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
      return {...state, loading: false, userList: action.data};
    case types.GET_ROOM_USERS_LIST_FAILURE:
      return {...state, loading: false};

    case types.APPLY_MEMBERSHIP_REQUEST:
      return {...state, processing: true};
    case types.APPLY_MEMBERSHIP_SUCCESS:
      return {...state, processing: false, list: action.data};
    case types.APPLY_MEMBERSHIP_FAILURE:
      return {...state, processing: false, list: action.data};
    default:
      return state;
  }
};
export default Room;
