import React from 'react';
import {Provider} from 'react-redux';
import store from './configureStore';
import {View, StatusBar} from 'react-native';
import Routes from './navigations/Routes';
import Variables from './assets/style/Variables';

const App: () => React$Node = () => {
  return (
    <Provider store={store}>
      <StatusBar backgroundColor={Variables.colors.primary_700} />
      <View style={{flex: 1}}>
        <Routes />
      </View>
    </Provider>
  );
};

export default App;
