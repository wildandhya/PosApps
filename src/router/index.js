import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import {Home, Login, Register, WelcomeAuth, SplashScreen, Cart, Pay, AddProduct, Profile} from '../screens'

const Stack = createStackNavigator()

const Router = () =>{
    return(
        <Stack.Navigator initialRouteName='Profile'  >
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
            <Stack.Screen name='Cart' component={Cart}  options={{
                headerShown:false
            }}  />
            <Stack.Screen name='Pay' component={Pay}  options={{
                headerShown:false
            }}  />
            <Stack.Screen name='AddProduct' component={AddProduct}  options={{
                headerShown:false
            }}  />
             <Stack.Screen name='Profile' component={Profile}  options={{
                headerShown:false
            }}  />
        </Stack.Navigator>
    )
}

export default Router