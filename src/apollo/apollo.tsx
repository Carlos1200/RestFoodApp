import {ApolloClient, createHttpLink, InMemoryCache} from '@apollo/client';
import fetch from 'node-fetch';
import {setContext} from '@apollo/client/link/context';
import AsyncStorage from '@react-native-async-storage/async-storage';

const httpLink = createHttpLink({
  uri: 'http://192.168.0.112:4000/',
  //   fetch,
});

const authLink = setContext(async (_, {headers}) => {
  //Leer storage almacenado
  const token = await AsyncStorage.getItem('token');

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  connectToDevTools: true,
  cache: new InMemoryCache(),
  link: authLink.concat(httpLink),
});

export default client;
