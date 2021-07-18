import React, {ChangeEvent, useContext} from 'react';
import {KeyboardTypeOptions, StyleSheet, TextInput} from 'react-native';
import {ThemeContext} from '../context/theme/ThemeContext';

interface Props {
  placeholder: string;
  onChange: (e: string | ChangeEvent<any>) => void;
  type: KeyboardTypeOptions;
  password?: boolean;
  correct?: boolean;
  capitalize?: 'none' | 'words' | 'sentences' | 'characters';
  value: any;
}

export const CustomInput = ({
  onChange,
  placeholder,
  type,
  password = false,
  correct = false,
  capitalize = 'none',
  value,
}: Props) => {
  const {
    theme: {colors},
  } = useContext(ThemeContext);
  return (
    <>
      <TextInput
        style={{
          ...styles.inputStyle,
          borderColor: colors.border,
          color: colors.text,
        }}
        placeholder={placeholder}
        placeholderTextColor={colors.text}
        autoCorrect={correct}
        secureTextEntry={password}
        autoCapitalize={capitalize}
        onChangeText={onChange}
        keyboardType={type}
        keyboardAppearance="dark"
        value={value}
      />
    </>
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
