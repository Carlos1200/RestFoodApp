import React, {useContext} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen} from '../screen/HomeScreen';
import {PermissionScreen} from '../screen/PermissionScreen';
import {PermissionsContext} from '../context/permission/PermissionsContext';
import {Loading} from '../components/Loading';

const Stack = createStackNavigator();

export const Navigator = () => {
  const {permissions} = useContext(PermissionsContext);

  if (permissions.locationStatus === 'unavailable') {
    return <Loading />;
  }

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: 'white',
        },
      }}>
      {permissions.locationStatus !== 'granted' ? (
        <Stack.Screen name="PermissionScreen" component={PermissionScreen} />
      ) : (
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
      )}
    </Stack.Navigator>
  );
};
