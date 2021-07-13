import 'react-native-gesture-handler';
import React, {useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Navigator} from './src/navigator/Navigator';
import {PermissionsProvider} from './src/context/permission/PermissionsContext';
import {ThemeContext, ThemeProvider} from './src/context/theme/ThemeContext';

const AppState = ({children}: any) => {
  return (
    <ThemeProvider>
      <PermissionsProvider>{children}</PermissionsProvider>
    </ThemeProvider>
  );
};

const App = () => {
  const {theme} = useContext(ThemeContext);
  return (
    <NavigationContainer theme={theme}>
      <AppState>
        <Navigator />
      </AppState>
    </NavigationContainer>
  );
};

export default App;
