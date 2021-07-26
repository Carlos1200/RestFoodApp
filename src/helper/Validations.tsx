import * as yup from 'yup';

export const validationNewUser = yup.object().shape({
  nombre: yup.string().required('Ingresar un nombre'),
  apellido: yup.string().required('Ingresar un apellido'),
  email: yup
    .string()
    .email('Ingresa un email válido')
    .required('Ingresa un email'),
  password: yup
    .string()
    .required('Se requiere contraseña')
    .min(6, 'Su contraseña debe tener 6 caracteres como minimo'),
  rePassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Las contraseñas deben ser iguales'),
});

export const validarLogin = yup.object().shape({
  email: yup
    .string()
    .email('Ingresa un email válido')
    .required('Ingresa un email'),
  password: yup.string().required('Se requiere contraseña'),
});

export const validationNuevaSucursal = yup.object().shape({
  nombre: yup.string().required('Ingresar un nombre de la sucursal'),
  tipo: yup.string().required('Selecciona un tipo de sucursal').nullable(),
  dias: yup
    .array()
    .min(1, 'Selecciona como mínimo 1 día laboral')
    .required('Selecciona un día laboral ')
    .nullable(),
  ubicacion: yup.object().shape({
    latitude: yup
      .number()
      .test('Ubica tu sucursal en el mapa', number => number !== 0),
  }),
});
