import React, {useContext} from 'react';
import {View} from 'react-native';
import {Fab} from '../components/customs/Fab';
import {Map} from '../components/Map';
import {DrawerScreenProps} from '@react-navigation/drawer';
import {RootDrawerParams} from '../navigator/Drawer';

interface Props extends DrawerScreenProps<RootDrawerParams, 'HomeScreen'> {}

export const HomeScreen = ({navigation}: Props) => {
  return (
    <View style={{flex: 1}}>
      <Map />
      <Fab
        iconName="menu-outline"
        onPress={() => navigation.toggleDrawer()}
        style={{position: 'absolute', top: 10, left: 12}}
      />
    </View>
  );
};
