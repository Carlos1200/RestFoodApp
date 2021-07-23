import React, {useContext, useState} from 'react';
import {Text, View, StyleSheet, ScrollView} from 'react-native';
import {Formik} from 'formik';
import {CustomDropDownPicker} from '../components/customs/CustomDropDownPicker';
import {CustomInput} from '../components/customs/CustomInput';
import {HeaderTitle} from '../components/HeaderTitle';
import {ThemeContext} from '../context/theme/ThemeContext';
import {DiasEnum, TipoEnum} from '../data/data';
import {validationNuevaSucursal} from '../helper/Validations';

export const NuevaSucursal = () => {
  const {
    theme: {
      colors: {primary, text, background, border},
    },
  } = useContext(ThemeContext);
  const [tipo, setTipo] = useState(null);
  const [itemsTipo, setItemsTipo] = useState(TipoEnum);

  const [dias, setDias] = useState(null);
  const [itemsDias, setItemsDias] = useState(DiasEnum);

  const [OpenTipo, setOpenTipo] = useState(false);
  const [OpenDias, setOpenDias] = useState(false);

  return (
    <Formik
      initialValues={{
        nombre: '',
        informacion: '',
        horaInicio: 0,
        horaFinal: 0,
        lat: 0,
        lon: 0,
      }}
      validationSchema={validationNuevaSucursal}
      onSubmit={() => {}}>
      {({
        values,
        handleChange,
        errors,
        handleSubmit,
        touched,
        setFieldValue,
      }) => (
        <View style={{flex: 1, marginHorizontal: 20}}>
          <View style={{...styles.bgHeader, backgroundColor: primary}}>
            <HeaderTitle title="Nueva Sucursal" style={{marginTop: 30}} />
            <Text style={{...styles.textHeader, color: text}}>
              Ubica tu sucursal para que las personas puedan verte
            </Text>
          </View>
          <View style={styles.formContainer}>
            <View
              style={{
                ...styles.inputContainer,
                position: 'absolute',
                width: '100%',
              }}>
              <Text style={{...styles.text, color: text}}>Nombre</Text>
              <CustomInput
                placeholder="Nombre Sucursal"
                onChange={handleChange('nombre')}
                value={values.nombre}
                type="default"
              />
              <Text style={{...styles.text, color: text}}>
                Información (Opcional)
              </Text>
              <CustomInput
                style={{height: 100, textAlignVertical: 'top'}}
                placeholder="Información Sucursal"
                multiple={true}
                lines={5}
                onChange={handleChange('informacion')}
                value={values.informacion}
                type="default"
              />
              <Text style={{...styles.text, color: text}}>
                Selecciona un Tipo
              </Text>
              <CustomDropDownPicker
                open={OpenTipo}
                setOpen={setOpenTipo}
                value={tipo}
                items={itemsTipo}
                setValue={setTipo}
                setItems={setItemsTipo}
                placeholder="Selecciona un Tipo"
              />
              {OpenTipo && <View style={{height: 120}} />}
              <Text style={{...styles.text, color: text}}>
                Selecciona Los Días Laborales
              </Text>
              <CustomDropDownPicker
                open={OpenDias}
                setOpen={setOpenDias}
                value={dias}
                items={itemsDias}
                setValue={setDias}
                setItems={setItemsDias}
                multiple={true}
                placeholder="Selecciona los Días Laborales"
              />
            </View>
          </View>
        </View>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  bgHeader: {
    paddingBottom: 30,
    borderBottomEndRadius: 50,
    borderBottomStartRadius: 50,
  },
  textHeader: {
    marginTop: 8,
    marginHorizontal: 8,
    alignSelf: 'center',
  },
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
