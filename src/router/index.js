import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import {Home, Login, Register, WelcomeAuth, SplashScreen} from '../screens'

const Stack = createStackNavigator()

const Router = () =>{
    return(
        <Stack.Navigator>
            <Stack.Screen name='SplashScreen' component={SplashScreen} options={{
                headerShown:false
            }}/>
            <Stack.Screen name='WelcomeAuth' component={WelcomeAuth} options={{
                headerShown:false
            }}/>
            <Stack.Screen name='Login' component={Login} options={{
                headerShown:false
            }}/>
            <Stack.Screen name='Register' component={Register} options={{
                headerShown:false
            }}/>
            <Stack.Screen name='Home' component={Home}  options={{
                headerShown:false
            }} />
        </Stack.Navigator>
    )
}

export default Router