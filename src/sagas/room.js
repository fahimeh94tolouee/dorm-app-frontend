import {takeLatest, call, put} from 'redux-saga/effects';
import * as types from '../actions/actionTypes';
import {RoomAction} from '../actions';
import * as roomApi from '../api/room';

export function* watcherRoom() {
  yield takeLatest(types.GET_ROOMS_LIST_REQUEST, workerGetList);
  yield takeLatest(types.GET_ROOM_USERS_LIST_REQUEST, workerGetRoomUsersList);
  yield takeLatest(
    types.APPLY_MEMBERSHIP_REQUEST,
    workerApplyForRoomMembership,
  );
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

function applyForRoomMembership(id, data) {
  return roomApi.requestRoom(id, data);
}

function* workerApplyForRoomMembership(action) {
  try {
    const response = yield call(applyForRoomMembership, action.id, action.data);
    const data = response.data.data;
    yield put(RoomAction.applyMembershipSuccess(data));
  } catch (error) {
    const data = error.response.data.data;
    yield put(RoomAction.applyMembershipFailure(data));
  }
}
