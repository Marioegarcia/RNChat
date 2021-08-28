import React from 'react'
import { useContext, useEffect } from 'react';
import { Animated, StyleSheet, View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'



interface Props {
    children: JSX.Element | JSX.Element[];
}

export const GradienteVerical = ({children}: Props) => {
   
    return (
        <View 
        style={{ flex:1, backgroundColor:'#18191A' }}
        >
           <LinearGradient
           colors={['white','white' , 'white']}
           style={{ ...StyleSheet.absoluteFillObject }}
           start={{ x:1, y:1 }}
           end={{ x:0, y:0 }}
            // start={{x: 0, y: 0}} end={{x: 1, y: 0}}
           />
           

           { children }
        </View>
    )
}