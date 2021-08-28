import { View } from 'native-base';
import React, { useContext } from 'react'
import {  Text, TouchableOpacity, StyleSheet } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { ThemeContext } from '../../context/theme/ThemeContext';

interface Props {
    text: string,
    nav:()=> void,
    startX?: number,
    startY?: number,
    endX?:number,
    endY?:number,
}

export const BotonGradiente = ({text,nav,startX=1,startY=0,endX=1,endY=1}:Props) => {
    const {theme: {texto,gradiente3,gradiente1,gradiente2} } = useContext(ThemeContext);
    
    return (
        <View style={styles.container} >
            <TouchableOpacity   
            onPress={nav} 
            activeOpacity={0.8}
            >
                <LinearGradient
                start={{x: startX, y: startY}}
                end={{x: endX, y: endY}}
                style={styles.btn}
                colors={[gradiente1,gradiente2,gradiente3]}>
                <Text style={{...styles.btnText,  color:texto  }}> {text} </Text>
                </LinearGradient>
            </TouchableOpacity>   
        </View>
        
    )
}


const styles = StyleSheet.create({
    container:{
        marginVertical:10
    },
    btn: {
        alignItems:'center',
        padding: 15,
        borderRadius: 20,
    },
    btnText: {
      fontSize: 20,
      fontWeight: 'bold',
      color: 'white',
    },
 
  });