import React, {useContext, useEffect, useState} from 'react';
import {Text, View, StyleSheet, ScrollView} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import {FormikProps} from 'formik';
import moment from 'moment';
import {CustomDropDownPicker} from '../components/customs/CustomDropDownPicker';
import {CustomInput} from '../components/customs/CustomInput';
import {HeaderTitle} from '../components/HeaderTitle';
import {ThemeContext} from '../context/theme/ThemeContext';
import {DiasEnum, TipoEnum} from '../data/data';
import {CustomButton} from '../components/customs/CustomButton';
import {Map} from '../components/Map';
import {Marker} from 'react-native-maps';

export interface FormValues {
  nombre: string;
  informacion: string;
  horaInicio: Date;
  tipo: string;
  dias: string[];
  horaFinal: Date;
  ubicacion: {
    latitude: number;
    longitude: number;
  };
}

export const NuevaSucursal = ({
  values,
  handleChange,
  errors,
  handleSubmit,
  setFieldValue,
  touched,
  error,
}: any) =>
  // FormikProps<FormValues>
  {
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
    const [OpenTimeInicial, setOpenTimeInicial] = useState(false);
    const [OpenTimeFinal, setOpenTimeFinal] = useState(false);

    useEffect(() => {
      setFieldValue('dias', dias);
    }, [dias]);
    useEffect(() => {
      setFieldValue('tipo', tipo);
    }, [tipo]);

    return (
      <>
        <ScrollView
          nestedScrollEnabled={true}
          showsVerticalScrollIndicator={false}
          style={{
            ...StyleSheet.absoluteFillObject,
          }}
          stickyHeaderIndices={[0]}>
          <View
            style={{
              ...styles.bgHeader,
              backgroundColor: primary,
              marginHorizontal: 20,
            }}>
            <HeaderTitle title="Nueva Sucursal" style={{marginTop: 30}} />
            <Text style={{...styles.textHeader, color: text}}>
              Ubica tu sucursal para que las personas puedan verte
            </Text>
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
          </View>
          <View style={{flex: 1, marginHorizontal: 20}}>
            <View style={styles.formContainer}>
              <View
                style={{
                  ...styles.inputContainer,
                }}>
                <Text style={{...styles.text, color: text}}>Nombre</Text>
                <CustomInput
                  placeholder="Nombre Sucursal"
                  onChange={handleChange('nombre')}
                  value={values.nombre}
                  type="default"
                />
                {touched.nombre && errors.nombre && (
                  <Text style={styles.errorText}>{errors.nombre}</Text>
                )}
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
                  value={values.tipo}
                  items={itemsTipo}
                  setValue={setTipo}
                  setItems={setItemsTipo}
                  zIndex={0}
                  placeholder="Selecciona un Tipo"
                />
                {OpenTipo && <View style={{height: 120}} />}
                {touched.tipo && errors.tipo && (
                  <Text style={styles.errorText}>{errors.tipo}</Text>
                )}
                <Text style={{...styles.text, color: text}}>
                  Selecciona Los Días Laborales
                </Text>
                <CustomDropDownPicker
                  open={OpenDias}
                  setOpen={setOpenDias}
                  value={values.dias}
                  items={itemsDias}
                  setValue={setDias}
                  setItems={setItemsDias}
                  multiple={true}
                  zIndex={0}
                  placeholder="Selecciona los Días Laborales"
                />
                {OpenDias && <View style={{height: 200}} />}
                {touched.dias && errors.dias && (
                  <Text style={styles.errorText}>{errors.dias}</Text>
                )}
                <Text
                  style={{
                    ...styles.text,
                    color: text,
                    marginBottom: -10,
                    marginTop: 10,
                  }}>
                  Hora de inicio
                </Text>
                <CustomButton
                  title="Seleccionar Hora Inicio"
                  iconName="time-outline"
                  onPress={() => setOpenTimeInicial(true)}
                />
                <Text
                  style={{
                    fontSize: 15,
                    color: text,
                    borderBottomWidth: 1,
                    borderBottomColor: border,
                  }}>
                  {`Hora seleccionada: ${moment(values.horaInicio).format(
                    'LT',
                  )}`}
                </Text>
                {touched.horaInicio && errors.horaInicio && (
                  <Text style={styles.errorText}>{errors.horaInicio}</Text>
                )}
                {OpenTimeInicial && (
                  <DateTimePicker
                    testID="dateTimePicker"
                    value={values.horaInicio}
                    mode="time"
                    is24Hour={false}
                    display="default"
                    onChange={(event: any, selectedDate: any) => {
                      const currentDate = selectedDate || values.horaInicio;
                      setOpenTimeInicial(false);
                      setFieldValue('horaInicio', currentDate);
                    }}
                  />
                )}
                <Text
                  style={{
                    ...styles.text,
                    color: text,
                    marginBottom: -10,
                    marginTop: 10,
                  }}>
                  Hora de Cierre
                </Text>
                <CustomButton
                  title="Seleccionar Hora Final"
                  iconName="time-outline"
                  onPress={() => setOpenTimeFinal(true)}
                />
                <Text
                  style={{
                    fontSize: 15,
                    color: text,
                    borderBottomWidth: 1,
                    borderBottomColor: border,
                  }}>
                  {`Hora seleccionada: ${moment(values.horaFinal).format(
                    'LT',
                  )}`}
                </Text>
                {touched.horaFinal && errors.horaFinal && (
                  <Text style={styles.errorText}>{errors.horaFinal}</Text>
                )}
                {OpenTimeFinal && (
                  <DateTimePicker
                    testID="dateTimePicker"
                    value={values.horaFinal}
                    mode="time"
                    is24Hour={false}
                    display="default"
                    onChange={(event: any, selectedDate: any) => {
                      const currentDate = selectedDate || values.horaFinal;
                      setOpenTimeFinal(false);
                      setFieldValue('horaFinal', currentDate);
                    }}
                  />
                )}
                <Text style={{...styles.text, color: text, marginTop: 15}}>
                  Muestranos tu ubicación en el mapa
                </Text>
                <Text style={{fontSize: 15, color: text, marginBottom: 15}}>
                  Preciona el mapa poner el marcador
                </Text>
                <View style={{height: 350}}>
                  <Map
                    onPress={event =>
                      setFieldValue('ubicacion', event.nativeEvent.coordinate)
                    }
                    markers={[
                      (
                        <Marker
                          image={require('../assets/custom-marker.png')}
                          coordinate={values.ubicacion}
                          title={values.nombre || 'Nombre de la sucursal'}
                          description={
                            values.informacion || 'Información de sucursal'
                          }
                        />
                      ) as any,
                    ]}
                  />
                </View>
                {touched.ubicacion?.latitude && errors.ubicacion?.latitude && (
                  <Text style={styles.errorText}>
                    {errors.ubicacion?.latitude}
                  </Text>
                )}
                <CustomButton
                  title="Crear Sucursal"
                  iconName="add-outline"
                  onPress={handleSubmit}
                />
              </View>
            </View>
          </View>
        </ScrollView>
      </>
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
    flex: 1,
    marginVertical: 10,
  },
  inputContainer: {
    marginVertical: 20,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  errorText: {
    fontSize: 12,
    color: '#FF0D10',
    borderLeftWidth: 2,
    borderLeftColor: '#FF0D10',
    paddingLeft: 8,
    alignSelf: 'center',
  },
});
