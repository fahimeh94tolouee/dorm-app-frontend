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
import {AuthAction} from '../actions';

const Drawer = createDrawerNavigator();

const Routes = (props) => {
  // const [isLoggedIn, changeIsLoggedIn] = useState(null);
  // const [loading, setLoading] = useState(false);
  // useEffect(() => {
  //   Storage.getItem('refreshToken').then(() => props.initRequest());
  // }, []);
  async function getInit() {
    let refreshToken = await Storage.getItem('refreshToken');
    if (refreshToken) {
      await props.initRequest();
    }
  }
  useEffect(() => {
    getInit();
  }, []);
  // useEffect(() => {

  // });
  // useEffect(() => {
  //   console.log(loading, props.initLoading, 'EEE');
  //   Storage.getItem('refreshToken')
  //     .then((value) => changeIsLoggedIn(value))
  //     .then(() => setLoading(false));
  // }, [props.userLoggedIn]);
  const ProfileComponent = (props) => (
    <CenterLayout>
      <ProfilePage {...props} />
    </CenterLayout>
  );
  if (props.initLoading) {
    return <Loading />;
  } else {
    return (
      <NavigationContainer ref={navigationRef}>
        {props.userLoggedIn ? (
          <Drawer.Navigator
            drawerPosition="right"
            drawerContent={(prop) => (
              <CustomDrawerContent {...prop} data={props.initData} />
            )}>
            <Drawer.Screen
              name={Rooms}
              component={MainStack}
              options={{
                drawerLabel: () => null,
                title: null,
                drawerIcon: () => null,
                unmountOnBlur: true,
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
  }
};

const mapStateToProps = (store) => {
  return {
    userLoggedIn: store.Auth.userLoggedIn,
    initLoading: store.Init.loading,
    initData: store.Init.data,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    initRequest: () => dispatch(AuthAction.getInit()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Routes);
