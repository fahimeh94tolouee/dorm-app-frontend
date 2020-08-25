import React from 'react';
import {CardContainer, RightPart, RightPartText, LeftPart} from './style';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
const Card = (props) => {
  return (
    <CardContainer>
      <RightPart>
        {!!props.icon && <FontAwesome5 name={props.icon} size={48} />}
        {!!props.title && <RightPartText>{props.title}</RightPartText>}
      </RightPart>
      <LeftPart></LeftPart>
    </CardContainer>
  );
};

export default Card;
