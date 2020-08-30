import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Requests, Rooms, Notifications} from '../constants/Navigations';
import RequestPage from '../containers/requests';
import NotificationPage from '../containers/notifications';
import {RoomStack} from './index';
import Variables from '../assets/style/Variables';

const Tabs = createBottomTabNavigator();

const MainTabs = () => {
  return (
    <Tabs.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          size = 28;
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
          } else if (route.name === Notifications) {
            return (
              <MaterialIcons name={'notifications'} size={size} color={color} />
            );
          }

          // You can return any component that you like here!
          // return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: Variables.colors.primary_500,
        inactiveTintColor: Variables.colors.complementary_500,
        labelStyle: {
          fontFamily: Variables.font_family.light,
        },
        style: {paddingVertical: 8},
        // showLabel: false,
      }}>
      <Tabs.Screen
        name={Rooms}
        component={RoomStack}
        options={{title: 'اتاق‌ها', unmountOnBlur: true}}
      />
      <Tabs.Screen
        name={Requests}
        component={RequestPage}
        options={{title: 'درخواست‌ها', unmountOnBlur: true}}
      />
      <Tabs.Screen
        name={Notifications}
        component={NotificationPage}
        options={{title: 'اعلان‌ها', unmountOnBlur: true}}
      />
    </Tabs.Navigator>
  );
};

export default MainTabs;
