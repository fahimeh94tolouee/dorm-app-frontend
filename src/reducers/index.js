import {combineReducers} from 'redux';
import {toastReducer as toast} from 'react-native-redux-toast';
import Auth from './auth';

const rootReducer = combineReducers({
  Auth: Auth,
  toast: toast,
});

export default rootReducer;
