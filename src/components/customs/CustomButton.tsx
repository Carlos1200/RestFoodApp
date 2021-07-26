import React, {useContext} from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useIsFocused} from '@react-navigation/native';
import {ThemeContext} from '../../context/theme/ThemeContext';

interface Props {
  iconName: string;
  title: string;
  bgColor?: boolean;
  onPress: () => void;
}

export const CustomButton = ({
  iconName,
  title,
  onPress,
  bgColor = false,
}: Props) => {
  const {theme} = useContext(ThemeContext);
  const {
    colors: {primary, text},
    activeColor,
  } = theme;

  const isFocused = useIsFocused();
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.8}
      style={{
        ...styles.button,
        backgroundColor: bgColor ? activeColor : primary,
      }}>
      <Icon name={iconName} color={text} size={30} />
      <Text style={{...styles.buttonText, color: text}}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignSelf: 'center',
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
