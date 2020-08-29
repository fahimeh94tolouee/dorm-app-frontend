import {combineReducers} from 'redux';
import Auth from './auth';
import Room from './room';
import Demand from './demand';
import Message from './message';

const rootReducer = combineReducers({
  Auth: Auth,
  Room: Room,
  Demand: Demand,
  Message: Message,
});

export default rootReducer;
