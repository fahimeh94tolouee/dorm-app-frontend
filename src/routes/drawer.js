import React from 'react';
import {Profile} from '../constants/Navigations';
import ProfilePage from '../containers/profile';
import {createDrawerNavigator} from '@react-navigation/drawer';
import CenterLayout from '../layouts/center';

const Drawer = createDrawerNavigator();

const RightDrawer = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name={Profile}
        component={(props) => <ProfilePage {...props} />}
      />
    </Drawer.Navigator>
  );
};

export default RightDrawer;
