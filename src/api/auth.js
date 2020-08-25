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

export const updateInfo = (data) => {
  return Request({
    method: 'put',
    url: baseUrl + '/auth/update_info/',
    needToken: true,
    data: data,
  });
};

export const getInfo = () => {
  return Request({
    method: 'get',
    url: baseUrl + '/auth/account/',
    needToken: true,
  });
};
