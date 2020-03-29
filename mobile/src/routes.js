import 'intl';
import 'intl/locale-data/jsonp/pt-BR';

import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import IncidentsPage from './pages/Incidents';
import DetailPage from './pages/Detail';

const AppStack = createStackNavigator();

export default function Routes(){
    return(
        <>
            <StatusBar barStyle="dark-content"/>
            <NavigationContainer>
                <AppStack.Navigator screenOptions={{ headerShown:false }}>
                    <AppStack.Screen name="Incidents" component={IncidentsPage} />
                    <AppStack.Screen name="Detail" component={DetailPage} />
                </AppStack.Navigator>
            </NavigationContainer>
        </>
    )
}