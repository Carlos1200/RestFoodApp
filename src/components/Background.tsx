import React, {useContext} from 'react';
import {View} from 'react-native';
import {ThemeContext} from '../context/theme/ThemeContext';

export const Background = () => {
  const {
    theme: {
      colors: {primary},
    },
  } = useContext(ThemeContext);
  return (
    <View
      style={{
        backgroundColor: primary,
        position: 'absolute',
        width: 1000,
        height: 1000,
      }}
    />
  );
};
