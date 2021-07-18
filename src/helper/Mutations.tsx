import {gql} from '@apollo/client';

export const OBTENER_EMPRESAS = gql`
  mutation nuevoUsuario($input: InputUsuario) {
    nuevoUsuario(input: $input) {
      id
      nombre
      apellido
      email
    }
  }
`;
