import React, { useContext } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { ThemeContext } from '../../context/theme/ThemeContext';



interface Props {
    texto: string;
    nav: () => void;
}


export const TextLink = ({texto,nav}: Props) => {
    const {theme: {colors} } = useContext(ThemeContext);
    return (
        <TouchableOpacity
            onPress={ nav } 
            activeOpacity={0.5}
        >
            <Text style={{
            color:colors.text,
            }}      
            >
                {texto}
            </Text>
        </TouchableOpacity>
    )
}

 
