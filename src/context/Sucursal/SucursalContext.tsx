import {createContext} from 'react';

export const SucursalContext = createContext({});

export const SucursalProvider = ({children}: any) => {
  return (
    <SucursalContext.Provider value={{}}>{children}</SucursalContext.Provider>
  );
};
