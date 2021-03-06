import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import {Profile} from '../../constants/Navigations';
import React from 'react';
import {
  HeaderContainer,
  BodyContainer,
  Text,
  DrawerItemContainer,
  COLORS,
  ViewBottom,
} from './style';
import {CustomItem} from './customItem';
import {View} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {logout} from '../../assets/functions/logout';
import Avatar from '../../projectSpecificComponents/avatar';

const CustomDrawerContent = (props) => {
  const {user} = props.data;
  if (user) {
    return (
      <DrawerContentScrollView
        contentContainerStyle={{flex: 1, marginTop: -5, width: '100%'}}>
        {/*<DrawerItemList {...props} />*/}
        <HeaderContainer>
          <Avatar data={user} colorId={3} big />
          <Text>
            {user.first_name && user.last_name
              ? `${user.first_name} ${user.last_name}`
              : user.user}
          </Text>
        </HeaderContainer>
        <BodyContainer>
          <DrawerItemContainer
            label="مشاهده حساب کاربری"
            inactiveTintColor={COLORS.primary}
            labelStyle={{
              width: 160,
              fontSize: 16,
              fontFamily: 'IRANSansMobile-Light',
            }}
            onPress={() => props.navigation.navigate(Profile)}
            icon={({focused, color, size}) => (
              <MaterialIcons
                name={'keyboard-arrow-left'}
                color={color}
                size={size}
              />
            )}
          />
          <View style={{height: 16}} />
          <CustomItem
            onPress={() => props.navigation.navigate(Profile)}
            label="راهنما"
            icon={'help-circle'}
            color={'primary'}
          />
          <View style={{height: 24}} />
          <CustomItem
            onPress={() => props.navigation.navigate(Profile)}
            label="درباره ما"
            icon={'information'}
            color={'primary'}
          />
          <ViewBottom bottom={true} border={true}>
            <CustomItem
              onPress={() => logout()}
              label="خروج از حساب کاربری"
              icon={'logout'}
            />
          </ViewBottom>
        </BodyContainer>
      </DrawerContentScrollView>
    );
  }
};

export default CustomDrawerContent;
