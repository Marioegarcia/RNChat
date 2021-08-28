import { Theme } from '@react-navigation/native';


type ThemeAction = 
    | { type: 'set_light_theme' }
    | { type: 'set_dark_theme' }

export interface ThemeState extends Theme {
    currentTheme: 'light' | 'dark',
    bgSecondColor: string,
    match:string,
    gradiente1:string,
    gradiente2:string,
    gradiente3: string,
    texto: string,
    focus:string,
}

export const lightTheme : ThemeState = {
    currentTheme: 'light',
    dark:false,
    bgSecondColor: 'white' ,
    match:'#EF6291',
    gradiente1: '#FF7373',
    gradiente2: '#FF7F79',
    gradiente3: '#FF9683',
    focus: '#FF7074',
    texto:'white',
    colors:{
        primary: '#FE877C',
        background: '#FFFFFF',
        card:'green',
        text: 'black',
        border: '#E2E2E2',
        notification: 'teal'
    }
}

export const darkTheme : ThemeState = {
    currentTheme: 'dark',
    dark:true,
    bgSecondColor: '#35354C',
    match:'#EF6291',
    gradiente1: '#665AF8',
    gradiente2: '#5E79F9',
    gradiente3: '#569BFA',
    focus: '#00A2E7',
    texto:'white',
    colors:{
        primary: '#00A2E8',
        background: '#202036',
        card:'green',
        text: 'white',
        border: '#35354C',
        notification: '#00D052'
    }
}

export const themeReducer = ( state: ThemeState, action: ThemeAction ): ThemeState => {
    switch (action.type) {
        case 'set_light_theme':
            
            return {
                ...lightTheme
            }
        case 'set_dark_theme':
            
            return {
                ...darkTheme
            }
    
        default:
            return state
    }
}