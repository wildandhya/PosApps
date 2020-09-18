import React, {useEffect, useState} from 'react'
import { StyleSheet,View , Text, TextInput, Image, Dimensions} from 'react-native'

import {backIcon} from '../../assets'
import { TouchableOpacity } from 'react-native-gesture-handler'
import {loginAction} from '../../redux/action/auth'
import {useDispatch, useSelector} from 'react-redux'


const Login = ({navigation})=>{
    const dispatch = useDispatch()

    const {user, isLogged} = useSelector(state => state.auth)
   
    

    const handleGoTo = (screen)=>{
        navigation.navigate(screen)
    }

    const [form, setForm] = useState({
        username: '',
        password: ''
    })

    const sendData = ()=>{
        dispatch(loginAction(form))
        if(isLogged){
            if(user.level === 2){
                handleGoTo("Home")
            }else{
                handleGoTo('Cart')
            }
        }
        // }else{
        //     null
        // }
        
    }

    const inputChange = (value, input)=>{
        setForm({
            ...form,
            [input]: value,
        })
    }
    return(
        <View style={styles.container}>
            <TouchableOpacity onPress={()=> handleGoTo('WelcomeAuth')}>
                <Image source={backIcon} style={styles.iconBack}/>
            </TouchableOpacity>
            <View style={styles.form}>
                <Text style={styles.title}>Login</Text>
                <TextInput style={styles.input} placeholder='Username' placeholderTextColor='#cfcdce' value={form.username} onChangeText={(value)=> inputChange(value, 'username')}/>
                <TextInput style={styles.input} placeholder='Password' placeholderTextColor='#cfcdce' value={form.password} onChangeText={(value)=> inputChange(value, 'password')} secureTextEntry={true}/>
                <Text>{}</Text>
            </View>
            <View style={styles.btnWrapp}>
               {user !== undefined?( 
                <TouchableOpacity style={styles.loginBtn} onPress={sendData}>
                    <Text style={styles.btnDesc}>Login</Text>
                </TouchableOpacity>):(
                <View>
                    <Text style={{color:'red', marginBottom:20}}>Username or Password is incorect</Text>
                    <TouchableOpacity style={styles.loginBtn} onPress={sendData}>
                    <Text style={styles.btnDesc}>Login</Text>
                </TouchableOpacity>
                </View>
               )
               }
               
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
        width:20,
        height:20,
    },
    title:{
        fontSize:20, 
        fontWeight:'bold',
        marginTop:30, 
        textAlign:'center',
        color:'#323335'
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