import React from 'react'
import {StyleSheet, View, Text, Image, ScrollView, TextInput} from 'react-native'

import styles from '../../src/styles/buttonNavigation'
import { homeIcon, user, history } from '../assets'
import { TouchableOpacity } from 'react-native-gesture-handler'

const ButtonNavigation = ({onPress}) =>{
    return(
        <View style={styles.btnNavigation}>
            <View style={styles.btnIcon}>
                <TouchableOpacity onPress={onPress}>
                    <Image source={homeIcon} style={styles.imageUser}/>
                    <Text style={styles.btnTitle}>Home</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.btnIcon}>
                <Image source={history} style={styles.imageUser} />
                <Text style={styles.btnTitle}>History</Text>
            </View>
            <View style={styles.btnIcon}>
                <Image source={user} style={styles.imageUser} />
                <Text style={styles.btnTitle}>Account</Text>
            </View>
        </View>
    )
}

export default ButtonNavigation