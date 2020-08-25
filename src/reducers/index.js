import {combineReducers} from 'redux';
import Auth from './auth';
import Room from './room';

const rootReducer = combineReducers({
  Auth: Auth,
  Room: Room,
});

export default rootReducer;
