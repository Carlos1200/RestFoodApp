import React, {useContext} from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {HomeScreen} from '../screen/HomeScreen';
import {NuevaSucursalScreen} from '../screen/NuevaSucursalScreen';
import {MenuInterno} from '../components/MenuInterno';
import {ThemeContext} from '../context/theme/ThemeContext';

export type RootDrawerParams = {
  HomeScreen: undefined;
  NuevaSucursal: undefined;
};

const Drawer = createDrawerNavigator<RootDrawerParams>();

export const MyDrawer = () => {
  const {
    theme: {
      colors: {background},
    },
  } = useContext(ThemeContext);
  return (
    <Drawer.Navigator
      sceneContainerStyle={{
        backgroundColor: background,
      }}
      drawerContent={props => <MenuInterno {...props} />}>
      <Drawer.Screen name="HomeScreen" component={HomeScreen} />
      <Drawer.Screen name="NuevaSucursal" component={NuevaSucursalScreen} />
    </Drawer.Navigator>
  );
};
