import {takeLatest, call, put} from 'redux-saga/effects';
import * as types from '../actions/actionTypes';
import {RoomAction} from '../actions';
import * as roomApi from '../api/room';

export function* watcherRoom() {
  yield takeLatest(types.GET_ROOMS_LIST_REQUEST, workerGetList);
  yield takeLatest(types.GET_ROOM_USERS_LIST_REQUEST, workerGetRoomUsersList);
}

function fetchList() {
  return roomApi.getList();
}

function* workerGetList(action) {
  try {
    const response = yield call(fetchList);
    const data = response.data;
    yield put(RoomAction.getListSuccess(data));
  } catch (error) {
    yield put(RoomAction.getListFailure());
  }
}

function fetchRoomUsersList(id) {
  return roomApi.getUsersList(id);
}

function* workerGetRoomUsersList(action) {
  try {
    const response = yield call(fetchRoomUsersList, action.id);
    const data = response.data;
    yield put(RoomAction.getUsersListSuccess(data));
  } catch (error) {
    yield put(RoomAction.getUsersListFailure());
  }
}
