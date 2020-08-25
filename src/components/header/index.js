import React from 'react';
import {Header, HeaderText, InputContainer} from './style';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Input from '../../components/editText';

const Index = (props) => {
  return (
    <Header>
      {props.rightIcon && (
        <Ionicons
          name={props.rightIcon}
          color="white"
          size={32}
          onPress={() => props.rightIconOnPress()}
        />
      )}
      <HeaderText>{props.title}</HeaderText>
      {!!props.leftIcon && (
        <Ionicons
          name={props.leftIcon}
          color="white"
          size={32}
          onPress={() => props.leftIconOnPress()}
        />
      )}
      {!!props.inputField && props.inputField.show && (
        <InputContainer>
          <Input
            placeholder={props.inputField.placeholder}
            onChange={props.inputField.onChange}
            value={props.inputField.value}
            {...props.inputField.otherProps}
          />
        </InputContainer>
      )}
    </Header>
  );
};
export default Index;
