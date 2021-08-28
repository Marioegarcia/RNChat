import React, { createContext, useState } from 'react';

interface Usuario {
    name?:string;
    lastname?:string;
    email: string;
    password?: string;
    password2?: string;
    isLogin: boolean;
}

interface ContextProps {
    cliente: Usuario,
    setLogin: (cliente: Usuario) => void; 
    setLogout: () => void;
}


export const LoginContext = createContext({} as ContextProps); 


export const LoginProvider = ({ children }: any) => {

    const [cliente, setCliente] = useState<Usuario>({
        name:'',
        lastname:'',
        email: '',
        password: '',
        isLogin: false
    });



    const setLogin = ( cliente: Usuario ) => {
        setCliente( cliente );
        console.log(cliente);
        
    }

    const setLogout = () => {
        setCliente({
            email: '',
            password:'',
            isLogin: false
        });
    }


    return (
        <LoginContext.Provider value={{
            cliente,
            setLogin,
            setLogout,
        }}>
            { children }
        </LoginContext.Provider>
    )

}