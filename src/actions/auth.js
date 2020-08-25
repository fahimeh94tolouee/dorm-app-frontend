import * as types from './actionTypes';

export const login = (data) => {
  return {
    type: types.LOGIN_REQUEST,
    data: data,
  };
};
export const loginSuccess = () => {
  return {
    type: types.LOGIN_SUCCESS,
  };
};
export const loginFailure = () => {
  return {
    type: types.LOGIN_FAILURE,
  };
};

export const register = (data) => {
  return {
    type: types.REGISTER_REQUEST,
    data: data,
  };
};
export const registerSuccess = () => {
  return {
    type: types.REGISTER_SUCCESS,
  };
};
export const registerFailure = () => {
  return {
    type: types.REGISTER_FAILURE,
  };
};

export const changeUserLoggedIn = (isLoggedIn) => {
  return {
    type: types.CHANGE_USER_LOGGED_IN,
    payLoad: isLoggedIn,
  };
};

export const updateInfo = (data) => {
  return {
    type: types.UPDATE_INFO_REQUEST,
    data: data,
  };
};
export const updateInfoSuccess = (data) => {
  return {
    type: types.UPDATE_INFO_SUCCESS,
    data: data,
  };
};
export const updateInfoFailure = () => {
  return {
    type: types.UPDATE_INFO_FAILURE,
  };
};

export const getInfo = (data) => {
  return {
    type: types.GET_INFO_REQUEST,
  };
};
export const getInfoSuccess = (data) => {
  return {
    type: types.GET_INFO_SUCCESS,
    data: data,
  };
};
export const getInfoFailure = () => {
  return {
    type: types.GET_INFO_FAILURE,
  };
};
