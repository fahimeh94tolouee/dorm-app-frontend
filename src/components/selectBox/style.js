import styled from 'styled-components';
import Variables from '../../assets/style/Variables';

export const SelectBoxContainer = styled.TouchableOpacity`
  width: 100%;
  background-color: red;
`;

export const SelectBoxClosedContainer = styled.View`
  width: 100%;
  background-color: ${Variables.colors.complementary_400};
  padding: 8px;
  flex-direction: row-reverse;
  justify-content: space-between;
  align-items: center;
`;
export const SelectedItemText = styled.Text`
  font-family: ${Variables.font_family.light};
  font-size: ${Variables.font_sizes.small};
  color: ${Variables.colors.complementary_900};
`;

export const SelectBoxOpenContainerModal = styled.Modal`
  background-color: ${Variables.colors.complementary};
`;
export const SelectBoxOpenContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  display: ${(props) => (props.show ? 'flex' : 'none')};
`;
export const SelectBoxOpenContainerInner = styled.TouchableOpacity`
  flex: 1;
  align-items: center;
  justify-content: center;
  display: ${(props) => (props.show ? 'flex' : 'none')};
  background-color: rgba(0, 0, 0, 0.5);
`;

export const ItemsContainer = styled.View`
  background-color: ${Variables.colors.complementary};
  width: 80%;
`;
export const ItemContainer = styled.TouchableOpacity`
  height: 48px;
  width: 100%;
  justify-content: center;
  padding: 8px 32px 8px 4px;
`;

export const ItemText = styled.Text`
  font-family: ${(props) =>
    props.title ? Variables.font_family.bold : Variables.font_family.light};
  font-size: ${Variables.font_sizes.little};
  color: ${(props) =>
    props.title
      ? Variables.colors.primary_700
      : Variables.colors.complementary_900};
`;
