import styled from 'styled-components';
import Variables from '../../assets/style/Variables';
import {Dimensions} from 'react-native';

export const AuthContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  width: ${Math.round(Dimensions.get('window').width)};
  background-color: ${Variables.colors.complementary};
`;

export const InputsContainer = styled.View`
  align-items: center;
  width: 90%;
  flex: 1.5;
  margin-top: 16px;
  justify-content: center;
`;
export const ButtonContainer = styled.View`
  margin-top: 36px;
  width: 90%;
  flex: 1;
`;

export const TextLinkContainer = styled.Text`
  width: 100%;
  margin-top: 24px;
  font-size: ${Variables.font_sizes.small_x1};
  text-align: center;
  color: ${Variables.colors.complementary_700};
  text-decoration-line: underline;
  margin-bottom: 16px;
`;

export const Image = styled.Image`
  margin-top: 32px;
  width: 120px;
  height: 120px;
`;
