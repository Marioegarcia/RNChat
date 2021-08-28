import { useNavigation } from '@react-navigation/native';
import { Alert, CloseIcon, IconButton, Input,Stack , Icon} from 'native-base';
import React, { useContext,useState } from 'react'
import { 
    View, 
    Text,  
    StyleSheet, 
    TouchableOpacity, 
    KeyboardAvoidingView, 
    Platform, 
    ScrollView, 
    TouchableWithoutFeedback, 
    Keyboard 
} from 'react-native';

import validator from 'validator';
import { api } from '../api/login';
import { BotonGradiente } from '../components/BotonGradiente/BotonGradiente';
import { HeaderTitle } from '../components/HeaderTitle/HeaderTitle';
import { InputForm } from '../components/InpuForm/InputForm';
import { TextLink } from '../components/TextLink/TextLink';
import { AuthContext } from '../context/auth/AuthContext';

import { LoginContext } from '../context/LoginContext';
import { useForm } from '../hooks/useForm';


export const RegisterScreen = () => {
    const { signUp } = useContext(AuthContext);
    const {onChange,nombre,correo,password,password2} = useForm({
        nombre:'',
        correo:'',
        password:'',
        password2: ''
    });
    const [isEmpity, setIsEmpity] = useState(false)
   
    const navigator = useNavigation();



    const onSubmit = async ()=> {
        if (validator.isEmail(correo)) {
            if (!validator.isEmpty(password)) {
               
                try {
                    signUp({
                        nombre,
                        correo,
                        password
                    })
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
                                title='Registrate'
                                subtitle='Ingresa tu nombre'
                                />
                            </View>
                            
                            {
                                isEmpity && (
                                    <Alert 
                                    status={'error'} 
                                    w="100%"
                                    action={
                                        <IconButton
                                        icon={<CloseIcon size="xs" />}
                                        onPress={() => setIsEmpity(false)}
                                        />
                                    }
                                    >
                                        <Alert.Icon />
                                        <Alert.Title
                                        flexShrink={1}
                                        >{`Rellena correctamente todos los campos`}</Alert.Title>
                                    </Alert>
                                )
                            }
                
                            <View style={styles.input} >
                                <Stack space={2} w="100%" >
                                    
                                    <InputForm 
                                    onChangeText={(value)=> onChange(value, 'nombre')} 
                                    name='person'
                                    placeholder="Nombre" 
                                    type="text"  
                                    />
                                    <InputForm 
                                    onChangeText={(value)=> onChange(value, 'correo')} 
                                    name='mail'
                                    placeholder="Email" 
                                    kbType='email-address'
                                    type="text"  
                                    />

                                    <InputForm 
                                    onChangeText={(value)=> onChange(value, 'password')} 
                                    name='key'
                                    placeholder="Password" 
                                    type="password"  
                                    />

                                    <InputForm 
                                    onChangeText={(value)=> onChange(value, 'password2')} 
                                    name='key'
                                    placeholder="Repeat Password" 
                                    type="password"  
                                    />

                                    <BotonGradiente
                                    text='Iniciar sesion'
                                    nav={onSubmit}
                                    />
                                    
                                </Stack>
                                <View style={styles.register}>
                                    
                                    <TextLink 
                                    texto="¿Ya tienes una cuenta? Inicia sesion?"
                                    nav={() => navigator.navigate('EmailLogin')}
                                    />
                                </View>
                                
                            </View>
                            

                          

                            

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
    text:{
        fontSize: 30
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
        // backgroundColor: '#00DFC7',
    
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



