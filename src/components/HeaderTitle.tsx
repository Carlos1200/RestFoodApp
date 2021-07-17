import React, {useContext} from 'react';
import {View, Text, StyleSheet, ViewStyle, StyleProp} from 'react-native';
import {ThemeContext} from '../context/theme/ThemeContext';

interface Props {
  title: string;
  style?: StyleProp<ViewStyle>;
}

export const HeaderTitle = ({title, style = {}}: Props) => {
  const {theme} = useContext(ThemeContext);
  return (
    <View style={{...styles.headerContainer, ...(style as any)}}>
      <Text style={{...styles.headerText, color: theme.colors.text}}>
        {title}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  headerText: {
    fontSize: 25,
    fontWeight: 'bold',
  },
});
