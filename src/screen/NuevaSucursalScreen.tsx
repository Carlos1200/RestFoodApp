import React, {useState} from 'react';
import {Formik} from 'formik';
import {useMutation} from '@apollo/client';
import {validationNuevaSucursal} from '../helper/Validations';
import {FormValues, NuevaSucursal} from '../components/NuevaSucursal';
import {NUEVA_EMPRESA} from '../helper/Mutations';
import {DrawerScreenProps} from '@react-navigation/drawer';
import {OBTENER_EMPRESAS} from '../helper/Querys';
import {ReactNativeFile} from 'apollo-upload-client';

interface Props extends DrawerScreenProps<any, any> {}

export const NuevaSucursalScreen = ({navigation}: Props) => {
  const [nuevaEmpresa] = useMutation(NUEVA_EMPRESA, {
    update(cache) {
      const {obtenerEmpresas}: any = cache.readQuery({
        query: OBTENER_EMPRESAS,
      });

      cache.writeQuery({
        query: OBTENER_EMPRESAS,
        data: {
          obtenerEmpresas: [...obtenerEmpresas, nuevaEmpresa],
        },
      });
    },
  });
  const [error, setError] = useState(null);

  const crearSucursal = async (valores: FormValues) => {
    const {
      nombre,
      informacion,
      tipo,
      horaFinal,
      horaInicio,
      dias,
      ubicacion,
      imageData,
    } = valores;

    const picture = new ReactNativeFile({
      uri: imageData.uri,
      type: imageData.type,
      name: imageData.name,
    });

    try {
      await nuevaEmpresa({
        variables: {
          input: {
            nombre,
            informacion,
            tipo,
            horario: {
              diaLaboral: dias,
              horaInicio: horaInicio.getTime(),
              horaFinal: horaFinal.getTime(),
            },
            ubicacion: {
              lat: ubicacion.latitude,
              lon: ubicacion.longitude,
            },
            imagen: picture,
          },
        },
      });
      // navigation.jumpTo('HomeScreen');
    } catch (error) {
      setError(error.message);
      setTimeout(() => {
        setError(null);
      }, 3000);
    }
  };
  return (
    <Formik
      initialValues={{
        nombre: '',
        informacion: '',
        tipo: '',
        dias: [],
        horaInicio: new Date(),
        horaFinal: new Date(),
        ubicacion: {
          latitude: 0,
          longitude: 0,
        },
        imageData: {
          uri: '',
          type: '',
          name: '',
        },
      }}
      validationSchema={validationNuevaSucursal}
      onSubmit={(values, actions) => {
        crearSucursal(values);
        // actions.resetForm();
      }}>
      {({
        values,
        handleChange,
        errors,
        handleSubmit,
        setFieldValue,
        touched,
      }) => (
        <NuevaSucursal
          values={values}
          handleChange={handleChange}
          errors={errors}
          handleSubmit={handleSubmit}
          setFieldValue={setFieldValue}
          touched={touched}
          error={error}
        />
      )}
    </Formik>
  );
};
