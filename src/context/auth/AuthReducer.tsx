import {UsuarioToken} from '../../interfaces/app-interfaces';

type AuthAction =
  | {type: 'login'; payload: UsuarioToken}
  | {type: 'notAuthenticated'}
  | {type: 'logOut'};

export interface AuthState {
  status: 'checking' | 'authenticated' | 'not-authenticated';
  id: string | null;
  nombre: string | null;
  apellido: string | null;
  email: string | null;
  token?: string | null;
  photo?: string | null;
  google?: boolean;
}

export const AuthReducer = (
  state: AuthState,
  action: AuthAction,
): AuthState => {
  switch (action.type) {
    case 'login':
      const {id, nombre, apellido, email, photo, google} =
        action.payload.usuario;
      return {
        ...state,
        id,
        nombre,
        apellido,
        email,
        token: action.payload.token,
        photo,
        google,
        status: 'authenticated',
      };
    case 'notAuthenticated':
    case 'logOut':
      return {
        ...state,
        status: 'not-authenticated',
        token: null,
        id: null,
        nombre: null,
        apellido: null,
        email: null,
        photo: null,
      };
    default:
      return state;
  }
};
