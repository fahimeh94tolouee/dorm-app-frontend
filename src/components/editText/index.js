import React from 'react';
import {EditTextContainer, EditText, COLOR} from './style';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Variables from '../../assets/style/Variables';

const Index = (props) => {
  const [isFocused, onFocusChange] = React.useState(false);
  return (
    <EditTextContainer isFocused={isFocused}>
      <FontAwesome5
        name={props.icon}
        size={30}
        color={
          COLOR[props.color || 'primary'][isFocused ? 'focused' : 'normal']
        }
      />
      <EditText
        isFocused={isFocused}
        onChangeText={(text) => props.onChange(text)}
        onFocus={() => onFocusChange(true)}
        onBlur={() => onFocusChange(false)}
        value={props.value}
        placeholder={props.placeholder}
        secureTextEntry={props.isSecure}
      />
    </EditTextContainer>
  );
};

export default Index;
