import styled from 'styled-components';
import Variables from '../../assets/style/Variables';

const COLORS = [
  {color: Variables.colors.random1},
  {color: Variables.colors.random2},
  {color: Variables.colors.random3},
  {color: Variables.colors.random4},
];
export const AvatarContainer = styled.View`
  width: ${(props) => (props.big ? '120px' : '98px')};
  height: ${(props) => (props.big ? '120px' : '98px')};
  border-radius: ${(props) => (props.big ? '60px' : '49px')};
  background-color: ${(props) =>
    props.colorId !== undefined
      ? COLORS[props.colorId].color
      : Variables.colors.complementary};
  align-items: center;
  justify-content: center;
`;

export const Text = styled.Text`
  font-family: ${Variables.font_family.bold};
  font-size: ${Variables.font_sizes.medium};
  color: ${Variables.colors.complementary_900};
`;

export const Image = styled.Image`
  width: ${(props) => (props.big ? '120px' : '98px')};
  height: ${(props) => (props.big ? '120px' : '98px')};
  border-radius: ${(props) => (props.big ? '60px' : '49px')};
  align-items: center;
  justify-content: center;
`;
