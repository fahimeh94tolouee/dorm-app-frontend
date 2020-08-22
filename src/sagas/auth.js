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
