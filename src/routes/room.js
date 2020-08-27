import React from 'react';
import {RoomsUser, Rooms} from '../constants/Navigations';
import {createStackNavigator} from '@react-navigation/stack';
import RoomListPage from '../containers/roomList';
import RoomUserListPage from '../containers/roomList/roomUsers';

const Stack = createStackNavigator();

const RoomStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={Rooms}
        component={RoomListPage}
        options={{header: () => null}}
      />
      <Stack.Screen
        name={RoomsUser}
        component={RoomUserListPage}
        options={{header: () => null}}
      />
    </Stack.Navigator>
  );
};

export default RoomStack;
