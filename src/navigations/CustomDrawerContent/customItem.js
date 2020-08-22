import React from 'react';
import {CustomItemContainer, Label, ViewInCustom, COLORS} from './style';
import Variables from '../../assets/style/Variables';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export const CustomItem = ({color, label, icon, onPress}) => {
  return (
    <CustomItemContainer onPress={() => onPress()} underlayColor="transparent">
      <ViewInCustom>
        <MaterialCommunityIcons
          name={icon}
          color={COLORS[color || 'default']}
          size={24}
        />
        <Label color={color}>{label}</Label>
      </ViewInCustom>
    </CustomItemContainer>
  );
};
