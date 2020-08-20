import Axios from 'axios/index';
import Storage from 'react-native-expire-storage';
import store from '../configureStore';
import {ToastActionsCreators} from 'react-native-redux-toast';
import * as RootNavigation from '../navigations/RootNavigation';
import {
  REQUEST_TIMEOUT,
  RESPONSE_500,
  SERVER_INTERRUPT_MESSAGES,
} from '../constants/messages';
import {Auth} from '../constants/Navigations';

const Request = (config) => {
  const needToken = config.needToken;
  const redirectLogin = () => {
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
      // sessionStorage.removeItem("error-500");
      return response;
    },
    function (error) {
      const originalRequest = error.config;
      if (!error.response) {
        store.dispatch(
          ToastActionsCreators.displayError(
            SERVER_INTERRUPT_MESSAGES[REQUEST_TIMEOUT],
          ),
        );
      } else if (
        error.response.status >= 500 &&
        !(error.response && error.response.data && error.response.data.message)
      ) {
        store.dispatch(
          ToastActionsCreators.displayError(
            SERVER_INTERRUPT_MESSAGES[RESPONSE_500],
          ),
        );
      } else if (
        error.response.status === 401 &&
        originalRequest.url === process.env.REACT_APP_API_URL + '/oauth/token'
      ) {
        removeTokens();
      } else if (
        error.response.status === 401 &&
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
        if (!Storage.getItem('refreshToken')) {
          removeTokens();
          return Promise.reject(error);
        }
        refreshing = true;
        return new Promise(function (resolve, reject) {
          Axios({
            method: 'post',
            url: process.env.REACT_APP_API_URL + '/oauth/token',
            data: {
              grant_type: 'refresh_token',
              refresh_token: Storage.getItem('refreshToken'),
              client_id: process.env.REACT_APP_CLIENT_ID,
              client_secret: process.env.REACT_APP_CLIENT_SECRET,
            },
          })
            .then(async (response) => {
              // await setToken(response.data);
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
      }
      return Promise.reject(error);
    },
  );
  return Axios.request(config);
};
export default Request;
