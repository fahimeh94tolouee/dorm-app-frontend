import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Requests, Rooms} from '../constants/Navigations';
import RequestPage from '../containers/requests';
import {RoomStack} from './index';

const Tabs = createBottomTabNavigator();

const MainTabs = () => {
  return (
    <Tabs.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === Rooms) {
            iconName = 'bunk-bed';
            return (
              <MaterialCommunityIcons
                name={'bunk-bed'}
                size={size}
                color={color}
              />
            );
          } else if (route.name === Requests) {
            return (
              <MaterialIcons
                name={'question-answer'}
                size={size}
                color={color}
              />
            );
          }

          // You can return any component that you like here!
          // return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}>
      <Tabs.Screen
        name={Rooms}
        component={RoomStack}
        options={{title: 'اتاق‌ها', unmountOnBlur: true}}
      />
      <Tabs.Screen
        name={Requests}
        component={RequestPage}
        options={{title: 'درخواست‌ها', unmountOnBlur: true,}}
      />
    </Tabs.Navigator>
  );
};

export default MainTabs;
