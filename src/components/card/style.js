import styled from 'styled-components';
import Variables from '../../assets/style/Variables';

export const CardContainer = styled.View`
  height: 128px;
  width: 100%;
  border: 1px solid ${Variables.colors.primary_700};
  border-radius: 8px;
  flex-direction: row-reverse;
`;

export const RightPart = styled.View`
  width: 30%;
  height: 100%;
  background-color: ${Variables.colors.primary_700};
  align-items: center;
  justify-content: center;
`;

export const RightPartText = styled.Text`
  font-family: ${Variables.font_family.bold};
  font-size: ${Variables.font_sizes.medium};
  color: ${Variables.colors.complementary_800};
`;

export const LeftPart = styled.View`
  width: 70%;
  height: 100%;
`;
