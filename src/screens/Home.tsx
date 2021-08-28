import React, { useContext } from 'react'
import { AuthContext } from '../context/auth/AuthContext';
import { BottomNav } from '../navigation/BottomNav';
import { LoginNav } from '../navigation/LoginNav';

export const Home = () => {
    const {status} = useContext(AuthContext);
    console.log(status);
    
   
    if (status !== 'authenticated') {
        return (
            <LoginNav/>
        )
    } 
            
                
                
    return (
        <BottomNav/>
    )
        
            
            
     
}

 
