import React, { useContext, useState } from 'react'
import { Dimensions, Image, SafeAreaView, ScrollView, StyleSheet, Text,  useWindowDimensions,  View } from 'react-native';

import { ThemeContext } from '../../context/theme/ThemeContext';
import { profile } from '../../data/usuarios';



interface Friends {
    id:string;
    name:string;
    picture:string;
    latest_timestamp:string;
    lastChat:string;

}

interface Props {
    id:string;
    name:string;
    picture:string;
    friends: Friends[]
}



const screenW = Dimensions.get('screen').width;



export const Discovery = () => {
    
    

    return (
    <SafeAreaView>
        <ScrollView>
            <View style={styles.container} >
                {
                   profile.friends.map( (item: any,index)=> <Perfiles key={index} item={item} /> ) 
                }
            </View>
        </ScrollView>
    </SafeAreaView>
    )
}


const Perfiles = ({item} : any) => {
    const { theme:{colors}} = useContext(ThemeContext);
        
    
    return(
        <View 
        style={{
            ...styles.containerPerfiles,
            backgroundColor: colors.background,
        }}
       
        >
            <Image
            source={{
                uri: item.picture
            }}
            style={styles.img}
            />
            <Text style={{...styles.text,color:colors.text}} >{item.name} {item.active && '   .' } </Text>
            <Text style={{...styles.text,color:colors.text}}>Localidad xxxxx</Text>
        </View>
        
    )
}
 

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        flexWrap: 'wrap',
        justifyContent:'space-evenly', 
    },
    img:{
        height:screenW / 2,
        width: '100%',
        
    },
    containerPerfiles:{
        width: screenW / 2 - 15,
        paddingBottom:10,
        borderRadius:12,
        marginVertical:10,
        overflow:'hidden'
        
    },
    text:{
        justifyContent:'center',
        alignSelf:'center',
        fontSize: (screenW <= 360) ? 13 : 15,
        paddingHorizontal:10
    }
})

