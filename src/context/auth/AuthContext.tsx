import React, {createContext, useReducer} from 'react';
import {AuthReducer, AuthState} from './AuthReducer';
import {Usuario} from '../../interfaces/app-interfaces';

type AuthContextProps = {
  state: AuthState;
  NewUser: (values: Usuario) => Promise<void>;
};

export const AuthContext = createContext({} as AuthContextProps);

const initialValues: AuthState = {
  id: '',
  nombre: '',
  apellido: '',
  email: '',
  token: '',
};

export const AuthProvider = ({children}: any) => {
  const [state, dispatch] = useReducer(AuthReducer, initialValues);

  const NewUser = async ({id, nombre, apellido, email}: Usuario) => {
    dispatch({
      type: 'new_user',
      payload: {id, nombre, apellido, email},
    });
  };

  return (
    <AuthContext.Provider
      value={{
        state,
        NewUser,
      }}>
      {children}
    </AuthContext.Provider>
  );
};
