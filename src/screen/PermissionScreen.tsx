import React, {useContext} from 'react';
import {
  Image,
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Text,
} from 'react-native';
import {HeaderTitle} from '../components/HeaderTitle';
import {PermissionsContext} from '../context/permission/PermissionsContext';

const {width, height} = Dimensions.get('window');

export const PermissionScreen = () => {
  const {askLocationPermission} = useContext(PermissionsContext);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <HeaderTitle
        title="Necesitamos que habilites los permisos de localización para utilizar esta app"
        style={{marginBottom: 50}}
      />
      <Image
        source={require('../assets/ilustracion.png')}
        style={{
          width: width * 0.9,
          height: height * 0.35,
        }}
      />
      <TouchableOpacity
        onPress={askLocationPermission}
        activeOpacity={0.8}
        style={styles.button}>
        <Text style={styles.textButton}>Activar Ubicación</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 400,
    height: 310,
  },
  button: {
    marginTop: 50,
    backgroundColor: '#3F3F77',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  textButton: {
    color: 'white',
    fontSize: 20,
  },
});
