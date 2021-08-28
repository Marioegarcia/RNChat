import React, { useContext } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { ThemeContext } from '../../context/theme/ThemeContext';


const data = [
    {
        id:1,
        url: 'https://image.ibb.co/k0wVTm/profile_pic.jpg'
    },
    {
        id:2,
        url: 'https://image.ibb.co/k0wVTm/profile_pic.jpg'
    },
    {
        id:3,
        url: 'https://image.ibb.co/k0wVTm/profile_pic.jpg'
    },

]

export const AddFotos = () => {
    const { theme:{colors}} = useContext(ThemeContext);
    
    return (
        <View style={{
            flexDirection:'row'
        }} >
            {
                data.map((i)=> 
                    (
                        <TouchableOpacity key={i.id} >
                            <Text>+</Text>
                        </TouchableOpacity>
                    )
                )

                
            }

            
         
           
            
        </View>
    )
}


