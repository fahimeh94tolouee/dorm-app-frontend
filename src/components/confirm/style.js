import styled from 'styled-components';
import Variables from '../../assets/style/Variables';

export const ConfirmParentContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  display: ${(props) => (props.show ? 'flex' : 'none')};
  width: 90%;
`;
export const ConfirmContainer = styled.Modal`
  background-color: ${Variables.colors.primary_700};
`;
export const ConfirmOverlayContainer = styled.TouchableOpacity`
  flex: 1;
  align-items: center;
  justify-content: center;
  display: ${(props) => (props.show ? 'flex' : 'none')};
  background-color: rgba(0, 0, 0, 0.5);
`;

export const TopContainer = styled.View`
  position: relative;
  width: 100%;
`;
export const IconContainer = styled.View`
  align-items: center;
  position: absolute;
  top: -40px;
  width: 100%;
  z-index: 2;
`;
export const IconCircleContainer = styled.View`
  width: 80px;
  height: 80px;
  border-radius: 40px;
  background-color: ${Variables.colors.yellow_100};
  align-items: center;
  border: 3px solid ${Variables.colors.complementary};
`;
export const Title = styled.Text`
  font-family: ${Variables.font_family.light};
  font-size: ${Variables.font_sizes.small};
  color: ${Variables.colors.complementary_800};
  text-align: center;
  margin-top: 32px;
  padding: 0 16px;
`;

export const BodyContainer = styled.View`
  padding: 12px;
  background-color: ${Variables.colors.complementary};
  justify-content: center;
  width: 90%;
`;

export const ButtonsContainer = styled.View`
  flex-direction: row-reverse;
  align-items: center;
  margin-top: 32px;
  border-top-color: ${Variables.colors.complementary_300};
  border-top-width: 1px;
`;
export const ButtonInnerContainer = styled.View`
  align-items: center;
  width: 50%;
`;
