import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import { AddFotos } from './AddFotos';
import { AcercaDeMi } from './AcercaDeMi';
import { Intereses } from './Intereses';

export const EditarPerfil = () => {
    return (
        <View>
            <ScrollView>
                <AddFotos/>
                <AcercaDeMi/>
                <Intereses/>
            </ScrollView>
            
        </View>
    )
}

