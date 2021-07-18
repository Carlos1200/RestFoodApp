import React, {useContext} from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {ThemeContext} from '../context/theme/ThemeContext';

interface Props {
  iconName: string;
  title: string;
  onPress: () => void;
}

export const CustomButton = ({iconName, title, onPress}: Props) => {
  const {theme} = useContext(ThemeContext);
  const {
    colors: {primary, text},
    activeColor,
  } = theme;
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.8}
      style={{...styles.button, backgroundColor: activeColor}}>
      <Icon name={iconName} color={text} size={30} />
      <Text style={{...styles.buttonText, color: text}}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    width: '90%',
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 50,
    marginTop: 25,
  },
  buttonText: {
    fontSize: 20,
    marginLeft: 20,
  },
});
