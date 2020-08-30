import {combineReducers} from 'redux';
import Init from './init';
import Auth from './auth';
import Room from './room';
import Demand from './demand';
import Message from './message';

const rootReducer = combineReducers({
  Init: Init,
  Auth: Auth,
  Room: Room,
  Demand: Demand,
  Message: Message,
});

export default rootReducer;
