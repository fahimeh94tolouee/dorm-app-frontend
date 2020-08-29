import styled from 'styled-components';
import Variables from '../../assets/style/Variables';

const COLORS = [
  {color: 'rgba(171,142,192,0.51)'},
  {color: 'rgba(220,49,72,0.51)'},
  {color: `rgba(237, 172, 196, 0.51)`},
  {color: `rgba(250, 197, 214, 0.51)`},
];

export const ICON_COLORS = {
  secondary: Variables.colors.complementary_500,
  success: Variables.colors.success,
  warning: Variables.colors.warning,
};

export const CardContainer = styled.TouchableOpacity`
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
  width: 30%;
  align-items: center;
  justify-content: center;
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
  line-height: 36px;
  color: ${Variables.colors.black_800};
  padding-right: 8px;
`;

export const LeftPartBody = styled.View`
  width: 100%;
  height: 65%;
`;
