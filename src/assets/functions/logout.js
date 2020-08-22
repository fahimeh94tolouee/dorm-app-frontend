import store from '../../configureStore';
import Storage from 'react-native-expire-storage';
import {AuthAction} from '../../actions';

export const logout = async () => {
  await Storage.clear();
  store.dispatch(AuthAction.changeUserLoggedIn(false));
};
