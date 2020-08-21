import React from 'react';
import {ActivityIndicator} from 'react-native';
import {COLORS, SIZE} from './style';

const Loading = (props) => {
  return (
    <ActivityIndicator
      color={COLORS[props.color || 'default']}
      size={SIZE[props.color || 'medium']}
    />
  );
};

export default Loading;
