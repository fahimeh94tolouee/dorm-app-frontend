import {all} from 'redux-saga/effects';
import {watcherAuth} from './auth';
import {watcherRoom} from './room';

export function* rootSaga() {
  yield all([watcherAuth(), watcherRoom()]);
}
