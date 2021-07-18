import React from 'react';
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {Background} from '../components/Background';
import {HeaderTitle} from '../components/HeaderTitle';
import {Logo} from '../components/Logo';
import {CustomInput} from '../components/CustomInput';
import {CustomButton} from '../components/CustomButton';
import {StackScreenProps} from '@react-navigation/stack';

interface Props extends StackScreenProps<any, any> {}

export const LoginScreen = ({navigation}: Props) => {
  return (
    <>
      <Background />
      <ScrollView>
        <Logo
          style={{
            marginTop: 60,
            alignItems: 'center',
          }}
        />
        <HeaderTitle title="RestFood" />

        <View style={{marginVertical: 20, marginHorizontal: 20}}>
          <View style={{marginVertical: 10}}>
            <Text style={styles.labelInput}>Correo:</Text>
            <CustomInput
              placeholder="Ingrese su Correo"
              onChange={() => {}}
              type="email-address"
            />
          </View>
          <View style={{marginVertical: 10}}>
            <Text style={styles.labelInput}>Contraseña:</Text>
            <TextInput
              style={{
                ...styles.inputStyle,
              }}
              placeholder="Su contraseña"
              placeholderTextColor="white"
              secureTextEntry
              autoCapitalize="none"
              keyboardType="default"
              keyboardAppearance="dark"
            />
          </View>
          <View
            style={{
              alignItems: 'center',
            }}>
            <CustomButton
              iconName="log-in-outline"
              title="Ingresar"
              onPress={() => {}}
            />
            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.button}
              onPress={() => navigation.replace('NewUserScreen')}>
              <Text style={styles.textButton}>Crear Cuenta</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  labelInput: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  button: {
    marginVertical: 10,
    marginHorizontal: 20,
    paddingVertical: 10,
    paddingHorizontal: 5,
  },
  textButton: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  inputStyle: {
    borderWidth: 1,
    borderColor: 'white',
    height: 50,
    paddingHorizontal: 10,
    borderRadius: 10,
    marginVertical: 10,
    color: 'white',
  },
});
