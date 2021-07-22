import React, {useContext, useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {Formik} from 'formik';
import {useMutation} from '@apollo/client';
import {Background} from '../components/Background';
import {CustomButton} from '../components/CustomButton';
import {CustomInput} from '../components/CustomInput';
import {HeaderTitle} from '../components/HeaderTitle';
import {validationNewUser} from '../helper/Validations';
import {AuthContext} from '../context/auth/AuthContext';
import {NewUsuario} from '../interfaces/app-interfaces';
import {CREAR_USUARIO} from '../helper/Mutations';

interface Props extends StackScreenProps<any, any> {}

export const NewUserScreen = ({navigation}: Props) => {
  const {LogIn} = useContext(AuthContext);
  const [nuevoUsuario] = useMutation(CREAR_USUARIO);
  const [error, setError] = useState();

  const createUser = async (value: NewUsuario) => {
    const {nombre, apellido, email, password} = value;
    try {
      const {data} = await nuevoUsuario({
        variables: {
          input: {
            nombre,
            apellido,
            email,
            password,
          },
        },
      });
      LogIn({
        usuario: data.nuevoUsuario.usuario,
        token: data.nuevoUsuario.token,
      });
    } catch (error) {
      setError(error.message);
      setTimeout(() => {
        setError(undefined);
      }, 3000);
    }
  };
  return (
    <>
      <Formik
        initialValues={{
          nombre: '',
          apellido: '',
          email: '',
          password: '',
          rePassword: '',
        }}
        onSubmit={values => createUser(values)}
        validationSchema={validationNewUser}>
        {({values, handleChange, errors, handleSubmit, touched}) => (
          <>
            <Background />
            <ScrollView>
              <HeaderTitle title="RestFood" style={{marginTop: 60}} />

              {error && (
                <Text
                  style={{
                    ...styles.errorText,
                    fontSize: 18,
                    borderLeftWidth: 0,
                  }}>
                  {error}
                </Text>
              )}

              <View style={{marginVertical: 20, marginHorizontal: 20}}>
                <View style={{marginVertical: 10}}>
                  <Text style={styles.labelInput}>Nombre:</Text>
                  <CustomInput
                    placeholder="Ingrese su Nombre"
                    type="default"
                    capitalize="words"
                    onChange={handleChange('nombre')}
                    value={values.nombre}
                  />
                </View>
                {touched.nombre && errors.nombre && (
                  <Text style={styles.errorText}>{errors.nombre}</Text>
                )}
                <View style={{marginVertical: 10}}>
                  <Text style={styles.labelInput}>Apellido:</Text>
                  <CustomInput
                    placeholder="Ingrese su Apellido"
                    type="default"
                    capitalize="words"
                    onChange={handleChange('apellido')}
                    value={values.apellido}
                  />
                </View>
                {touched.apellido && errors.apellido && (
                  <Text style={styles.errorText}>{errors.apellido}</Text>
                )}
                <View style={{marginVertical: 10}}>
                  <Text style={styles.labelInput}>Correo:</Text>
                  <CustomInput
                    placeholder="Ingrese su Correo"
                    type="email-address"
                    onChange={handleChange('email')}
                    value={values.email}
                  />
                </View>
                {touched.email && errors.email && (
                  <Text style={styles.errorText}>{errors.email}</Text>
                )}
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
                    onChangeText={handleChange('password')}
                    value={values.password}
                  />
                </View>
                {touched.password && errors.password && (
                  <Text style={styles.errorText}>{errors.password}</Text>
                )}
                <View style={{marginVertical: 10}}>
                  <Text style={styles.labelInput}>Repetir Contraseña:</Text>
                  <TextInput
                    style={{
                      ...styles.inputStyle,
                    }}
                    placeholder="Repetir contraseña"
                    placeholderTextColor="white"
                    secureTextEntry
                    autoCapitalize="none"
                    keyboardType="default"
                    keyboardAppearance="dark"
                    onChangeText={handleChange('rePassword')}
                    value={values.rePassword}
                  />
                </View>
                {touched.rePassword && errors.rePassword && (
                  <Text style={styles.errorText}>{errors.rePassword}</Text>
                )}
                <View
                  style={{
                    alignItems: 'center',
                  }}>
                  <CustomButton
                    iconName="person-add-outline"
                    title="Registrar"
                    onPress={handleSubmit}
                  />
                  <TouchableOpacity
                    activeOpacity={0.8}
                    style={styles.button}
                    onPress={() => navigation.replace('LoginScreen')}>
                    <Text style={styles.textButton}>Volver</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </ScrollView>
          </>
        )}
      </Formik>
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
  errorText: {
    fontSize: 12,
    color: '#FF0D10',
    borderLeftWidth: 2,
    borderLeftColor: '#FF0D10',
    paddingLeft: 8,
  },
});
