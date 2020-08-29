import styled from 'styled-components';
import Variables from '../../assets/style/Variables';

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
