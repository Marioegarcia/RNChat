import React, { useContext } from 'react'
import { View, Text, Button, Image, StyleSheet } from 'react-native'

import { ThemeContext } from '../context/theme/ThemeContext';
import { AuthContext } from '../context/auth/AuthContext';

export const SettingsScreen = () => {
    const {logOut,usuario} = useContext(AuthContext);
    const { setDarkTheme,setLightTheme,theme:{dark} } = useContext(ThemeContext);

    
    
    
    return (
        <View style={styles.container} >
            <View style={{
                alignItems:'center'
            }} >
                <Image
                source={{
                    uri:'https://scontent.fntr4-1.fna.fbcdn.net/v/t1.6435-9/166985749_278735870501225_4049214248299259129_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeGQRiRHWvHRk5B9PGYjs9OV4SbwmT4BfEjhJvCZPgF8SKQ-SERVfsBdz9uJf6AnND0d1zw3AMAgPuvn0itl1vfL&_nc_ohc=PKFPzpVy4ZoAX9URMYG&_nc_ht=scontent.fntr4-1.fna&oh=11d7950be018cd174fcd3495a8dba377&oe=614E369B',
        
                    
                }}
                style={{
                    height:200,
                    width:200,
                    borderRadius:100,
                }}
                />
                <Text style={styles.userName} > {usuario?.nombre} </Text>

            </View>
            
            <Button
            title='Logout'
            onPress={logOut}
            />
            <Button
            title={dark ? 'Light' : 'Dark'}
            onPress={dark ? setLightTheme : setDarkTheme}
            />

        </View>
    )
}

 
const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingVertical:15
    },
    userName:{
        fontSize:30
    }
})
