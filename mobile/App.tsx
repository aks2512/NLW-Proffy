import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { AppLoading } from 'expo';
import AuthContext from './src/contexts/auth';

import { useFonts, Archivo_400Regular, Archivo_700Bold } from '@expo-google-fonts/archivo';
import { Poppins_400Regular, Poppins_600SemiBold } from '@expo-google-fonts/poppins';

import Routes from './src/routes';
import { NavigationContainer } from '@react-navigation/native';

const App: React.FC = () => {
  let [fontsLoaded] = useFonts({
    Archivo_400Regular,
    Archivo_700Bold,
    Poppins_400Regular,
    Poppins_600SemiBold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <NavigationContainer>
        <AuthContext.Provider value={{signed: false}}>
          <Routes />
          <StatusBar style="light" />
        </AuthContext.Provider>
      </NavigationContainer>
    );
  };
};

export default App;
