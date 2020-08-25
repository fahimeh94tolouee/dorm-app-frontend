import styled from 'styled-components';
import Variables from '../../assets/style/Variables';

export const ProfileContainer = styled.ScrollView`
  width: 90%;
  margin: 32px auto;
  flex: 1;
`;

export const Space = styled.View`
  height: 16px;
`;

export const SelectBoxesContainer = styled.View`
  width: 100%;
  flex-direction: row-reverse;
  margin-top: 24px;
`;
export const SelectBoxContainer = styled.View`
  width: 100%;
  align-items: center;
  flex-direction: row-reverse;
  justify-content: space-between;
  border: 1px solid ${Variables.colors.primary_700};
`;
export const SelectBoxContainerLabel = styled.Text`
  color: ${Variables.colors.complementary_900};
  padding: 4px 8px 0 4px;
  width: 120px;
`;
