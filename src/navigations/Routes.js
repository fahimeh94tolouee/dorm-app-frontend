import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {navigationRef} from './RootNavigation';
import {AuthStack, MainStack} from '../routes';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Profile, Rooms} from '../constants/Navigations';
import Storage from 'react-native-expire-storage';
import Loading from '../components/loading/initLoading';
import CustomDrawerContent from './CustomDrawerContent';
import CenterLayout from '../layouts/center';
import ProfilePage from '../containers/profile';

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
  const ProfileComponent = (props) => (
    <CenterLayout>
      <ProfilePage {...props} />
    </CenterLayout>
  );
  return (
    <NavigationContainer ref={navigationRef}>
      {isLoggedIn ? (
        <Drawer.Navigator
          drawerPosition="right"
          drawerContent={CustomDrawerContent}>
          <Drawer.Screen
            name={Rooms}
            component={MainStack}
            options={{
              drawerLabel: () => null,
              title: null,
              drawerIcon: () => null,
            }}
            // options={{header: () => null}}
          />
          <Drawer.Screen
            name={Profile}
            component={ProfileComponent}
            options={({route, navigation}) => {
              return {
                swipeEnabled: false,
                unmountOnBlur: true,
              };
            }}
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
