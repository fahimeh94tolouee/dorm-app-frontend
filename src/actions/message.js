import * as types from './actionTypes';

export const getList = () => {
  return {
    type: types.GET_LOG_MESSAGES_REQUEST,
  };
};
export const getListSuccess = (data) => {
  return {
    type: types.GET_LOG_MESSAGES_SUCCESS,
    data: data,
  };
};
export const getListFailure = () => {
  return {
    type: types.GET_LOG_MESSAGES_FAILURE,
  };
};
