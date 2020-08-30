import React from 'react';
import {AvatarContainer, Image, Text} from './style';

const GetAvatarText = (user) => {
  let start = '';
  let last = '';
  if (user.first_name && user.last_name) {
    start = user.first_name;
    last = user.last_name;
  } else {
    start = user.user.toString().toUpperCase();
  }
  start = start.substring(0, 1);
  last = last ? last.substring(0, 1) : '';
  return `${start} ${last}`;
};

export default (props) => {
  const {data, colorId, big} = props;
  if (data.image) {
    return <Image source={{uri: data.image}} big={big} />;
  }
  return (
    <AvatarContainer colorId={colorId ? colorId : data.id % 4} big={big}>
      <Text>{data.title ? data.title : GetAvatarText(data)}</Text>
    </AvatarContainer>
  );
};
