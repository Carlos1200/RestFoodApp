import React, {useEffect, useRef} from 'react';
import {View, Animated, Easing, StyleProp, ViewStyle} from 'react-native';

interface Props {
  style?: StyleProp<ViewStyle>;
}

export const Logo = ({style = {}}: Props) => {
  const rotate = useRef(new Animated.Value(0)).current;
  const loopLogo = () => {
    Animated.loop(
      Animated.timing(rotate, {
        toValue: 1,
        duration: 5000,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
    ).start();
  };

  const spin = rotate.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  useEffect(() => {
    loopLogo();
  }, []);

  return (
    <View
      style={{
        ...(style as any),
      }}>
      <Animated.Image
        source={require('../assets/pizza.png')}
        style={{
          width: 150,
          height: 150,
          transform: [{rotate: spin}],
        }}
      />
    </View>
  );
};
