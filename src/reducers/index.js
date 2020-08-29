import {combineReducers} from 'redux';
import Auth from './auth';
import Room from './room';
import Demand from './demand';

const rootReducer = combineReducers({
  Auth: Auth,
  Room: Room,
  Demand: Demand,
});

export default rootReducer;
