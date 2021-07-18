import 'react-native-gesture-handler';
import React, {useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {ApolloProvider} from '@apollo/client';
import {PermissionsProvider} from './src/context/permission/PermissionsContext';
import {ThemeContext, ThemeProvider} from './src/context/theme/ThemeContext';
import {AuthNavigator} from './src/navigator/AuthNavigator';
import client from './src/apollo/apollo';
import {AuthProvider} from './src/context/auth/AuthContext';

const AppState = ({children}: any) => {
  return (
    <ThemeProvider>
      <ApolloProvider client={client}>
        <AuthProvider>
          <PermissionsProvider>{children}</PermissionsProvider>
        </AuthProvider>
      </ApolloProvider>
    </ThemeProvider>
  );
};

const App = () => {
  const {theme} = useContext(ThemeContext);
  return (
    <NavigationContainer theme={theme}>
      <AppState>
        <AuthNavigator />
      </AppState>
    </NavigationContainer>
  );
};

export default App;
