import React, { useContext } from 'react';
import {useNavigation} from '@react-navigation/native';
import {View, Text, TouchableOpacity, StyleSheet, ScrollView, Alert, Platform} from 'react-native';


import { ThemeContext } from '../context/theme/ThemeContext';
import { BotonGradiente } from '../components/BotonGradiente/BotonGradiente';
import { AuthContext } from '../context/auth/AuthContext';
import { useForm } from '../hooks/useForm';
import { InputForm } from '../components/InpuForm/InputForm';
import { SocialButton } from '../components/SocialButton/SocialButton';




export const LoginScreen = () => {
  const {correo,password,onChange} = useForm({
    correo:'',
    password:''

});
  const {signIn,fbLogin,googleLogin} = useContext(AuthContext);
  const {theme: {colors} } = useContext(ThemeContext);
  const navigator = useNavigation();

  const onSubmit = async()=> {
        try {
          signIn({correo,password})
        } catch (error) {
          console.log(error);
        }    
  }

  

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* <Image
        source={require('../assets/rn-social-logo.png')}
        style={styles.logo}
      /> */}
      <Text style={styles.text}>RN Social App</Text>

      <InputForm 
      onChangeText={(value)=> onChange(value, 'correo')} 
      name='mail'
      placeholder="Email" 
      type="text"
      kbType='email-address'  
      />

      <InputForm 
      onChangeText={(value)=> onChange(value, 'password')} 
      name='key'
      placeholder="Password" 
      type="password"  
      />

      <BotonGradiente
      text='Iniciar sesion'
      nav={onSubmit}
      />

      <TouchableOpacity style={styles.forgotButton} onPress={() => {}}>
        <Text style={styles.navButtonText}>Forgot Password?</Text>
      </TouchableOpacity>

  
        <View>
        
        
            <SocialButton
              buttonTitle="Sign In with Facebook"
              btnType="facebook"
              color="#4867aa"
              backgroundColor="#e6eaf4"
              nav={ fbLogin }
            />

            <SocialButton
              buttonTitle="Sign In with Google"
              btnType="google"
              color="#de4d41"
              backgroundColor="#f5e7ea"
              nav={ googleLogin }
            />
        </View>
     

      <TouchableOpacity
        style={styles.forgotButton}
        onPress={() => navigator.navigate('Signup')}>
        <Text style={styles.navButtonText}>
          Don't have an acount? Create here
        </Text>
      </TouchableOpacity>

      
    </ScrollView>
    // <View
    //   style={{
    //     flex: 1,
    //   }}>
    //       <View style={{ alignItems:'center',marginTop:50}} >
    //         <Text>Logo</Text>
    //         <HeaderTitle title='ChatApp' />
            
    //       </View>

    //       <View
    //       style={{
    //         marginTop:20,
    //         marginHorizontal:30,
           
    //       }}
    //       >           
    //           <BotonGradiente text='Inicia sesion con facebook' nav={() => navigator.navigate('RegisterScreen')} />
    //           <BotonGradiente text='Inicia sesion con gmail'
    //           nav={() => navigator.navigate('RegisterScreen')}
    //           />

    //           <View style={{justifyContent:'center',alignItems:'center'}} >
    //               <Text style={{
    //                   fontSize:20,
    //                   color: colors.text
    //               }} >o</Text>
    //           </View>
                  
    //           <BotonGradiente 
    //           text='Inicia sesion con correo' 
    //           nav={() => navigator.navigate('EmailLogin')}
    //           />

    //       </View>
          
      
    // </View>
  );
};



const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    paddingTop: 50
  },
  logo: {
    height: 150,
    width: 150,
    resizeMode: 'cover',
  },
  text: {
    fontFamily: 'Kufam-SemiBoldItalic',
    fontSize: 28,
    marginBottom: 10,
    color: '#051d5f',
  },
  navButton: {
    marginTop: 15,
  },
  forgotButton: {
    marginVertical: 35,
  },
  navButtonText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#2e64e5',
    fontFamily: 'Lato-Regular',
  },
});

// <Input
// onChangeText={(value)=> onChange(value, 'name')}
// placeholder="Nombre"
// color={colors.text}
// _focus={{ borderColor: focus }}
// borderColor={colors.border}
// backgroundColor={bgSecondColor}
// InputLeftElement={
//     <Icono
//     name='mail'
//     size={20}
//     style={{
//         marginLeft:10
//     }}
//     color={focus}
//     />
// }

// />
// <Input
// type="password"
// placeholder="Password"
// color={colors.text}
// _focus={{ borderColor: focus }}
// borderColor={colors.border}
// backgroundColor={bgSecondColor}
// InputLeftElement={
//     <Icono
//     name='key'
//     size={20}
//     style={{
//         marginLeft:10
//     }}
//     color={focus}
//     />
// }
// />
