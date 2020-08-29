import {takeLatest, call, put} from 'redux-saga/effects';
import * as types from '../actions/actionTypes';
import {AuthAction} from '../actions';
import Storage from 'react-native-expire-storage';
import * as RootNavigation from '../navigations/RootNavigation';
import * as authApi from '../api/auth';
import {setToken} from '../libs/tokenManager';
import {Rooms} from '../constants/Navigations';

export function* watcherAuth() {
  yield takeLatest(types.LOGIN_REQUEST, workerLogin);
  yield takeLatest(types.REGISTER_REQUEST, workerRegister);
  yield takeLatest(types.UPDATE_INFO_REQUEST, workerUpdateInfo);
  yield takeLatest(types.GET_INFO_REQUEST, workerGetInfo);
}

function fetchLogin(data) {
  return authApi.login(data);
}

function* workerLogin(action) {
  try {
    const response = yield call(fetchLogin, action.data);
    const data = response.data;
    setToken(data.data);
    yield put(AuthAction.changeUserLoggedIn(true));
    yield put(AuthAction.loginSuccess());
  } catch (error) {
    yield put(AuthAction.loginFailure());
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
  }
}

function updateInfo(data) {
  return authApi.updateInfo(data);
}

function* workerUpdateInfo(action) {
  try {
    const response = yield call(updateInfo, action.data);
    const data = response.data.data;
    yield put(AuthAction.updateInfoSuccess(data));
  } catch (error) {
    yield put(AuthAction.updateInfoFailure());
  }
}

function getInfo() {
  return authApi.getInfo();
}

function* workerGetInfo(action) {
  try {
    const response = yield call(getInfo);
    const data = response.data;
    yield put(AuthAction.getInfoSuccess(data));
  } catch (error) {
    yield put(AuthAction.getInfoFailure());
  }
}
