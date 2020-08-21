// Imports: Dependencies
import {all, fork} from 'redux-saga/effects';
import {watcherAuth} from './auth';
// Imports: Redux Sagas
// Redux Saga: Root Saga
export function* rootSaga() {
  yield all([watcherAuth()]);
}
