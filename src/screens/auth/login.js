import React, {useEffect, useState} from 'react'
import { StyleSheet,View , Text, TextInput, Image, Dimensions} from 'react-native'

import {backIcon} from '../../assets'
import { TouchableOpacity } from 'react-native-gesture-handler'
import {loginAction} from '../../redux/action/auth'
import {useDispatch, useSelector} from 'react-redux'
import {Formik} from 'formik'
import * as yup from 'yup'


const Login = ({navigation})=>{
    const dispatch = useDispatch()

    const {user, isLogged} = useSelector(state => state.auth)
    
    const handleGoTo = (screen)=>{
        navigation.navigate(screen)
    }

    const formValidation = yup.object().shape({
        email:yup.string().required().label('email').email(),
        password:yup.string().required().label('password').min(5, 'your password is to weak').max(10),

    })

    // useEffect(()=>{
    //     if(isLogged === true){
    //         handleGoTo('Home')
    //     }
        
    // }, [])
    return(
        <View style={styles.container}>
            <TouchableOpacity onPress={()=> handleGoTo('WelcomeAuth')}>
                <Image source={backIcon} style={styles.iconBack}/>
            </TouchableOpacity>
            <Text style={styles.title}>Login</Text>
            <Formik 
                initialValues={{email:'', password:''}}
                validationSchema={formValidation}
                onSubmit={(values, actions) =>{
                     actions.resetForm()
                    dispatch(loginAction(values))
                    if(isLogged === true){
                        handleGoTo("Home")
                        } 
                }}
                >
                    {(formikProps)=> (
                        <View>
                        <View style={styles.form}>
                            <View>
                               <TextInput 
                                   style={styles.input} 
                                   placeholder='Email' 
                                   onChangeText={formikProps.handleChange("email")}
                                   value={formikProps.values.email}
                                   onBlur={formikProps.handleBlur('email')}
                                   autoFocus
                                 />
                                 <Text style={{color:"red"}}>{formikProps.errors.email}</Text>
                            </View>
                            <View>
                               <TextInput 
                                   style={styles.input} 
                                   placeholder='Password' 
                                   onChangeText={formikProps.handleChange("password")}
                                   value={formikProps.values.password}
                                   onBlur={formikProps.handleBlur('password')}
                                   secureTextEntry
                                 />
                                 <Text style={{color:"red"}}>{formikProps.errors.password}</Text>
                            </View>
                        </View>
                        <View style={styles.btnWrapp}>
                            {user !== undefined?( 
                                   <TouchableOpacity style={styles.loginBtn} onPress={formikProps.handleSubmit}>
                                        <Text style={styles.btnDesc}>Login</Text>
                                  </TouchableOpacity>):(
                             <View>
                                <Text style={{color:'red', marginBottom:20}}>Username or Password is incorect</Text>
                                <TouchableOpacity style={styles.loginBtn} onPress={formikProps.handleSubmit}>
                                           <Text style={styles.btnDesc}>Login</Text>
                                </TouchableOpacity>
                            </View>
                               )
                              }
                      </View>
                  </View>
                    )}
               </Formik>
               
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
        marginTop:30
    },
    input:{
        borderBottomWidth:1,
        borderColor:'#d9d9d9',
        borderRadius:5
        
    },
    btnWrapp:{
        
    },
    loginBtn:{
        backgroundColor:'#6e241c', 
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