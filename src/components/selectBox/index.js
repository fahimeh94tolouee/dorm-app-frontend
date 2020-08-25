import React, {useRef, useState} from 'react';
import {
  ItemContainer,
  ItemsContainer,
  ItemText,
  SelectBoxClosedContainer,
  SelectBoxContainer,
  SelectBoxOpenContainer,
  SelectBoxOpenContainerInner,
  SelectBoxOpenContainerModal,
  SelectedItemText,
} from './style';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const SelectBox = (props) => {
  const [status, setStatus] = useState(false);
  const component = useRef(null);
  const selectItem = (item) => {
    props.onChange(item);
    setStatus(!status);
  };
  return (
    <SelectBoxContainer
      ref={component}
      activeOpacity={1}
      onPress={() => {
        setStatus(!status);
      }}>
      <SelectBoxClosedContainer>
        <SelectedItemText>
          {(props.value && props.value.value) ||
            props.placeholder ||
            'انتخاب کنید'}
        </SelectedItemText>
        <MaterialIcons name="touch-app" size={24} />
      </SelectBoxClosedContainer>
      <SelectBoxOpenContainer show={status}>
        <SelectBoxOpenContainerModal visible={status} transparent={true}>
          <SelectBoxOpenContainerInner
            show={status}
            onPress={() => {
              setStatus(!status);
            }}>
            <ItemsContainer>
              <ItemContainer>
                <ItemText title={true}>{props.label}</ItemText>
              </ItemContainer>
              {props.options.map((item, i) => {
                return (
                  <ItemContainer key={i} onPress={() => selectItem(item)}>
                    <ItemText>{item.value}</ItemText>
                  </ItemContainer>
                );
              })}
            </ItemsContainer>
          </SelectBoxOpenContainerInner>
        </SelectBoxOpenContainerModal>
      </SelectBoxOpenContainer>
    </SelectBoxContainer>
  );
};

export default SelectBox;
