import React, { useContext } from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { DiscoverScreen } from '../screens/DiscoverScreen';
import { SettingsScreen } from '../screens/SettingsScreen';
import { ChatsScreen } from '../screens/ChatsScreen';

import  Icon  from 'react-native-vector-icons/Ionicons';
import { ThemeContext } from '../context/theme/ThemeContext';

import { AuthContext } from '../context/auth/AuthContext';
import { LoadingScreen } from '../screens/LoadingScreen';
import { ConfigPerfil } from '../screens/ConfigPerfil';



const Tab = createMaterialBottomTabNavigator();

export const BottomNav = () => {
    const {usuario,status} = useContext(AuthContext);
    const { theme:{colors,bgSecondColor}} = useContext(ThemeContext);
        
        
    if (status === 'checking') return <LoadingScreen/> 
    
        if(false) return <ConfigPerfil/>
        return (
           
            <Tab.Navigator
            inactiveColor={bgSecondColor}
            activeColor={colors.primary}
            sceneAnimationEnabled={true}
            labeled={false}
            screenOptions={ ({route}) => ({
                tabBarIcon: ({color}) => {
                    
                    let iconName : string = '';
            
                    switch (route.name) {
                        case 'DiscoverScreen':
                        iconName = 'location-outline';
                        break;
                        case 'ChatsScreen':
                        iconName = 'chatbubble-ellipses-outline';
                        break;
                        case 'SettingsScreen':
                        iconName = 'person-outline'
                        break;
                        
                        default:
                            iconName = 'home'
                            break;
                    }
            
                    return  <Icon  name={iconName}  size={25} color={color} />
                },
                
            })
            
            }
            barStyle={{ 
            backgroundColor: colors.background,
            elevation: 0,
            
            borderTopWidth:0
            }}
            >
              
                       
                    <Tab.Screen name="DiscoverScreen" options={{ title:'Cerca' }}  component={DiscoverScreen} />
                    <Tab.Screen name="ChatsScreen" options={{ title:'Chat' }} component={ChatsScreen} />
                    <Tab.Screen name="SettingsScreen" component={SettingsScreen} />
                       
            
                 
                
                
            </Tab.Navigator>
            
        );
   
   
}
