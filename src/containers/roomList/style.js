import styled from 'styled-components';
import Variables from '../../assets/style/Variables';

const COLORS = {
  secondary: Variables.colors.complementary_500,
  success: Variables.colors.success,
  warning: Variables.colors.warning,
};

export const ParentContainer = styled.View`
  flex: 1;
  width: 100%;
`;

export const ListContainer = styled.ScrollView`
  margin: 32px auto;
  padding: 0 16px;
  flex: 1;
`;

export const CardBottomPartContainer = styled.View`
  flex: 1;
  justify-content: space-around;
`;
export const MyStatusContainer = styled.View`
  flex-direction: row-reverse;
  align-items: center;
  width: 100%;
`;
export const StatusText = styled.Text`
  font-size: ${Variables.font_sizes.little};
  font-family: ${Variables.font_family.bold};
  margin-left: 12px;
  color: ${(props) =>
    props.color ? COLORS[props.color] : Variables.colors.complementary_700};
`;

export const ButtonContainer = styled.View`
  width: 50%;
`;

export const UserPropertyParent = styled.View`
  width: 100%;
  margin: 0 0 32px 0;
`;
export const UserPropertyContainer = styled.View`
  width: 100%;
  justify-content: space-between;
  border-bottom-width: 1px;
  border-bottom-color: ${Variables.colors.complementary_300};
  padding: 8px 0;
  align-items: flex-end;
`;

export const UserPropertyTitleContainer = styled.View`
  width: 100%;
  margin-bottom: 24px;
  padding: 0 10px;
  flex-direction: row-reverse;
  align-items: center;
`;

export const UserPropertyTitle = styled.Text`
  font-family: ${Variables.font_family.bold};
  color: ${Variables.colors.primary_800};
  font-size: ${Variables.font_sizes.small_x1};
  margin-right: 10px;
`;

export const UserPropertyText = styled.Text`
  font-family: ${Variables.font_family.light};
  color: ${Variables.colors.complementary_900};
  padding: 0 42px 0 16px;
`;
