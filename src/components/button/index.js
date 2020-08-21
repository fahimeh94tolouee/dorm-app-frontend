import React from 'react';
// import {Text} from 'react-native';
import {ButtonContainer, TextContainer} from './style';

const Index = (props) => {
  return (
    <ButtonContainer
      color={props.color}
      onPress={props.onPress}
      activeOpacity={props.disabled ? 1 : 0.5}>
      <TextContainer color={props.color}>{props.title}</TextContainer>
    </ButtonContainer>
  );
};

export default Index;
