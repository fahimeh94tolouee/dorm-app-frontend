import * as types from './actionTypes';

export const getList = () => {
  return {
    type: types.GET_DEMANDS_REQUEST,
  };
};
export const getListSuccess = (data) => {
  return {
    type: types.GET_DEMANDS_SUCCESS,
    data: data,
  };
};
export const getListFailure = () => {
  return {
    type: types.GET_DEMANDS_FAILURE,
  };
};

export const answerDemand = (data) => {
  return {
    type: types.ANSWER_DEMAND_REQUEST,
    data: data,
  };
};
export const answerDemandSuccess = (data) => {
  return {
    type: types.ANSWER_DEMAND_SUCCESS,
    data: data,
  };
};
export const answerDemandFailure = (data) => {
  return {
    type: types.ANSWER_DEMAND_FAILURE,
    data: data,
  };
};
