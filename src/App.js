import React from 'react';
import {Provider} from 'react-redux';
import store from './configureStore';
import {Toast} from 'react-native-redux-toast';
import {View} from 'react-native';
// import {
//   SafeAreaView,
//   StyleSheet,
//   ScrollView,
//   View,
//   Text,
//   StatusBar,
// } from 'react-native';
import {Routes} from './navigations/Routes';

const App: () => React$Node = () => {
  return (
    <Provider store={store}>
      <View style={{flex: 1}}>
        <Routes />
        <Toast messageStyle={{color: 'white'}} />
      </View>
    </Provider>
  );
};

export default App;
