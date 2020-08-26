import styled from 'styled-components';
import Variables from '../../assets/style/Variables';

const COLORS = [
  {color: Variables.colors.lemon},
  {color: Variables.colors.pink},
  {color: Variables.colors.green},
  {color: Variables.colors.blue},
];
export const CardContainer = styled.View`
  height: 128px;
  width: 100%;
  border: 1px solid ${Variables.colors.complementary_600};
  border-radius: 8px;
  flex-direction: row-reverse;
  align-items: center;
  padding: 8px;
  background-color: ${Variables.colors.complementary};
  margin-bottom: 12px;
`;

export const RightPart = styled.View`
  width: 100px;
  height: 100px;
  background-color: ${(props) =>
    props.colorId !== undefined
      ? COLORS[props.colorId].color
      : Variables.colors.primary_700};
  border-radius: 50px;
  align-items: center;
  justify-content: center;
`;

export const RightPartText = styled.Text`
  font-family: ${Variables.font_family.bold};
  font-size: ${Variables.font_sizes.medium};
  color: ${Variables.colors.complementary_100};
`;

export const LeftPart = styled.View`
  width: 70%;
  height: 100%;
  border-right-color: ${Variables.colors.complementary_500};
  border-right-width: 1px;
  margin-right: 12px;
  padding: 8px;
  justify-content: space-between;
`;

export const LeftPartText = styled.Text`
  font-family: ${Variables.font_family.light};
  font-size: ${Variables.font_sizes.small_x1};
  color: ${Variables.colors.complementary_700};
`;

export const LeftPartBody = styled.View`
  width: 100%;
  height: 50%;
`;
