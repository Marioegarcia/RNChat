import React, { useContext, useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import LinearGradient from 'react-native-linear-gradient';
import { CloseIcon, IconButton, Stack,Alert as Alerta } from 'native-base';

import { 
    KeyboardAvoidingView,View,   
    StyleSheet, 
    Alert, 
    Platform, 
    ScrollView,
     TouchableWithoutFeedback, 
    Keyboard 
} from 'react-native';


import validator from 'validator';
import { LoginContext } from '../../context/LoginContext';
import { useForm } from '../../hooks/useForm';
import { HeaderTitle } from '../HeaderTitle/HeaderTitle';
import { InputForm } from '../InpuForm/InputForm';
import { TextLink } from '../TextLink/TextLink';
import { BotonGradiente } from '../BotonGradiente/BotonGradiente';
import { api } from '../../api/login';
import { AuthContext } from '../../context/auth/AuthContext';

export const EmailLogin = () => {
    
    const {signIn,errorMessage,removeError} = useContext(AuthContext);
    const {correo,password,onChange} = useForm({
        correo:'',
        password:''

    });
    const [isEmpity, setIsEmpity] = useState(false)
  

    const navigator = useNavigation();
  
 
    useEffect(() => {
        if ( errorMessage.length === 0 ) return;
        Alert.alert('Login incorrecto',errorMessage, [{text:'Ok',onPress: removeError}])
       
    }, [errorMessage]);
   

    const onSubmit = async()=> {
        
        
        
        if (validator.isEmail(correo)) {
            if (!validator.isEmpty(password)) {
                
                try {
                    signIn({correo,password})
                } catch (error) {
                    console.log(error);
                    
                }
            }else{
                setIsEmpity(true);
            }
            
            
        }else{
            setIsEmpity(true);
        }
        
        
        
        
    }

    return (
        <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
        >
            <ScrollView>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss} >
                   
                        <View style={styles.login} >
                           
                            <View style={styles.titulo} > 
                                <HeaderTitle 
                                title='Bienvenido' 
                                subtitle='Ingresa tu nombre'
                                />
                            
                                
                            </View>
                            {
                                isEmpity && (
                                    <Alerta 
                                    status={'error'} 
                                    w="100%"
                                    action={
                                        <IconButton
                                        icon={<CloseIcon size="xs" />}
                                        onPress={() => setIsEmpity(false)}
                                        />
                                    }
                                    >
                                        <Alerta.Icon />
                                        <Alerta.Title
                                        flexShrink={1}
                                        >{`Verifica tus datos`}</Alerta.Title>
                                    </Alerta>
                                )
                            }
                            
                
                            <View style={styles.input} >
                                <Stack space={2} w="100%" >

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

                                        {/* <TouchableOpacity
                                        onPress={onSubmit}
                                        activeOpacity={0.8}
                                        >
                                            <LinearGradient  
                                            start={{x: 0, y: 0}} 
                                            end={{x: 1, y: 0}} 
                                            style={styles.btn} 
                                            colors={['#FF7074','#FF7074', '#FF7074' ]}
                                            >
                                            
                                                <Text style={styles.btnText} >Iniciar sesión</Text>
                                            
                                            </LinearGradient>
                                        </TouchableOpacity> */}
                                  

                                    
                                        
                                  
                                    
                                </Stack>


                                <View style={styles.register}>
                                    <TextLink 
                                    texto="¿No tienes una cuenta? Registrate"
                                    nav={() => navigator.navigate('RegisterScreen')}
                                    />
                                    
                                </View>
                                
                            </View>
                            <View style={{ height:30 }} />
                        </View>
                    
                   
                </TouchableWithoutFeedback>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        
    },
    login:{
       marginHorizontal:20,
       
    },
    titulo:{
        justifyContent:'center',
        alignItems:'center',
    },
    subText:{
        fontSize: 20
    },
    input:{
        marginVertical:15
    },
    btn:{
        alignItems:'center',
        padding:15,
        borderRadius:20,
    },
    btnText:{
        fontSize:20,
        fontWeight: 'bold',
        color:'white'
    },
    register:{
        marginTop:30,
        alignItems:'center'
    }

})


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