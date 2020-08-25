import styled from 'styled-components';
import Variables from '../../assets/style/Variables';

export const ParentContainer = styled.View`
  flex: 1;
  width: 100%;
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
