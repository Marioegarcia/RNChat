import React from 'react'
import { View, Text } from 'react-native'
import { Discovery } from '../components/Discovery/Discovery'
import { GradienteVerical } from '../components/GradienteBackground/GradienteVertical'
import { colors } from '../theme/styleMain'

export const DiscoverScreen = () => {
    return (
        
            
                <View style={{backgroundColor: colors.primaryBg}} >
                    <Discovery/>
                </View>
          
       
    )
}

 
