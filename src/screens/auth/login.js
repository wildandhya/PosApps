import React from 'react'
import { StyleSheet,View , Text, TextInput, Image, Dimensions} from 'react-native'

import {backIcon} from '../../assets'
import { TouchableOpacity } from 'react-native-gesture-handler'


const Login = ({navigation})=>{
    const goToHome = (screen)=>{
        navigation.navigate(screen)
    }
    return(
        <View style={styles.container}>
            <Image source={backIcon} style={styles.iconBack}/>
            
            <View style={styles.form}>
                <Text style={styles.title}>Login</Text>
                <TextInput style={styles.input} placeholder='Username' placeholderTextColor='#cfcdce'/>
                <TextInput style={styles.input} placeholder='Password' placeholderTextColor='#cfcdce'/>
            </View>
            <View style={styles.btnWrapp}>
                <TouchableOpacity style={styles.loginBtn} onPress={()=> goToHome('Home')}>
                    <Text style={styles.btnDesc}>Login</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Login

const {height, width} = Dimensions.get('screen')
const styles = StyleSheet.create({
    container:{
        backgroundColor:'white',
        padding:20,
        height
        
    },
    iconBack:{
        width:25,
        height:25,
    },
    title:{
        fontSize:14, 
        fontWeight:'bold',
        marginTop:30, 
        textAlign:'center',
        color:'#2b2b2b'
    },
    form:{
        marginTop:80
    },
    input:{
        borderBottomWidth:1,
        borderColor:'#d9d9d9',
        borderRadius:5
        
    },
    btnWrapp:{
        marginTop:30
    },
    loginBtn:{
        backgroundColor:'#e70510', 
        borderRadius:13, 
        paddingVertical:10
    },
    btnDesc:{
        fontSize:12,
        color:'white',
        textAlign:'center',
        paddingHorizontal:'15%',
        marginBottom:6
    },


})