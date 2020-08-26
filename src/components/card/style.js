import styled from 'styled-components';
import Variables from '../../assets/style/Variables';

const COLORS = [
  {color: Variables.colors.lemon},
  {color: Variables.colors.pink},
  {color: Variables.colors.green},
  {color: Variables.colors.blue},
];
export const CardContainer = styled.View`
  height: 160px;
  width: 100%;
  border-radius: 8px;
  flex-direction: row-reverse;
  elevation: 3;
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
  opacity: 1;
  font-family: ${Variables.font_family.bold};
  font-size: ${Variables.font_sizes.medium};
  color: ${Variables.colors.black_800};
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
  font-family: ${Variables.font_family.ultra_light};
  font-size: ${Variables.font_sizes.small};
  color: ${Variables.colors.black_800};
`;

export const LeftPartBody = styled.View`
  width: 100%;
  height: 65%;
`;
