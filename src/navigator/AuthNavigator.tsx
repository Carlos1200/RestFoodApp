import React, {useContext, useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {LoginScreen} from '../screen/LoginScreen';
import {NewUserScreen} from '../screen/NewUserScreen';
import {Navigator} from './Navigator';
import {AuthContext} from '../context/auth/AuthContext';
import {useMutation} from '@apollo/client';
import {VALIDAR_TOKEN} from '../helper/Mutations';
import {Loading} from '../components/Loading';

const Stack = createStackNavigator();

export const AuthNavigator = () => {
  const [validarToken] = useMutation(VALIDAR_TOKEN);
  const {
    state: {status},
    LogIn,
    notAuthenticatedToken,
  } = useContext(AuthContext);
  useEffect(() => {
    tokenVerify();
  }, []);

  const tokenVerify = async () => {
    try {
      const {data} = await validarToken();
      LogIn({
        usuario: data.validarToken.usuario,
        token: data.validarToken.token,
      });
    } catch (error) {
      notAuthenticatedToken();
    }
  };

  if (status === 'checking') {
    return <Loading />;
  }

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: 'white',
        },
      }}>
      {status === 'authenticated' ? (
        <Stack.Screen name="Navigator" component={Navigator} />
      ) : (
        <>
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="NewUserScreen" component={NewUserScreen} />
        </>
      )}
    </Stack.Navigator>
  );
};
