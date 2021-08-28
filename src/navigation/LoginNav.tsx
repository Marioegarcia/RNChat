import React, { useContext } from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen } from '../screens/LoginScreen';
import { RegisterScreen } from '../screens/RegisterScreen';
import { ThemeContext } from '../context/theme/ThemeContext';
import { EmailLogin } from '../components/Login/EmailLogin';



const Stack = createStackNavigator();

export const LoginNav = () => {
    const { theme:{colors}} = useContext(ThemeContext);
     
    return (
   
    
    <Stack.Navigator
    screenOptions={{
        headerShown: false,
        cardStyle:{
            backgroundColor:colors.background,
            
        }
    }}
    >
      <Stack.Screen name="LoginScreen"  component={ LoginScreen } />
      <Stack.Screen name="EmailLogin"  component={ EmailLogin } />
      <Stack.Screen name="RegisterScreen"  component={ RegisterScreen } />
    </Stack.Navigator>

    
    )
}