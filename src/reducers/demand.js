import * as types from '../actions/actionTypes';
const initialState = {
  loading: false,
  list: [],
  processing: false,
  isStableRoomUser: false,
};

const Demand = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_DEMANDS_REQUEST:
      return {...state, loading: true};
    case types.GET_DEMANDS_SUCCESS:
      return {
        ...state,
        loading: false,
        list: action.data.data,
        isStableRoomUser: action.data.is_in_room,
      };
    case types.GET_DEMANDS_FAILURE:
      return {...state, loading: false};

    case types.ANSWER_DEMAND_REQUEST:
      return {...state, processing: true};
    case types.ANSWER_DEMAND_SUCCESS:
      return {
        ...state,
        processing: false,
        list: action.data.data,
        isStableRoomUser: action.data.is_in_room,
      };
    case types.ANSWER_DEMAND_FAILURE:
      return {
        ...state,
        processing: false,
        list: action.data.data,
        isStableRoomUser: action.data.is_in_room,
      };
    default:
      return state;
  }
};
export default Demand;
