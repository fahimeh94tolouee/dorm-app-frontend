import React from 'react';
import {
  CardContainer,
  RightPart,
  RightPartText,
  LeftPart,
  LeftPartText,
  LeftPartBody,
} from './style';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
const Card = (props) => {
  return (
    <CardContainer>
      <RightPart colorId={props.colorId % 4}>
        {!!props.icon && <FontAwesome5 name={props.icon} size={48} />}
        {!!props.title && (
          <RightPartText colorId={props.colorId % 4}>
            {props.title}
          </RightPartText>
        )}
      </RightPart>
      <LeftPart>
        {!!props.description && (
          <LeftPartText>{props.description}</LeftPartText>
        )}
        <LeftPartBody>{props.children}</LeftPartBody>
      </LeftPart>
    </CardContainer>
  );
};

export default Card;
