import Request from '../libs/request';
import {REACT_APP_API_URL} from '../constants/baseUrl';

const baseUrl = REACT_APP_API_URL;

export const getList = () => {
  return Request({
    method: 'get',
    url: baseUrl + '/message/logs/',
    needToken: true,
  });
};
