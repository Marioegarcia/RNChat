import React, { useContext } from 'react'
import { Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { ThemeContext } from '../../context/theme/ThemeContext';


interface Props {
    title: string;
    subtitle?:string;
}

export const HeaderTitle = ( { title,subtitle }: Props ) => {
    const {theme: {colors} } = useContext(ThemeContext);
    const {top} =  useSafeAreaInsets();

    return (
        <View style={{marginTop: top + 20, marginBottom:10 }} >
            <Text style={{ fontSize:30,color: colors.text}} >
                { title }
            </Text>
            <Text style={{ fontSize:20,color: colors.text}} >
                { subtitle }
            </Text>
        </View>
    )
}
