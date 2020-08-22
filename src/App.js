import React from 'react';
import {Provider} from 'react-redux';
import store from './configureStore';
import {View} from 'react-native';
import Routes from './navigations/Routes';

const App: () => React$Node = () => {
  return (
    <Provider store={store}>
      <View style={{flex: 1}}>
        <Routes />
      </View>
    </Provider>
  );
};

export default App;
