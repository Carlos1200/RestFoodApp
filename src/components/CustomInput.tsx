import React, {useContext} from 'react';
import {StyleSheet, TextInput} from 'react-native';
import {ThemeContext} from '../context/theme/ThemeContext';

interface Props {
  placeholder: string;
  onChange: <K extends Object>(value: K) => void;
}

export const CustomInput = ({onChange, placeholder}: Props) => {
  const {
    theme: {colors},
  } = useContext(ThemeContext);
  return (
    <TextInput
      style={{
        ...styles.inputStyle,
        borderColor: colors.border,
        color: colors.text,
      }}
      placeholder={placeholder}
      placeholderTextColor={colors.text}
      autoCorrect
      autoCapitalize="words"
      onChangeText={onChange}
      keyboardType="email-address"
      keyboardAppearance="dark"
    />
  );
};

const styles = StyleSheet.create({
  inputStyle: {
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.3)',
    height: 50,
    paddingHorizontal: 10,
    borderRadius: 10,
    marginVertical: 10,
    color: 'black',
  },
});
