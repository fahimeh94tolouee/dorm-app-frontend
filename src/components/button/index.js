import React from 'react';
import Loading from '../loading/buttonLoading';
import {ButtonContainer, TextContainer} from './style';

const Index = (props) => {
  return (
    <ButtonContainer
      color={props.color}
      hasBorder={props.border}
      littleRound={props.littleRound}
      onPress={props.onPress}
      activeOpacity={1}>
      <TextContainer color={props.color}>
        {props.loading ? <Loading size={'large'} /> : props.title}
      </TextContainer>
    </ButtonContainer>
  );
};

export default Index;
