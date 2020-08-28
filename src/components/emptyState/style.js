import styled from 'styled-components';
import Variables from '../../assets/style/Variables';

export const EmptyStateContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const EmptyStateDescription = styled.Text`
  font-size: ${Variables.font_sizes.medium};
  color: ${Variables.colors.complementary_600};
  font-family: ${Variables.font_family.medium};
  text-align: center;
  margin-top: 16px;
  max-width: 300px;
`;
