import styled from 'styled-components';
import Variables from '../../assets/style/Variables';

const COLORS = {
  primary: {
    background: Variables.colors.primary_700,
    text: Variables.colors.complementary,
  },
};

export const ButtonContainer = styled.TouchableOpacity`
  background-color: ${(props) =>
    props.color ? COLORS[props.color].background : COLORS.primary.background};
  padding: 8px 16px;
  border-radius: 24px;
  width: 100%;
`;

export const TextContainer = styled.Text`
  color: ${(props) =>
    props.color ? COLORS[props.color].text : COLORS.primary.text};
  text-align: center;
  font-family: IRANSansMobile-Light;
  font-size: ${Variables.font_sizes.small_x1};
`;
