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
import {NuevoUsuario} from '../interfaces/app-interfaces';
import {OBTENER_EMPRESAS} from '../helper/Mutations';
import {CustomAlert} from '../components/CustomAlert';

interface Props extends StackScreenProps<any, any> {}

export const NewUserScreen = ({navigation}: Props) => {
  const {NewUser} = useContext(AuthContext);
  const [nuevoUsuario] = useMutation(OBTENER_EMPRESAS);
  const [show, setShow] = useState(false);

  const createUser = async (value: NuevoUsuario) => {
    const {nombre, apellido, email, password} = value;
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

    NewUser(data.nuevoUsuario);
    setShow(true);
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
        {({values, handleChange, errors, handleSubmit}) => (
          <>
            <Background />
            <ScrollView>
              <HeaderTitle title="RestFood" style={{marginTop: 60}} />

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
                <View style={{marginVertical: 10}}>
                  <Text style={styles.labelInput}>Correo:</Text>
                  <CustomInput
                    placeholder="Ingrese su Correo"
                    type="email-address"
                    onChange={handleChange('email')}
                    value={values.email}
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
                    onChangeText={handleChange('password')}
                    value={values.password}
                  />
                </View>
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
      <CustomAlert
        title="Exito"
        message="Usuario Creado"
        show={show}
        setShow={() => {
          setShow(false);
          navigation.replace('LoginScreen');
        }}
      />
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
