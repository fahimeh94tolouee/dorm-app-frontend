import styled from 'styled-components';
import Variables from '../../assets/style/Variables';

export const Header = styled.View`
  height: 64px;
  border-bottom-width: 1px;
  border-bottom-color: ${Variables.colors.complementary_500};
  flex-direction: row-reverse;
  padding: 8px;
  align-items: center;
  justify-content: space-between;
  background-color: ${Variables.colors.primary_500};
  position: relative;
`;
export const HeaderText = styled.Text`
  font-size: ${Variables.font_sizes.small_x1};
  font-family: ${Variables.font_family.bold};
  color: ${Variables.colors.complementary_light};
`;

export const InputContainer = styled.View`
  position: absolute;
  left: 0;
  top: 8px;
  width: 80%;
  height: 100%;
  background-color: ${Variables.colors.primary_500};
`;
