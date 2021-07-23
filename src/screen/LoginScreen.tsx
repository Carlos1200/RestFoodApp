import React, {useContext, useState} from 'react';
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {Formik} from 'formik';
import {useMutation} from '@apollo/client';
import {Background} from '../components/Background';
import {HeaderTitle} from '../components/HeaderTitle';
import {Logo} from '../components/Logo';
import {CustomInput} from '../components/customs/CustomInput';
import {CustomButton} from '../components/customs/CustomButton';
import {StackScreenProps} from '@react-navigation/stack';
import {validarLogin} from '../helper/Validations';
import {LOGIN, LOGIN_GOOGLE} from '../helper/Mutations';
import {Login} from '../interfaces/app-interfaces';
import {AuthContext} from '../context/auth/AuthContext';
import {
  GoogleSignin,
  GoogleSigninButton,
} from '@react-native-google-signin/google-signin';
GoogleSignin.configure({
  webClientId:
    '52326549780-l25bc8s7tjhtl9012gp84tj1du0f0vhv.apps.googleusercontent.com',
  offlineAccess: true,
});

interface Props extends StackScreenProps<any, any> {}

export const LoginScreen = ({navigation}: Props) => {
  const {LogIn} = useContext(AuthContext);
  const [autenticarUsuario] = useMutation(LOGIN);
  const [nuevoUsuarioGoogle] = useMutation(LOGIN_GOOGLE);
  const [error, setError] = useState();
  const autenticar = async (value: Login) => {
    const {email, password} = value;
    try {
      const {data} = await autenticarUsuario({
        variables: {
          input: {
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

  const autenticarGoogle = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const resp = await GoogleSignin.signIn();
      const {idToken} = resp;

      const {data} = await nuevoUsuarioGoogle({
        variables: {
          tokenGoogle: idToken,
        },
      });

      LogIn({
        usuario: data.nuevoUsuarioGoogle.usuario,
        token: data.nuevoUsuarioGoogle.token,
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
          email: '',
          password: '',
        }}
        validationSchema={validarLogin}
        onSubmit={value => autenticar(value)}>
        {({values, handleChange, errors, handleSubmit, touched}) => (
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
                <View
                  style={{
                    alignItems: 'center',
                  }}>
                  <CustomButton
                    iconName="log-in-outline"
                    title="Ingresar"
                    onPress={handleSubmit}
                  />
                  <TouchableOpacity
                    activeOpacity={0.8}
                    style={styles.button}
                    onPress={() => navigation.replace('NewUserScreen')}>
                    <Text style={styles.textButton}>Crear Cuenta</Text>
                  </TouchableOpacity>

                  <GoogleSigninButton
                    onPress={autenticarGoogle}
                    size={GoogleSigninButton.Size.Standard}
                    color={GoogleSigninButton.Color.Dark}
                  />
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
