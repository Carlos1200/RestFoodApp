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
