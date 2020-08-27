import React from 'react';
import {
  CardContainer,
  RightPart,
  RightPartText,
  LeftPart,
  LeftPartText,
  LeftPartBody,
  ICON_COLORS,
} from './style';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
const Card = (props) => {
  const colorId = props.colorId ? props.colorId % 4 : undefined;
  return (
    <CardContainer onPress={props.onPress}>
      <RightPart colorId={colorId} icon={!!props.icon}>
        {!!props.icon && (
          <FontAwesome5
            name={props.icon.name}
            size={48}
            color={ICON_COLORS[props.icon.color]}
          />
        )}
        {!!props.title && (
          <RightPartText colorId={colorId}>{props.title}</RightPartText>
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
