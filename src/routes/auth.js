import React from 'react';
import {Login, Register} from '../constants/Navigations';
import LoginPage from '../containers/auth/Login';
import RegisterPage from '../containers/auth/Register';
import {createStackNavigator} from '@react-navigation/stack';
import CenterLayout from '../layouts/center';

const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={Login}
        component={(props) => (
          <CenterLayout>
            <LoginPage {...props} />
          </CenterLayout>
        )}
        // options={{header: () => null}}
      />
      <Stack.Screen
        name={Register}
        component={(props) => (
          <CenterLayout>
            <RegisterPage {...props} />
          </CenterLayout>
        )}
        // options={{header: () => null}}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
