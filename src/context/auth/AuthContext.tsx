import React, {createContext, useEffect, useReducer} from 'react';
import {AuthReducer, AuthState} from './AuthReducer';
import {Usuario, UsuarioToken} from '../../interfaces/app-interfaces';
import AsyncStorage from '@react-native-async-storage/async-storage';

type AuthContextProps = {
  state: AuthState;
  LogIn: (values: UsuarioToken) => Promise<void>;
  notAuthenticatedToken: () => void;
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
  status: 'checking',
};

export const AuthProvider = ({children}: any) => {
  const [state, dispatch] = useReducer(AuthReducer, initialValues);

  const LogIn = async ({usuario, token}: UsuarioToken) => {
    await AsyncStorage.setItem('token', token);
    dispatch({
      type: 'login',
      payload: {usuario, token},
    });
  };

  const notAuthenticatedToken = () => {
    dispatch({type: 'notAuthenticated'});
  };

  return (
    <AuthContext.Provider
      value={{
        state,
        LogIn,
        notAuthenticatedToken,
      }}>
      {children}
    </AuthContext.Provider>
  );
};
