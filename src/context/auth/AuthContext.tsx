import React,{ createContext, useEffect, useReducer } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { LoginManager, AccessToken } from 'react-native-fbsdk-next';
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';


import chatApi from "../../api/chatApi";
import { Usuario, LoginResponse, LoginData, RegisterData } from '../../interface/appInterface';
import { authReducer, AuthState } from "./authReducer";




type AuthContextProps = {
    errorMessage: string;
    token: string | null;
    usuario: Usuario | null;
    status: 'checking' | 'authenticated' | 'not-authenticated';
    signUp : (registerData:RegisterData) => void;
    signIn : (loginData:LoginData) => void;
    fbLogin: ()=> void;
    googleLogin: ()=> void;
    logOut : () => void;
    removeError : () => void;
    
}


const authInicialState:AuthState = {
    status:'checking',
    token: null,
    usuario: null, 
    errorMessage: ''
}


GoogleSignin.configure();



export const AuthContext = createContext({} as AuthContextProps );

export const AuthProvider = ({children}: any) => {
    const [state, dispatch] = useReducer(authReducer, authInicialState,);

    useEffect(() => {
       checkToken();
    }, [])

    const checkToken = async() => {
        const token = await AsyncStorage.getItem('token');
        //No hay token autenticado
        if(!token) return dispatch({type:'notAuthenticated'});

        //Hay token
        const resp = await chatApi.get('/auth');
        if (resp.status !== 200) {
            return dispatch({type: 'notAuthenticated'})
        }

        //Se guarda nuevo token
        await AsyncStorage.setItem('token',resp.data.token);

        dispatch({
            type:'signUp',
            payload:{
                token: resp.data.token,
                usuario: resp.data.usuario
            }
        })
    }



    const signIn = async({correo,password}: LoginData) => {
        try {
            
            const {data} = await chatApi.post<LoginResponse>('/auth/login',{
                correo,
                password
            });

            dispatch({
                type:'signUp',
                payload: {
                    token: data.token,
                    usuario: data.usuario
                }
            });

            await AsyncStorage.setItem('token',data.token);
            
            

        } catch (error) {
            // console.log(error.response.data);
            dispatch({
                type:'addError',
                payload: error.response.data.msg || 'Informacion incorrecta'
            });
                
        }
    };

    const removeError = () => {
        dispatch({
            type:'removeError'
        })
    };

    const signUp = async({correo,nombre,password}: RegisterData) => {
        try {
           
            
            const {data} = await chatApi.post<LoginResponse>('/usuarios',{
                nombre,
                correo,
                password,
                rol:'USER_ROLE'
            });

            dispatch({
                type:'signUp',
                payload: {
                    token: data.token,
                    usuario: data.usuario
                }
            });

            await AsyncStorage.setItem('token',data.token);
            
            

        } catch (error) {

            dispatch({
                type:'addError',
                payload: error.response.data.errors[0].msg || 'El correo ya esta registrado'
            });
                
        }
    };


    const logOut = async() => {
        await AsyncStorage.removeItem('token');
        dispatch({type:'logout'})
    };

    const googleLogin = async () => {
        try {
            // Get the users ID token
            await GoogleSignin.hasPlayServices();
            const userInfo = await GoogleSignin.signIn();
            const currentUser = await GoogleSignin.getCurrentUser();
            console.log(currentUser);
            
            // const data = await 
            // console.log(data);
            
            // const resp = await chatApi.post<LoginResponse>('/auth/google',idToken);
            // console.log(resp);
            
        } catch(error) {
          console.log({error});
        }
      }
    const fbLogin = async () => {
        
        
        try {
          // Attempt login with permissions
            const result = await LoginManager.logInWithPermissions(['public_profile','email']);
           
            
                
            if (result.isCancelled) {
                throw 'User cancelled the login process';
            }

            // Once signed in, get the users AccesToken
            const data = await AccessToken.getCurrentAccessToken();
            
            if (!data) {
                throw 'Something went wrong obtaining access token';
            }


            const resp = await chatApi.post<LoginResponse>('/auth/facebook',data);

            
            dispatch({
                type:'signUp',
                payload: {
                    token: resp.data.token,
                    usuario: resp.data.usuario
                }
            });

            await AsyncStorage.setItem('token',resp.data.token);
            

        } catch(error) {
          console.log({error});
        }
    }
    

    return (
        <AuthContext.Provider
        value={{
            ...state,
            signUp,
            signIn,
            logOut,
            removeError,
            fbLogin,
            googleLogin
        }}
        >
            {children}
        </AuthContext.Provider>
    )
}


