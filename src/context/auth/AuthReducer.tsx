import {Usuario} from '../../interfaces/app-interfaces';

type AuthAction = {type: 'new_user'; payload: Usuario} | {type: 'login'};

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
    case 'new_user':
      return {
        ...state,
        id: action.payload.id,
        nombre: action.payload.nombre,
        apellido: action.payload.apellido,
        email: action.payload.email,
      };
    default:
      return state;
  }
};
