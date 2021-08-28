import React, { useContext } from 'react';
import { KeyboardTypeOptions, View } from 'react-native';
import { Input } from 'native-base'
import  Icono  from 'react-native-vector-icons/Ionicons';
import { ThemeContext } from '../../context/theme/ThemeContext';





interface Props {
    type?:string,
    placeholder:string,
    name:string,
    onChangeText: (e:any) =>  void,
    kbType?: KeyboardTypeOptions
}

export const InputForm = ({type,name,placeholder,onChangeText,kbType='default'}:Props) => {
    const { theme:{bgSecondColor,colors,focus}} = useContext(ThemeContext);
    return (
        <View>
            <Input
                keyboardType={kbType}
                size="sm"
                onChangeText={ (e)=> onChangeText(e) }
                type={type}
                placeholder={placeholder}
                color={colors.text}
                _focus={{ borderColor: focus }}
                borderColor={colors.border}
                backgroundColor={bgSecondColor}
                InputLeftElement={
                    <Icono
                    name={name}
                    size={20}
                    style={{
                        marginLeft:10
                    }}
                    color={focus}
                    />
                }
                />
        </View>
    )
}


