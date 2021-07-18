import {Usuario} from '../../interfaces/app-interfaces';

type AuthAction = {type: 'login'; payload: Usuario};

export interface AuthState {
  id: string;
  nombre: string;
  apellido: string;
  email: string;
  token?: string;
}

export const AuthReducer = (
  state: AuthState,
  action: AuthAction,
): AuthState => {
  switch (action.type) {
    case 'login':
      return {
        ...state,
        id: action.payload.id,
        nombre: action.payload.nombre,
        apellido: action.payload.apellido,
        email: action.payload.email,
        token: action.payload.token,
      };
    default:
      return state;
  }
};
