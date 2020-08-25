import styled from 'styled-components';
import Variables from '../../assets/style/Variables';
import {HeaderTitle} from '@react-navigation/stack';

export const ParentContainer = styled.View`
  flex: 1;
  width: 100%;
`;

export const Header = styled.View`
  height: 64px;
  border-bottom-width: 1px;
  border-bottom-color: ${Variables.colors.complementary_500};
  flex-direction: row-reverse;
  padding: 8px;
  align-items: center;
  justify-content: space-between;
  background-color: ${Variables.colors.primary_500};
`;
export const HeaderText = styled.Text`
  font-size: ${Variables.font_sizes.small_x1};
  font-family: ${Variables.font_family.bold};
  color: ${Variables.colors.complementary_light};
`;

export const ProfileContainer = styled.ScrollView`
  width: 90%;
  margin: 32px auto;
  padding: 0 12px;
  flex: 1;
`;

export const Space = styled.View`
  height: 16px;
`;

export const SelectBoxesContainer = styled.View`
  width: 100%;
  margin-top: 24px;
`;
export const SelectBoxContainer = styled.View`
  width: 100%;
  align-items: center;
  flex-direction: row-reverse;
  justify-content: space-between;
  margin-bottom: 12px;
  border: 1px solid ${Variables.colors.primary_500};
`;
export const SelectBoxContainerLabel = styled.Text`
  color: ${Variables.colors.complementary_900};
  padding: 4px 8px 0 4px;
  width: 130px;
`;
