import React from 'react';
import {
  MessageContainer,
  MessageText,
  TextsContainer,
  MessageTitle,
  COLORS,
} from './style';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default (props) => {
  return (
    <MessageContainer type={props.type}>
      <MaterialCommunityIcons
        name="message-text"
        size={32}
        color={COLORS[props.type]}
      />
      <TextsContainer>
        <MessageTitle>{props.title}</MessageTitle>
        <MessageText>{props.message}</MessageText>
      </TextsContainer>
    </MessageContainer>
  );
};
