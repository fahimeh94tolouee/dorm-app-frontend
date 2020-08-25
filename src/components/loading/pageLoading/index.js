import React from 'react';
import {ActivityIndicator} from 'react-native';
import {COLORS, Container} from './style';

const Loading = (props) => {
  return (
    <Container>
      <ActivityIndicator color={COLORS[props.color || 'default']} size={128} />
    </Container>
  );
};

export default Loading;
