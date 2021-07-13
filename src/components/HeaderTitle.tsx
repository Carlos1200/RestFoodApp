import React from 'react';
import {View, Text, StyleSheet, ViewStyle, StyleProp} from 'react-native';

interface Props {
  title: string;
  style?: StyleProp<ViewStyle>;
}

export const HeaderTitle = ({title, style = {}}: Props) => {
  return (
    <View style={{...styles.headerContainer, ...(style as any)}}>
      <Text style={styles.headerText}>{title}</Text>
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
    fontSize: 18,
    fontWeight: 'bold',
  },
});
