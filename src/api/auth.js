import Request from '../libs/request';

const baseUrl = process.env.REACT_APP_API_URL;

export const login = (data) => {
  return Request({
    method: 'post',
    url: baseUrl + '/login',
    data: data,
  });
};

export const register = (data) => {
  return Request({
    method: 'post',
    url: baseUrl + '/register',
    data: data,
  });
};
