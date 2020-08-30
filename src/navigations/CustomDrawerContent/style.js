import styled from 'styled-components';
import Variables from '../../assets/style/Variables';
import {DrawerItem} from '@react-navigation/drawer';

export const HeaderContainer = styled.View`
  flex: 0.9;
  background-color: ${Variables.colors.primary_400};
  padding: 16px 12px 0 12px;
  align-items: flex-end;
`;

export const BodyContainer = styled.View`
  width: 100%;
  flex: 2;
  align-items: center;
`;

export const Text = styled.Text`
  color: ${Variables.colors.complementary};
  font-size: ${Variables.font_sizes.medium};
  padding: 16px 32px 0 0;
  font-family: ${Variables.font_family.light};
`;

export const DrawerItemContainer = styled(DrawerItem)`
  width: 100%;
  align-items: center;
  flex-direction: row;
  padding: 8px 4px;
  justify-content: flex-end;
`;

export const ViewBottom = styled.View`
  width: 100%;
  position: absolute;
  bottom: 0;
  height: 64px;
  justify-content: center;
  border-top-width: 1px;
  border-top-color: ${Variables.colors.complementary_300};
`;

export const CustomItemContainer = styled.TouchableHighlight`
  width: 100%;
`;

export const Label = styled.Text`
  font-size: ${Variables.font_sizes.small};
  color: ${(props) => (props.color ? COLORS[props.color] : COLORS.default)};
  margin-right: 12px;
  font-family: ${Variables.font_family.light};
`;

export const ViewInCustom = styled.View`
  width: 100%;
  flex-direction: row-reverse;
  align-items: center;
  padding: 8px 36px;
`;

export const COLORS = {
  primary: Variables.colors.primary_500,
  default: Variables.colors.complementary_700,
};
