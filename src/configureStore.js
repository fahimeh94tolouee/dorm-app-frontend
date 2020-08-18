import {createStore, applyMiddleware} from 'redux';
import {createLogger} from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers';
import {rootSaga} from './sagas';

const sagaMiddleware = createSagaMiddleware();

function configureStore() {
  const store = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware, createLogger()),
  );
  sagaMiddleware.run(rootSaga);
  return store;
}

export default configureStore();
