import Request from '../libs/request';
import {REACT_APP_API_URL} from '../constants/baseUrl';

const baseUrl = REACT_APP_API_URL;

export const login = (data) => {
  return Request({
    method: 'post',
    url: baseUrl + '/auth/login/',
    data: data,
  });
};

export const register = (data) => {
  return Request({
    method: 'post',
    url: baseUrl + '/auth/register/',
    data: data,
  });
};
