import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { NativeBaseProvider } from 'native-base';


import {  ThemeProvider } from './src/context/theme/ThemeContext';
import { AuthProvider } from './src/context/auth/AuthContext';
import { Home } from './src/screens/Home';


const AppState = ({ children } : any ) => {
  return (
    <AuthProvider>
      <ThemeProvider>
        {children}
      </ThemeProvider>
    </AuthProvider>
  )
}


const App = () => {
  
  
  return (
    <NavigationContainer>
      <AppState>
        <NativeBaseProvider>
          <Home/>
        </NativeBaseProvider>
        
      </AppState>
      

      
    </NavigationContainer>
  )
}

export default App

