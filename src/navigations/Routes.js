import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {navigationRef} from './RootNavigation';
import {AuthStack, MainStack, RightStack} from '../routes';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Profile, Rooms} from '../constants/Navigations';
import Storage from 'react-native-expire-storage';
import Loading from '../components/loading/pageLoading';
import CustomDrawerContent from './CustomDrawerContent';

const Drawer = createDrawerNavigator();

const Routes = (props) => {
  const [isLoggedIn, changeIsLoggedIn] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    Storage.getItem('refreshToken')
      .then((value) => changeIsLoggedIn(value))
      .then(() => setLoading(false));
  }, [props.userLoggedIn]);

  if (loading) {
    return <Loading />;
  }
  return (
    <NavigationContainer ref={navigationRef}>
      {isLoggedIn ? (
        <Drawer.Navigator
          drawerPosition="right"
          drawerContent={(props) => <CustomDrawerContent {...props} />}>
          <Drawer.Screen
            name={Rooms}
            component={MainStack}
            // options={{header: () => null}}
          />
          <Drawer.Screen
            name={Profile}
            component={(props) => <RightStack {...props} />}
            // options={{header: () => null}}
          />
        </Drawer.Navigator>
      ) : (
        <AuthStack />
      )}
    </NavigationContainer>
  );
};

const mapStateToProps = (store) => {
  return {
    userLoggedIn: store.Auth.userLoggedIn,
  };
};

export default connect(mapStateToProps, null)(Routes);
