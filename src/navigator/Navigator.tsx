import React, {useContext} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {PermissionScreen} from '../screen/PermissionScreen';
import {PermissionsContext} from '../context/permission/PermissionsContext';
import {Loading} from '../components/Loading';
import {MyDrawer} from './Drawer';
import {ThemeContext} from '../context/theme/ThemeContext';

const Stack = createStackNavigator();

export const Navigator = () => {
  const {permissions} = useContext(PermissionsContext);
  const {
    theme: {
      colors: {background},
    },
  } = useContext(ThemeContext);

  if (permissions.locationStatus === 'unavailable') {
    return <Loading />;
  }

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: background,
        },
      }}>
      {permissions.locationStatus !== 'granted' ? (
        <Stack.Screen name="PermissionScreen" component={PermissionScreen} />
      ) : (
        <Stack.Screen name="HomeScreen" component={MyDrawer} />
      )}
    </Stack.Navigator>
  );
};
