import styled from 'styled-components';
import Variables from '../../assets/style/Variables';

const COLORS = {
  primary: {
    background: Variables.colors.primary_700,
    text: Variables.colors.complementary,
  },
  secondary: {
    background: Variables.colors.complementary_450,
    text: Variables.colors.complementary_800,
  },
  error: {
    background: Variables.colors.red_500,
    text: Variables.colors.red_600,
  },
  success: {
    background: Variables.colors.success,
    text: Variables.colors.green_100,
  },
};

export const ButtonContainer = styled.TouchableOpacity`
  border-width: ${(props) => (props.hasBorder ? '1px' : '0')};
  border-color: ${(props) =>
    props.color ? COLORS[props.color].background : COLORS.primary.background};
  background-color: ${(props) =>
    !props.hasBorder
      ? props.color
        ? COLORS[props.color].background
        : COLORS.primary.background
      : Variables.colors.complementary};
  padding: 8px 16px;
  border-radius: ${(props) => (!props.littleRound ? '24px' : '4px')};
  width: 100%;
  justify-content: center;
  height: 48px;
`;

export const TextContainer = styled.Text`
  color: ${(props) =>
    props.color ? COLORS[props.color].text : COLORS.primary.text};
  text-align: center;
  font-family: ${Variables.font_family.light};
  font-size: ${(props) =>
    props.size === 'small'
      ? Variables.font_sizes.small
      : Variables.font_sizes.small_x1};
`;
