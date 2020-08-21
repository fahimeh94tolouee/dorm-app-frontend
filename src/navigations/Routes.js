import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {navigationRef} from './RootNavigation';
import {AuthStack, MainStack, RightStack} from '../routes';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';
import {Login, Profile, Rooms} from '../constants/Navigations';
import ProfilePage from '../containers/profile';

const Drawer = createDrawerNavigator();

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      {/*<DrawerItemList {...props} />*/}
      <DrawerItem
        label="Profile"
        onPress={() => props.navigation.navigate(Profile)}
      />
    </DrawerContentScrollView>
  );
}
export const Routes = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <AuthStack />
      {/*<Drawer.Navigator*/}
      {/*  drawerPosition="right"*/}
      {/*  drawerContent={(props) => <CustomDrawerContent {...props} />}>*/}
      {/*  <Drawer.Screen*/}
      {/*    name={Rooms}*/}
      {/*    component={MainStack}*/}
      {/*    // options={{header: () => null}}*/}
      {/*  />*/}
      {/*  <Drawer.Screen*/}
      {/*    name={Profile}*/}
      {/*    component={(props) => <RightStack {...props} />}*/}
      {/*    // options={{header: () => null}}*/}
      {/*  />*/}
      {/*</Drawer.Navigator>*/}
    </NavigationContainer>
  );
};
