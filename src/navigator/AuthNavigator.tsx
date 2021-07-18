import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {LoginScreen} from '../screen/LoginScreen';
import {NewUserScreen} from '../screen/NewUserScreen';
import {Navigator} from './Navigator';

const Stack = createStackNavigator();

export const AuthNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: 'white',
        },
      }}>
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="NewUserScreen" component={NewUserScreen} />
      <Stack.Screen name="Navigator" component={Navigator} />
    </Stack.Navigator>
  );
};
