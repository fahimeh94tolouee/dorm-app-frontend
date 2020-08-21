import {takeLatest, call, put} from 'redux-saga/effects';
import * as types from '../actions/actionTypes';
import {AuthAction} from '../actions';
import axios from 'axios';

import Storage from 'react-native-expire-storage';
import * as authApi from '../api/auth';
import {setToken} from '../libs/tokenManager';
import {ToastActionsCreators} from 'react-native-redux-toast';

// import checkErrorMessagesExist from '../assets/checkErrorMessagesExist';

export function* watcherAuth() {
  yield takeLatest(types.LOGIN_REQUEST, workerLogin);
  yield takeLatest(types.REGISTER_REQUEST, workerRegister);
}

function fetchLogin(data) {
  return authApi.login(data);
}

function* workerLogin(action) {
  try {
    const response = yield call(fetchLogin, action.data);
    const data = response.data;
    setToken(data);
    yield put(AuthAction.loginSuccess());
    // localStorage.setItem('user_state', 1);
    console.log('MAIN');
    //Todo navigate to main
  } catch (error) {
    yield put(AuthAction.loginFailure());
    // checkErrorMessagesExist(error) &&
    //   error.response.data.message.forEach((message) => {
    // ToastActionsCreators.displayError(error.response.data.message.toString());
    // });
  }
}

function fetchRegister(data) {
  return authApi.register(data);
}

function* workerRegister(action) {
  try {
    const response = yield call(fetchRegister, action.data);
    const data = response.data;
    setToken(data.token);
    yield put(AuthAction.registerSuccess());
  } catch (error) {
    yield put(AuthAction.registerFailure());

    // checkErrorMessagesExist(error) &&
    // error.response.data.message.forEach((message) => {
    ToastActionsCreators.displayError(error.response.data.message.toString());
    // });
  }
}
