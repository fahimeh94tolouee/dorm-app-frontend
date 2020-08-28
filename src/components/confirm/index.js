import React from 'react';
import {
  ConfirmParentContainer,
  ConfirmContainer,
  ConfirmOverlayContainer,
  TopContainer,
  IconContainer,
  IconCircleContainer,
  Title,
  BodyContainer,
  ButtonsContainer,
  ButtonInnerContainer,
} from './style';
import Buttom from '../button';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Index = (props) => {
  return (
    <ConfirmParentContainer show={props.show}>
      <ConfirmContainer visible={props.show} transparent={true}>
        <ConfirmOverlayContainer
          show={props.show}
          onPress={() => props.onClose()}>
          <TopContainer>
            <IconContainer>
              <IconCircleContainer>
                <Ionicons name="warning" size={64} color="white" />
              </IconCircleContainer>
            </IconContainer>
          </TopContainer>
          <BodyContainer>
            <Title>{props.messages}</Title>
            <ButtonsContainer>
              <ButtonInnerContainer>
                <Buttom
                  title="بله"
                  loading={props.loading}
                  onPress={() => props.onAccept()}
                  color={'white'}
                />
              </ButtonInnerContainer>
              <ButtonInnerContainer>
                <Buttom
                  title="خیر"
                  onPress={() => props.onClose()}
                  color={'white'}
                />
              </ButtonInnerContainer>
            </ButtonsContainer>
          </BodyContainer>
        </ConfirmOverlayContainer>
      </ConfirmContainer>
    </ConfirmParentContainer>
  );
};

export default Index;
