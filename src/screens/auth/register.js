import React, {useState} from 'react'
import { StyleSheet,View , Text, TextInput, Image, Dimensions} from 'react-native'
import {useDispatch} from 'react-redux'

import {backIcon} from '../../assets'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { registerAction } from '../../redux/action/auth'


const Register = ({navigation})=>{
    const dispatch = useDispatch()


    const handleGoTo = (screen)=>{
        navigation.navigate(screen)
    }
    const [form, setForm] = useState({
        name: '',
        email:'',
        password: ''
    })

    const sendData = ()=>{
       dispatch(registerAction(form))
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
                <Text style={styles.title}>Register</Text>
                <TextInput style={styles.input} placeholder='Fullname' placeholderTextColor='#cfcdce' value={form.name} onChangeText={(value)=> inputChange(value, 'name')}/>
                <TextInput style={styles.input} placeholder='Email' placeholderTextColor='#cfcdce' value={form.email} onChangeText={(value)=> inputChange(value, 'email')}/>
                <TextInput style={styles.input} placeholder='Password' placeholderTextColor='#cfcdce' value={form.password} onChangeText={(value)=> inputChange(value, 'password')} secureTextEntry={true}/>            
            </View>
            <View style={styles.btnWrapp}>
                <TouchableOpacity style={styles.registerBtn} onPress={sendData}>
                    <Text style={styles.btnDesc}>Register</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Register

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
        fontSize:14, 
        fontWeight:'bold',
        marginTop:30, 
        textAlign:'center',
        color:'#2b2b2b'
    },
    form:{
        marginTop:70
    },
    input:{
        borderBottomWidth:1,
        borderColor:'#d9d9d9',
        borderRadius:5
        
    },
    btnWrapp:{
        marginTop:30
    },
    registerBtn:{
        backgroundColor:'#e70510', 
        borderRadius:25, 
        paddingVertical:13
    },
    btnDesc:{
        fontSize:12,
        color:'white',
        textAlign:'center',
        paddingHorizontal:'15%',
        marginBottom:6
    },


})