import {takeLatest, call, put} from 'redux-saga/effects';
import * as types from '../actions/actionTypes';
import {AuthAction} from '../actions';
import Storage from 'react-native-expire-storage';
import * as authApi from '../api/auth';
import {toastr} from 'react-redux-toastr';
import * as InitAction from '../actions/init';
import {push} from 'connected-react-router';
import checkErrorMessagesExist from '../assets/checkErrorMessagesExist';

export function* watcherAuth() {
  yield takeLatest(types.LOGIN_REQUEST, workerLogin);
  yield takeLatest(types.REGISTER_REQUEST, workerRegister);
  yield takeLatest(types.REFERENCE_CODE_REQUEST, workerReferenceCode);
  yield takeLatest(types.VERIFY_REQUEST, workerVerify);
  yield takeLatest(types.FORGET_REQUEST, workerForget);
  yield takeLatest(types.FORGET_VERIFY_REQUEST, workerForgetVerify);
  yield takeLatest(types.RESET_PASSWORD_REQUEST, workerReset);
  yield takeLatest(types.UPDATE_INFO_REQUEST, workerUpdateInfo);
  yield takeLatest(types.CHANGE_PASSWORD_REQUEST, workerChangePassword);
}

function fetchLogin(data) {
  return authApi.login(data);
}

function getQueryStringValue(key) {
  return decodeURIComponent(
    window.location.search.replace(
      new RegExp(
        '^(?:.*[&\\?]' +
          encodeURIComponent(key).replace(/[]/g, '\\$&') +
          '(?:\\=([^&]*))?)?.*$',
        'i',
      ),
      '$1',
    ),
  );
}

function* workerLogin(action) {
  try {
    const response = yield call(fetchLogin, action.data);
    const data = response.data;
    setToken(data.token);
    yield put(AuthAction.loginSuccess());
    localStorage.setItem('user_state', 1);
    let redirect = getQueryStringValue('redirect');
    window.location.replace(redirect);
  } catch (error) {
    yield put(AuthAction.loginFailure());
    checkErrorMessagesExist(error) &&
      error.response.data.message.forEach((message) => {
        toastr.error(' ', message.toString());
      });
  }
}

function fetchRegister(data) {
  return authApi.register(data);
}

function* workerRegister(action) {
  try {
    const response = yield call(fetchRegister, action.data);
    const data = response.data;
    sessionStorage.setItem('phone', action.data.phone_number);
    sessionStorage.setItem(
      'country_code',
      JSON.stringify({
        code: action.data.country_code,
      }),
    );
    localStorage.setItem('user_state', 0);
    setToken(data.token);
    yield put(AuthAction.registerSuccess());
    yield put(push('/verify'));
  } catch (error) {
    yield put(AuthAction.registerFailure());

    checkErrorMessagesExist(error) &&
      error.response.data.message.forEach((message) => {
        toastr.error(' ', message.toString());
      });
  }
}

function fetchReferenceCode(data) {
  return authApi.checkReferenceCode(data);
}

function* workerReferenceCode(action) {
  try {
    const response = yield call(fetchReferenceCode, action.data);
    yield put(AuthAction.referenceCodeSuccess(response.data.message[0]));
  } catch (error) {
    let messages = '';
    if (
      checkErrorMessagesExist(error) &&
      error.response.data.message.length >= 1
    ) {
      messages = error.response.data.message[0];
    }
    yield put(AuthAction.referenceCodeFailure(messages));
  }
}

function fetchVerify(data) {
  return authApi.verify(data);
}

function* workerVerify(action) {
  try {
    const response = yield call(fetchVerify, action.data);
    yield put(AuthAction.verifySuccess());
    window.dataLayer.push({
      event: 'new_subscriber',
    });
    localStorage.setItem('user_state', 1);
    sessionStorage.setItem('welcome_modal_user_id', response.data.data.id);
    if (sessionStorage.getItem('plan_data')) {
      sessionStorage.setItem('user_plan', sessionStorage.getItem('plan_data'));
      // yield put(push("/purchase"));
      window.location.replace('/purchase');
    } else {
      setTimeout(() => {
        localStorage.setItem(
          'project_info',
          JSON.stringify({
            ...response.data.project,
            is_owner: response.data.is_owner,
          }),
        );
        localStorage.setItem('project_id', response.data.project.project.id);
        window.location.replace('/');
      }, 1000);
    }
  } catch (error) {
    yield put(AuthAction.verifyFailure());
    checkErrorMessagesExist(error) &&
      error.response.data.message.forEach((message) => {
        toastr.error(' ', message.toString());
      });
  }
}

function fetchForget(data) {
  return authApi.forget(data);
}

function* workerForget(action) {
  try {
    yield call(fetchForget, action.data);
    sessionStorage.setItem('phone', action.data.phone_number);
    sessionStorage.setItem(
      'country_code',
      JSON.stringify({
        code: action.data.country_code,
      }),
    );
    sessionStorage.setItem('forget', 'true');
    yield put(AuthAction.forgetSuccess());
    window.location.replace('/verify');
  } catch (error) {
    yield put(AuthAction.forgetFailure());
    checkErrorMessagesExist(error) &&
      error.response.data.message.forEach((message) => {
        toastr.error(' ', message.toString());
      });
  }
}

function fetchForgetVerify(data) {
  return authApi.forgetVerify(data);
}

function* workerForgetVerify(action) {
  try {
    const response = yield call(fetchForgetVerify, action.data);
    sessionStorage.setItem('token', response.data.data.token);
    yield put(AuthAction.forgetVerifySuccess());
    window.location.replace('/reset-password');
  } catch (error) {
    yield put(AuthAction.forgetVerifyFailure());
    checkErrorMessagesExist(error) &&
      error.response.data.message.forEach((message) => {
        toastr.error(' ', message.toString());
      });
  }
}

function fetchReset(data) {
  return authApi.reset(data);
}
function* workerReset(action) {
  try {
    yield call(fetchReset, action.data);
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('phone');
    sessionStorage.removeItem('country_code');
    sessionStorage.removeItem('forget');
    yield put(AuthAction.resetPasswordSuccess());
    yield put(push('/login'));
  } catch (error) {
    yield put(AuthAction.resetPasswordFailure());
    checkErrorMessagesExist(error) &&
      error.response.data.message.forEach((message) => {
        toastr.error(' ', message.toString());
      });
  }
}

function updateInfo(data) {
  return authApi.updateInfo(data);
}
function* workerUpdateInfo(action) {
  try {
    const response = yield call(updateInfo, action.data);
    yield put(AuthAction.updateInfoSuccess(response.data));
    yield put(InitAction.getSuccess({user: response.data.data}));
    response.data.message.forEach((message) => {
      toastr.success(' ', message.toString());
    });
  } catch (error) {
    yield put(AuthAction.updateInfoFailure());
    checkErrorMessagesExist(error) &&
      error.response.data.message.forEach((message) => {
        toastr.error(' ', message.toString());
      });
  }
}

function fetchChangePassword(data) {
  return authApi.changePassword(data);
}
function* workerChangePassword(action) {
  try {
    const response = yield call(fetchChangePassword, action.data);
    yield put(AuthAction.changePasswordSuccess());
    response.data.message.forEach((message) => {
      toastr.success(' ', message.toString());
    });
    localStorage.clear();
    sessionStorage.clear();
    deleteCookie('refreshToken');
    deleteCookie('accessToken');
    yield put(push('/'));
  } catch (error) {
    yield put(AuthAction.changePasswordFailure());
    checkErrorMessagesExist(error) &&
      error.response.data.message.forEach((message) => {
        toastr.error(' ', message.toString());
      });
  }
}
