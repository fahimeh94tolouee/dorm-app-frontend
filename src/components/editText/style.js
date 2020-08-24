import styled from 'styled-components';
import Variables from '../../assets/style/Variables';

export const COLOR = {
  primary: {
    normal: Variables.colors.complementary_700,
    focused: Variables.colors.primary_500,
  },
};

export const EditText = styled.TextInput`
  flex: 1;
  padding: 6px 16px 3px 16px;
  border-radius: 20px;
  text-align: right;
  font-size: ${Variables.font_sizes.small};
  font-family: ${Variables.font_family.light};
  border-bottom-width: 1px;
  border-bottom-color: ${(props) =>
    props.isFocused
      ? props.color
        ? COLOR[props.color].focused
        : COLOR.primary.focused
      : props.color
      ? COLOR[props.color].normal
      : COLOR.primary.normal};
`;

export const EditTextContainer = styled.View`
  width: 100%;
  flex-direction: row-reverse;
  align-items: center;
`;

export const TextError = styled.Text`
  width: 100%;
  color: ${Variables.colors.primary_500};
  font-size: ${Variables.font_sizes.little};
  font-family: ${Variables.font_family.light};
  margin-top: 8px;
  margin-right: ${(props) => (props.hasRightMargin ? '36px' : '0')};
`;

// border: 1px solid
