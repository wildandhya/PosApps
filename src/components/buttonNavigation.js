import React from 'react'
import { View, Text, Image, TouchableOpacity} from 'react-native'

import styles from '../../src/styles/buttonNavigation'
import { homeIcon, user, history } from '../assets'
import {  } from 'react-native'

const ButtonNavigation = ({navigation}) =>{
    return(
        <View style={styles.btnNavigation}>
            <View style={styles.btnIcon}>
                <TouchableOpacity onPress={()=>navigation.navigate('Home')}>
                    <Image source={homeIcon} style={styles.imageUser}/>
                    <Text style={styles.btnTitle}>Home</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.btnIcon}>
                <Image source={history} style={styles.imageUser} />
                <Text style={styles.btnTitle}>History</Text>
            </View>
            <TouchableOpacity style={styles.btnIcon} onPress={()=>navigation.navigate('Profile')}>
                <Image source={user} style={styles.imageUser} />
                <Text style={styles.btnTitle}>Account</Text>
            </TouchableOpacity>
        </View>
    )
}

export default ButtonNavigation