import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import LottieView from 'lottie-react-native';

export const Loading = () => {
  return (
    <View style={styles.loadingContainer}>
      <LottieView source={require('../assets/loading.json')} loop autoPlay />
      <Text
        style={{
          marginTop: 120,
          fontSize: 20,
        }}>
        Loading....
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
