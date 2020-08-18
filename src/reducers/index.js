import {combineReducers} from 'redux';
import Auth from './auth';

const rootReducer = combineReducers({
  Auth: Auth,
});

export default rootReducer;
