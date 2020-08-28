import React from 'react';
import {EmptyStateContainer, EmptyStateDescription} from './style';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Variables from '../../assets/style/Variables';

const Index = ({icon, text}) => {
  return (
    <EmptyStateContainer>
      <MaterialCommunityIcons
        name={icon}
        size={64}
        color={Variables.colors.complementary_600}
      />
      <EmptyStateDescription>{text}</EmptyStateDescription>
    </EmptyStateContainer>
  );
};

export default Index;
