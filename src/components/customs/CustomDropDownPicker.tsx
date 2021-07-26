import React, {useContext, useState} from 'react';
import DropDownPicker, {
  DropDownPickerProps,
} from 'react-native-dropdown-picker';
import {ThemeContext} from '../../context/theme/ThemeContext';

interface Props extends DropDownPickerProps {}

export const CustomDropDownPicker = ({
  value,
  items,
  setValue,
  placeholder,
  multiple,
  open,
  setOpen,
  zIndex,
}: Props) => {
  const {
    theme: {
      colors: {text, background, border},
    },
  } = useContext(ThemeContext);
  return (
    <DropDownPicker
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      placeholder={placeholder}
      placeholderStyle={{color: text}}
      multiple={multiple}
      listMode="SCROLLVIEW"
      zIndex={zIndex}
      dropDownDirection="BOTTOM"
      style={{
        backgroundColor: background,
        borderColor: border,
        marginVertical: 10,
      }}
      dropDownContainerStyle={{
        backgroundColor: background,
        borderColor: border,
        marginVertical: 10,
      }}
      textStyle={{
        fontSize: 15,
        color: text,
      }}
      showArrowIcon={false}
      showTickIcon={false}
    />
  );
};
