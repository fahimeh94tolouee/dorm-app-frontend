import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {AuthStack, MainStack, RightStack} from './routes';

export const Routes = () => {
  return (
    <NavigationContainer>
      {/*<AuthStack />*/}
      {/*<MainStack />*/}
      <RightStack />
    </NavigationContainer>
  );
};
