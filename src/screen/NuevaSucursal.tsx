import React, {useContext} from 'react';
import {Text, View, TextInput, StyleSheet} from 'react-native';
import {CustomInput} from '../components/CustomInput';
import {HeaderTitle} from '../components/HeaderTitle';
import {ThemeContext} from '../context/theme/ThemeContext';
import {useForm} from '../hooks/useForm';

export const NuevaSucursal = () => {
  const {form, onChange} = useForm({
    name: '',
    email: '',
    phone: '',
    isSubscribed: false,
  });

  const {
    theme: {colors},
  } = useContext(ThemeContext);
  return (
    <View style={{flex: 1, marginHorizontal: 20}}>
      <HeaderTitle title="Nueva Sucursal" style={{marginTop: 30}} />
      <View style={styles.formContainer}>
        <View style={styles.inputContainer}>
          <Text style={{...styles.text, color: colors.text}}>Nombre</Text>
          <CustomInput
            placeholder="Nombre Sucursal"
            onChange={value => onChange(value, 'name')}
          />
          <Text style={{...styles.text, color: colors.text}}>Nombre</Text>
          <CustomInput
            placeholder="Nombre Sucursal"
            onChange={value => onChange(value, 'name')}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    marginVertical: 20,
  },
  inputContainer: {
    marginVertical: 20,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
