import React, {useContext} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {
  DrawerContentComponentProps,
  DrawerContentOptions,
} from '@react-navigation/drawer';
import {ThemeContext} from '../context/theme/ThemeContext';
import {Fab} from './Fab';
import {HeaderTitle} from './HeaderTitle';
import {CustomButton} from './CustomButton';

export const MenuInterno = ({
  navigation,
}: DrawerContentComponentProps<DrawerContentOptions>) => {
  const {theme} = useContext(ThemeContext);
  const {drawerBG} = theme;

  return (
    <View style={{flex: 1, backgroundColor: drawerBG}}>
      <Fab
        iconName="menu-outline"
        onPress={() => navigation.toggleDrawer()}
        style={{position: 'absolute', top: 10, left: 12}}
      />
      <HeaderTitle title="RestFood" style={{marginTop: 20}} />
      <View style={styles.imageContainer}>
        <Image source={require('../assets/user.png')} style={styles.image} />
      </View>
      <View style={styles.buttonContainer}>
        <CustomButton
          title="Inicio"
          iconName="home-outline"
          onPress={() => navigation.navigate('HomeScreen')}
        />
        <CustomButton
          title="Nueva Sucursal"
          iconName="add-circle-outline"
          onPress={() => navigation.navigate('NuevaSucursal')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    alignItems: 'center',
    marginTop: 25,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 100,
  },
  buttonContainer: {
    flex: 1,
    marginTop: 25,
    alignItems: 'center',
  },
});
