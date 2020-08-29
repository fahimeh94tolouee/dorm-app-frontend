import styled from 'styled-components';
import Variables from '../../assets/style/Variables';

export const ParentContainer = styled.View`
  flex: 1;
  width: 100%;
`;

export const DemandsListContainer = styled.ScrollView`
  margin: 32px auto;
  padding: 0 16px;
  flex: 1;
`;

export const ButtonsContainer = styled.View`
  flex-direction: row-reverse;
  align-items: center;
  justify-content: space-between;
  margin-top: 12px;
  border-top-color: ${Variables.colors.complementary_300};
  border-top-width: 1px;
`;
export const ButtonInnerContainer = styled.View`
  align-items: center;
  width: 47%;
  height: 80%;
`;
