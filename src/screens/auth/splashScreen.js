import React, { useEffect } from 'react'
import { StyleSheet,View , Text, TextInput, Image, Dimensions} from 'react-native'

import {logoIndomie} from '../../assets'


const SplashScreen = ({navigation})=>{
    useEffect(() => {
        setTimeout(()=>{
            navigation.replace('WelcomeAuth')
        }, 3000)
    })
    return(
        <View style={styles.container}>
            <Image source={logoIndomie} style={styles.logo}/>
        </View>
    )
}

export default SplashScreen

const {height, width} = Dimensions.get('screen')
const styles = StyleSheet.create({
    container:{
        backgroundColor:'#e70510',
        padding:20,
        height
    },
    logo:{
        width:150,
        height:90,
        marginVertical:'65%',
        marginHorizontal:'25%'
    }
})