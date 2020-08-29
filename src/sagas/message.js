import {takeLatest, call, put} from 'redux-saga/effects';
import * as types from '../actions/actionTypes';
import {MessageAction} from '../actions';
import * as messageApi from '../api/message';

export function* watcherMessage() {
  yield takeLatest(types.GET_LOG_MESSAGES_REQUEST, workerGetList);
}

function fetchList() {
  return messageApi.getList();
}

function* workerGetList(action) {
  try {
    const response = yield call(fetchList);
    const data = response.data;
    yield put(MessageAction.getListSuccess(data));
  } catch (error) {
    yield put(MessageAction.getListFailure());
  }
}
