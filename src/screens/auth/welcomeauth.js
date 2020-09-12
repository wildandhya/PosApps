import React, { useEffect } from 'react'
import { View , Text, Image} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

import Styles from '../../styles/welcomeAuth'
import {indomieIcon} from '../../assets'

const WelcomeAuth = ({navigation})=>{
    const {container, image,  textWelcome, buttonAction, btn, btnText, btnDesc} = Styles
    const handleGoTo =(screen)=>{
        navigation.navigate(screen)
    }
    return(
        <View style={container}>
            <Text style={textWelcome}>
                Warung Indomie 
            </Text>
            <Image source={indomieIcon} style={image}/>
            
            <View style={buttonAction}>
                <TouchableOpacity style={btn} onPress={() => handleGoTo('Login')}>
                    <Text style={btnText}>Login</Text>
                </TouchableOpacity>
            </View>
            <View style={buttonAction}>
                <TouchableOpacity style={btn} onPress={() => handleGoTo('Register')}>
                    <Text style={btnText}>Register</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default WelcomeAuth