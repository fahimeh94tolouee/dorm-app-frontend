import styled from 'styled-components';
import Variables from '../../assets/style/Variables';

export const ModalParentContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  display: ${(props) => (props.show ? 'flex' : 'none')};
`;
export const ModalContainer = styled.Modal`
  background-color: ${Variables.colors.complementary};
`;
export const ModalOverlayContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  display: ${(props) => (props.show ? 'flex' : 'none')};
  background-color: rgba(0, 0, 0, 0.5);
`;

export const TitleContainer = styled.View`
  flex-direction: row-reverse;
  justify-content: space-between;
  padding: 12px;
  background-color: ${Variables.colors.primary_500};
  width: 100%;
  height: 64px;
`;

export const Title = styled.Text`
  font-family: ${Variables.font_family.bold};
  font-size: ${Variables.font_sizes.small_x1};
  color: ${Variables.colors.complementary};
`;

export const BodyContainer = styled.ScrollView`
  padding: 12px;
  background-color: ${Variables.colors.complementary};
  width: 100%;
  height: 300px;
`;
