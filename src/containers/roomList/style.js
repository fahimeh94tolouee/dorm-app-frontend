import styled from 'styled-components';
import Variables from '../../assets/style/Variables';

const COLORS = {
  secondary: Variables.colors.complementary_500,
  success: Variables.colors.success,
  warning: Variables.colors.warning,
};

export const ParentContainer = styled.View`
  flex: 1;
  width: 100%;
`;

export const RoomListContainer = styled.ScrollView`
  margin: 32px auto;
  padding: 0 16px;
  flex: 1;
`;

export const CardBottomPartContainer = styled.View`
  flex: 1;
  justify-content: space-around;
`;
export const MyStatusContainer = styled.View`
  flex-direction: row-reverse;
  align-items: center;
  width: 100%;
`;
export const StatusText = styled.Text`
  font-size: ${Variables.font_sizes.little};
  font-family: ${Variables.font_family.bold};
  margin-left: 12px;
  color: ${(props) =>
    props.color ? COLORS[props.color] : Variables.colors.complementary_700};
`;

export const ButtonContainer = styled.View`
  width: 50%;
`;
