import styled from 'styled-components';
import Variables from '../../assets/style/Variables';

export const COLORS = {
  secondary: Variables.colors.complementary_500,
  success: Variables.colors.success,
  error: Variables.colors.red_500,
};

export const MessageContainer = styled.View`
  flex-direction: row-reverse;
  border-bottom-color: ${Variables.colors.complementary_300};
  border-bottom-width: 1px;
  padding: 12px 16px;
  background-color: ${Variables.colors.complementary};
  align-items: center;
`;

export const TextsContainer = styled.View`
  margin-right: 12px;
`;

export const MessageTitle = styled.Text`
  max-width: 90%;
  font-family: ${Variables.font_family.bold};
  font-size: ${Variables.font_sizes.small_x1};
  margin-bottom: 16px;
`;
export const MessageText = styled.Text`
  max-width: 90%;
  font-family: ${Variables.font_family.light};
  font-size: ${Variables.font_sizes.small};
  line-height: 32px;
`;
