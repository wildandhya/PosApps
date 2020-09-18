import React from 'react'
import {  StyleSheet,View, Dimensions , Image, Text} from 'react-native'
import { backIcon, menu } from '../../assets'

import { TouchableOpacity } from 'react-native-gesture-handler'


const Header = ({onPress})=>{
    return(
        <View style={styles.container}>
            <View style={styles.pay}>
                <TouchableOpacity onPress={onPress} style={{marginTop:5,}}>
                    <Image source={backIcon} style={styles.iconBack}/>
                </TouchableOpacity>
                <View>
                <Text style={styles.cartTitle}>Payment</Text>
                </View>
                <TouchableOpacity onPress={onPress} style={{marginTop:5,}}>
                    <Image source={menu} style={styles.iconMenu}/>
                </TouchableOpacity>
            </View>
        </View>

    )
}

export default Header

const {height, width} = Dimensions.get('screen')
const styles = StyleSheet.create({
    container:{
       
        
    },
    cartTitle:{
        fontSize:23,
        fontWeight:'bold',
        color:'#323335',
    },
    iconBack:{
        width:17,
        height:17,
        // color:'#323335',
       
    },
    iconMenu:{
        width:23,
        height:30,
     
        
    },
    pay:{
        backgroundColor:'white',
        height:50,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingHorizontal:10
       
       
    },
})