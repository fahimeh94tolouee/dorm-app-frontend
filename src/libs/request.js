import Axios from 'axios/index';
import Storage from 'react-native-expire-storage';
// import store from '../configureStore';
import * as RootNavigation from '../navigations/RootNavigation';
// import {REACT_APP_API_URL} from 'react-native-dotenv';
import {REACT_APP_API_URL} from '../constants/baseUrl';
import Toast, {ERROR, SUCCESS} from '../libs/toastMessage';

import {
  REQUEST_TIMEOUT,
  RESPONSE_500,
  SERVER_INTERRUPT_MESSAGES,
} from '../constants/messages';
import {setToken} from './tokenManager';
import {Auth} from '../constants/Navigations';

const Request = (config) => {
  const needToken = config.needToken;
  const redirectLogin = () => {
    console.log(RootNavigation.isFirstPage(), 'RRR');
    if (!RootNavigation.isFirstPage()) {
      RootNavigation.navigate(Auth);
    }
  };
  const removeTokens = () => {
    Storage.removeItem('accessToken');
    Storage.removeItem('refreshToken');
    redirectLogin();
  };
  let refreshing = false;
  let queue = [];
  Axios.interceptors.request.use(
    async function (config) {
      if (needToken) {
        Object.assign(config.headers, {
          Authorization: 'Bearer ' + (await Storage.getItem('accessToken')),
        });
      }
      return config;
    },
    function (error) {
      // Do something with request error
      return Promise.reject(error);
    },
  );

  const processQueue = (error, token = null) => {
    queue.forEach((prom) => {
      if (error) {
        prom.reject(error);
      } else {
        prom.resolve(token);
      }
    });
    queue = [];
  };

  Axios.interceptors.response.use(
    function (response) {
      if (response && response.data && response.data.message) {
        Toast(response.data.message, SUCCESS);
      }
      return response;
    },
    function (error) {
      const originalRequest = error.config;
      console.log(originalRequest._refreshTry, 'FFFF');
      if (!error.response) {
        Toast(SERVER_INTERRUPT_MESSAGES[REQUEST_TIMEOUT], ERROR);
      } else if (
        error.response.status >= 500 &&
        !(error.response && error.response.data && error.response.data.message)
      ) {
        Toast(SERVER_INTERRUPT_MESSAGES[RESPONSE_500], ERROR);
      } else if (
        error.response.status === 403 &&
        originalRequest.url === REACT_APP_API_URL + '/oauth/token'
      ) {
        removeTokens();
      } else if (
        error.response.status === 403 &&
        !originalRequest._refreshTry
      ) {
        if (refreshing) {
          return new Promise(function (resolve, reject) {
            queue.push({resolve, reject});
          })
            .then((token) => {
              originalRequest.headers['Authorization'] = 'Bearer ' + token;
              return Axios(originalRequest);
            })
            .catch((err) => {
              return Promise.reject(err);
            });
        }
        originalRequest._refreshTry = true;
        Storage.getItem('refreshToken').then(console.log);
        Storage.getItem('refreshToken').then((refreshToken) => {
          console.log(refreshToken, 'GGG');
          if (!refreshToken) {
            removeTokens();
            return Promise.reject(error);
          }
          refreshing = true;
          return new Promise(function (resolve, reject) {
            Axios({
              method: 'post',
              url: REACT_APP_API_URL + '/auth/token/refresh/',
              data: {
                refresh_token: refreshToken,
              },
            })
              .then(async (response) => {
                await setToken(response.data);
                Axios.defaults.headers.common['Authorization'] =
                  'Bearer ' + (await Storage.getItem('accessToken'));
                originalRequest.headers['Authorization'] =
                  'Bearer ' + (await Storage.getItem('accessToken'));
                processQueue(null, await Storage.getItem('accessToken'));
                resolve(Axios(originalRequest));
              })
              .catch((err) => {
                processQueue(err, null);
                reject(err);
              })
              .then(() => {
                refreshing = false;
              });
          });
        });
      } else if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        Toast(error.response.data.message.toString(), ERROR);
      }
      return Promise.reject(error);
    },
  );
  return Axios.request(config);
};
export default Request;
