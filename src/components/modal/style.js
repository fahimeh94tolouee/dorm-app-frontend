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
  padding: 8px;
  background-color: ${Variables.colors.primary_500};
  width: 90%;
`;

export const Title = styled.Text`
  font-family: ${Variables.font_family.bold};
`;

export const BodyContainer = styled.View`
  padding: 8px;
  background-color: ${Variables.colors.complementary};
  width: 90%;
`;
