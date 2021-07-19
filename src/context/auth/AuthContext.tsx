import React, {createContext, useReducer} from 'react';
import {AuthReducer, AuthState} from './AuthReducer';
import {Usuario} from '../../interfaces/app-interfaces';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

type AuthContextProps = {
  state: AuthState;
  LogIn: (values: Usuario) => Promise<void>;
  GoogleLogIn: (values: Usuario) => Promise<void>;
};

export const AuthContext = createContext({} as AuthContextProps);

const initialValues: AuthState = {
  id: '',
  nombre: '',
  apellido: '',
  email: '',
  token: '',
  photo: '',
  google: false,
};

export const AuthProvider = ({children}: any) => {
  const [state, dispatch] = useReducer(AuthReducer, initialValues);

  const LogIn = async ({id, nombre, apellido, email, token}: Usuario) => {
    dispatch({
      type: 'login',
      payload: {id, nombre, apellido, email, token},
    });
  };
  const GoogleLogIn = async ({
    id,
    nombre,
    apellido,
    email,
    token,
    photo,
  }: Usuario) => {
    try {
      dispatch({
        type: 'login',
        payload: {
          id,
          nombre,
          apellido,
          email,
          photo,
          token,
          google: true,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        state,
        LogIn,
        GoogleLogIn,
      }}>
      {children}
    </AuthContext.Provider>
  );
};
