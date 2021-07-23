import React, {useContext} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {
  DrawerContentComponentProps,
  DrawerContentOptions,
} from '@react-navigation/drawer';
import {ThemeContext} from '../context/theme/ThemeContext';
import {Fab} from './customs/Fab';
import {HeaderTitle} from './HeaderTitle';
import {CustomButton} from './customs/CustomButton';
import {AuthContext} from '../context/auth/AuthContext';

export const MenuInterno = ({
  navigation,
}: DrawerContentComponentProps<DrawerContentOptions>) => {
  const {theme} = useContext(ThemeContext);
  const {
    state: {nombre, apellido, email, photo},
  } = useContext(AuthContext);
  const {
    drawerBG,
    colors: {primary, text},
  } = theme;

  return (
    <View style={{position: 'absolute', width: '100%', height: '100%'}}>
      <View
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          backgroundColor: drawerBG,
        }}
      />
      <View
        style={{
          position: 'absolute',
          width: '90%',
          height: '100%',
          backgroundColor: primary,
        }}
      />
      <View style={{backgroundColor: primary, borderBottomRightRadius: 30}}>
        <Fab
          iconName="menu-outline"
          onPress={() => navigation.toggleDrawer()}
          style={{position: 'absolute', top: 10, left: 12}}
        />
        <HeaderTitle title="RestFood" style={{marginTop: 20}} />
        <View style={styles.imageContainer}>
          {photo ? (
            <Image source={{uri: photo}} style={styles.image} />
          ) : (
            <Image
              source={require('../assets/user.png')}
              style={styles.image}
            />
          )}
          <Text style={{...styles.imageText, color: text}}>
            {nombre + ' '} {apellido}
          </Text>
        </View>
      </View>
      <View
        style={{
          ...styles.drawerContainer,
          ...styles.buttonContainer,
          backgroundColor: drawerBG,
        }}>
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
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 25,
    marginLeft: 15,
    marginBottom: 40,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 100,
  },
  imageText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 7,
    marginBottom: 20,
  },
  buttonContainer: {
    flex: 1,
    alignItems: 'center',
  },
  drawerContainer: {
    flex: 1,
    marginLeft: 20,
    borderTopLeftRadius: 30,
  },
});
