import React, { useEffect } from 'react'
import { StyleSheet,View , Text, Dimensions, StatusBar} from 'react-native'

import {logoIndomie} from '../../assets'


const SplashScreen = ({navigation})=>{
    useEffect(() => {
        setTimeout(()=>{
            navigation.replace('Login')
        }, 3000)
    })
    return(
        <View style={styles.container}>
            <StatusBar backgroundColor="#53b175"/>
            <Text style={styles.logo}>
                eatFood
            </Text>
        </View>
    )
}

export default SplashScreen

const {height, width} = Dimensions.get('screen')
const styles = StyleSheet.create({
    container:{
        backgroundColor:"#53b175",
        padding:20,
        height,
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    },
    logo:{
      
       fontSize:35,
       fontWeight:'bold',
       color:'#fff',
      
    }
})