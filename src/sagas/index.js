import {all} from 'redux-saga/effects';
import {watcherAuth} from './auth';
import {watcherRoom} from './room';
import {watcherDemand} from './demand';

export function* rootSaga() {
  yield all([watcherAuth(), watcherRoom(), watcherDemand()]);
}
