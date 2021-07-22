import {gql} from '@apollo/client';

export const CREAR_USUARIO = gql`
  mutation nuevoUsuario($input: InputUsuario) {
    nuevoUsuario(input: $input) {
      usuario {
        id
        nombre
        apellido
        email
        google
        photo
      }
      token
    }
  }
`;

export const LOGIN = gql`
  mutation autenticarUsuario($input: InputAutenticarUsuario) {
    autenticarUsuario(input: $input) {
      usuario {
        id
        nombre
        apellido
        email
        google
        photo
      }
      token
    }
  }
`;

export const LOGIN_GOOGLE = gql`
  mutation nuevoUsuarioGoogle($tokenGoogle: String) {
    nuevoUsuarioGoogle(tokenGoogle: $tokenGoogle) {
      usuario {
        id
        nombre
        apellido
        email
        google
        photo
      }
      token
    }
  }
`;
export const VALIDAR_TOKEN = gql`
  mutation validarToken {
    validarToken {
      usuario {
        id
        nombre
        apellido
        email
        google
        photo
      }
      token
    }
  }
`;
