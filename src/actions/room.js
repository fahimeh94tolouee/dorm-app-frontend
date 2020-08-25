import * as types from './actionTypes';

export const getList = () => {
  return {
    type: types.GET_ROOMS_LIST_REQUEST,
  };
};
export const getListSuccess = (data) => {
  return {
    type: types.GET_ROOMS_LIST_SUCCESS,
    data: data,
  };
};
export const getListFailure = () => {
  return {
    type: types.GET_ROOMS_LIST_FAILURE,
  };
};

export const getUsersList = (id) => {
  return {
    type: types.GET_ROOM_USERS_LIST_REQUEST,
    id: id,
  };
};
export const getUsersListSuccess = (data) => {
  return {
    type: types.GET_ROOM_USERS_LIST_SUCCESS,
    data: data,
  };
};
export const getUsersListFailure = () => {
  return {
    type: types.GET_ROOM_USERS_LIST_FAILURE,
  };
};
