import React from 'react';
import {EditTextContainer, EditText, COLOR, TextError} from './style';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {View} from 'react-native';

const Index = (props) => {
  const [isFocused, onFocusChange] = React.useState(false);
  return (
    <View style={{alignItems: 'flex-end'}}>
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
          {...props}
        />
      </EditTextContainer>
      <TextError hasRightMargin={!!props.icon}>{props.error}</TextError>
    </View>
  );
};

export default Index;
