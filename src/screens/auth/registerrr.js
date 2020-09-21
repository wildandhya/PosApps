import React, {useState} from 'react'
import { StyleSheet,View , Text, TextInput, Image, Dimensions, SafeAreaView} from 'react-native'
import {useDispatch} from 'react-redux'

import {backIcon} from '../../assets'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { registerAction } from '../../redux/action/auth'
import { Formik } from 'formik'


const Register = ({navigation})=>{
    const dispatch = useDispatch()
    return(
        <SafeAreaView style={{marginTop:90}}>
            <Formik>
                {formikProps => (
                    <view>
                        <TextInput style={}/>
                    </view>
                )}
            </Formik>

        </SafeAreaView>
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