import React from 'react'
import {  StyleSheet,View, Dimensions , Image, Text} from 'react-native'
import { backIcon, profileImage } from '../../assets'

import { TouchableOpacity } from 'react-native-gesture-handler'



const LastOrder = ({navigation})=>{
    const handleGoTo = (screen)=>{
        navigation.navigate(screen)
    }
    return(
        <View style={styles.container}>
            <Text>Last Order</Text>
            <View>
                <Text>Invoice</Text>
            </View>
        </View>

    )
}

export default LastOrder

const {height, width} = Dimensions.get('screen')
const styles = StyleSheet.create({
    container:{
      
        
    },
   
})