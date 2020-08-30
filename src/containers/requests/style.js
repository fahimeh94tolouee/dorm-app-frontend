import styled from 'styled-components';
import Variables from '../../assets/style/Variables';

export const ParentContainer = styled.View`
  flex: 1;
  width: 100%;
  background-color: ${Variables.colors.complementary};

`;

export const DemandsListContainer = styled.ScrollView`
  margin: 16px 0;
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
