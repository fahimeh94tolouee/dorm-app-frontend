import Request from '../libs/request';
import {REACT_APP_API_URL} from '../constants/baseUrl';

const baseUrl = REACT_APP_API_URL;

export const getList = () => {
  return Request({
    method: 'get',
    url: baseUrl + '/dorm/waiting_users/',
    needToken: true,
  });
};

export const sendAnswer = (data) => {
  return Request({
    method: 'post',
    url: baseUrl + '/dorm/answer/',
    needToken: true,
    data: data,
  });
};
