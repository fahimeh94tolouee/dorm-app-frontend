import {takeLatest, call, put} from 'redux-saga/effects';
import * as types from '../actions/actionTypes';
import {DemandAction} from '../actions';
import * as demandApi from '../api/demand';

export function* watcherDemand() {
  yield takeLatest(types.GET_DEMANDS_REQUEST, workerGetList);
  yield takeLatest(types.ANSWER_DEMAND_REQUEST, workerAnswerDemand);
}

function fetchList() {
  return demandApi.getList();
}

function* workerGetList(action) {
  try {
    const response = yield call(fetchList);
    const data = response.data.data;
    yield put(DemandAction.getListSuccess(data));
  } catch (error) {
    yield put(DemandAction.getListFailure());
  }
}

function sendAnswer(data) {
  return demandApi.sendAnswer(data);
}

function* workerAnswerDemand(action) {
  try {
    const response = yield call(sendAnswer, action.data);
    const data = response.data.data;
    yield put(DemandAction.answerDemandSuccess(data));
  } catch (error) {
    const data = error.response.data.data;
    yield put(DemandAction.answerDemandFailure(data));
  }
}
