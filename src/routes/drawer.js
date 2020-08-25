import React from 'react';
import {Profile} from '../constants/Navigations';
import ProfilePage from '../containers/profile';
import {createStackNavigator, HeaderBackButton} from '@react-navigation/stack';
import CenterLayout from '../layouts/center';

const Stack = createStackNavigator();

const ProfileComponent = (props) => (
  <CenterLayout>
    <ProfilePage {...props} />
  </CenterLayout>
);
const ProfileStack = ({navigation}) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={Profile}
        component={ProfileComponent}
        options={{header: () => null, unmountOnBlur: true}}
      />
    </Stack.Navigator>
  );
};

export default ProfileStack;
