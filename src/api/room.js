import Request from '../libs/request';
import {REACT_APP_API_URL} from '../constants/baseUrl';

const baseUrl = REACT_APP_API_URL;

export const getList = () => {
  return Request({
    method: 'get',
    url: baseUrl + '/dorm/rooms/',
    needToken: true,
  });
};

export const getUsersList = (id) => {
  return Request({
    method: 'get',
    url: baseUrl + '/dorm/rooms/' + id + '/',
    needToken: true,
  });
};

export const requestRoom = (id, data) => {
  return Request({
    method: 'post',
    url: baseUrl + '/dorm/request/' + id + '/',
    needToken: true,
    data:data
  });
};
