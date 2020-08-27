import React from 'react';
import {
  ModalParentContainer,
  ModalContainer,
  ModalOverlayContainer,
  TitleContainer,
  Title,
  BodyContainer,
} from './style';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Index = (props) => {
  return (
    <ModalContainer visible={props.show} transparent={true}>
      <ModalOverlayContainer show={props.show}>
        <TitleContainer>
          <Title>{props.title}</Title>
          <FontAwesome
            name="close"
            size={32}
            color="white"
            onPress={() => props.onClose()}
          />
        </TitleContainer>
        <BodyContainer>{props.children}</BodyContainer>
      </ModalOverlayContainer>
    </ModalContainer>
  );
};

export default Index;
