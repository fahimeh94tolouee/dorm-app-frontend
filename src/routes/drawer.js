import React from 'react';
import {Profile} from '../constants/Navigations';
import ProfilePage from '../containers/profile';
import {createStackNavigator, HeaderBackButton} from '@react-navigation/stack';
import CenterLayout from '../layouts/center';

const Stack = createStackNavigator();

const ProfileStack = ({navigation}) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={Profile}
        component={(props) => (
          <CenterLayout>
            <ProfilePage {...props} />
          </CenterLayout>
        )}
        options={{
          headerLeft: (props) => (
            <HeaderBackButton
              {...props}
              onPress={() => {
                navigation.goBack();
                // Do something
              }}
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
};

export default ProfileStack;
