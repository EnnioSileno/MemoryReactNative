import React, { FC } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {MainScreen, InGameScreen} from '../screens/index'
import { RootStackParamList } from './navigationArguments';


const RootStack = createNativeStackNavigator<RootStackParamList>();

const SreenNavigator:FC = (): JSX.Element => {
    return (
        <NavigationContainer>
            <RootStack.Navigator initialRouteName='Main' screenOptions={ {headerShown: false} }>
                <RootStack.Screen name='Main' component={MainScreen} />
                <RootStack.Screen name='InGame' component={InGameScreen} />
            </RootStack.Navigator>
        </NavigationContainer>
    )
}

export default SreenNavigator;