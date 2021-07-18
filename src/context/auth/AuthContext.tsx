import React, {createContext, useReducer} from 'react';
import {AuthReducer, AuthState} from './AuthReducer';
import {Usuario} from '../../interfaces/app-interfaces';

type AuthContextProps = {
  state: AuthState;
  LogIn: (values: Usuario) => Promise<void>;
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

  const LogIn = async ({id, nombre, apellido, email, token}: Usuario) => {
    dispatch({
      type: 'login',
      payload: {id, nombre, apellido, email, token},
    });
  };

  return (
    <AuthContext.Provider
      value={{
        state,
        LogIn,
      }}>
      {children}
    </AuthContext.Provider>
  );
};
