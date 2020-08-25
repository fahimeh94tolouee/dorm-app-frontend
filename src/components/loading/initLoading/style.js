import styled from 'styled-components';
import {Dimensions} from 'react-native';

export const Image = styled.Image`
  width: ${Math.round(Dimensions.get('window').width)};
  height: ${Math.round(Dimensions.get('window').height)};
`;
