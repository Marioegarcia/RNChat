import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import {windowHeight, windowWidth} from '../../utils/Dimentions';

interface Props {
    buttonTitle:string,
    btnType?:string,
    color?:string,
    backgroundColor?:string,
    nav?:()=> void,
}

export const SocialButton = ({
    buttonTitle,
    btnType,
    color,
    backgroundColor,
    nav
  }:Props) => {
    return (
        <TouchableOpacity
        style={[styles.buttonContainer, {backgroundColor: backgroundColor}]}
        onPress={nav}
        >
            <View style={styles.iconWrapper}>
                {/* <FontAwesome name={btnType} style={styles.icon} size={22} color={color} /> */}
            </View>
            <View style={styles.btnTxtWrapper}>
                <Text style={[styles.buttonText, {color: color}]}>{buttonTitle}</Text>
            </View>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    buttonContainer: {
      marginTop: 10,
      width: '100%',
      height: windowHeight / 15,
      padding: 10,
      flexDirection: 'row',
      borderRadius: 3,
    },
    iconWrapper: {
      width: 30,
      justifyContent: 'center',
      alignItems: 'center',
    },
    icon: {
      fontWeight: 'bold',
    },
    btnTxtWrapper: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    buttonText: {
      fontSize: 18,
      fontWeight: 'bold',
      fontFamily: 'Lato-Regular',
    },
  });