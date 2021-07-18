import React, {useContext} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {LoginScreen} from '../screen/LoginScreen';
import {NewUserScreen} from '../screen/NewUserScreen';
import {Navigator} from './Navigator';
import {AuthContext} from '../context/auth/AuthContext';

const Stack = createStackNavigator();

export const AuthNavigator = () => {
  const {
    state: {token},
  } = useContext(AuthContext);
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: 'white',
        },
      }}>
      {token ? (
        <Stack.Screen name="Navigator" component={Navigator} />
      ) : (
        <>
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="NewUserScreen" component={NewUserScreen} />
        </>
      )}
    </Stack.Navigator>
  );
};
