import React, {useState} from 'react'
import { StyleSheet,View , Text, TextInput, Image, Dimensions} from 'react-native'
import {useDispatch} from 'react-redux'

import {backIcon} from '../../assets'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { registerAction } from '../../redux/action/auth'
import {Formik} from 'formik'
import * as yup from 'yup'


const Register = ({navigation})=>{
    const dispatch = useDispatch()


    const handleGoTo = (screen)=>{
        navigation.navigate(screen)
    }
    // const [form, setForm] = useState({
    //     name: '',
    //     email:'',
    //     password: ''
    // })

    // const sendData = ()=>{
    //    dispatch(registerAction(form))
    // }

    // const inputChange = (value, input)=>{
    //     setForm({
    //         ...form,
    //         [input]: value,
    //     })
    // }
     const formValidation = yup.object().shape({
         name:yup.string().required().label('name'),
         email:yup.string().required().label('email').email(),
         password:yup.string().required().label('password').min(5, 'your password is to weak').max(10),

     })


    return(
        <View style={styles.container}>
            <TouchableOpacity onPress={()=> handleGoTo('WelcomeAuth')}>
                <Image source={backIcon} style={styles.iconBack}/>
            </TouchableOpacity>
            <Text style={styles.title}>Register</Text>
                                            
                <Formik 
                initialValues={{name:'', email:'', password:''}}
                validationSchema={formValidation}
                onSubmit={(values, actions) =>{
                    actions.resetForm()
                    dispatch(registerAction(values))
                    handleGoTo('Login')
                }}
                >
                    {(formikProps)=> (
                        <View>
                        <View style={styles.form}>
                            <View>
                            <TextInput 
                            style={styles.input} 
                            placeholder='Fullname' 
                            onChangeText={formikProps.handleChange("name")}
                            value={formikProps.values.name}
                            onBlur={formikProps.handleBlur('name')}
                            />
                            <Text style={{color:"red"}}>{formikProps.errors.name}</Text>
                            </View>
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
                               placeholderTextColor='#d9d9d9' 
                               onChangeText={formikProps.handleChange("password")}
                               value={formikProps.values.password}
                               onBlur={formikProps.handleBlur('password')}
                               secureTextEntry={true}/>
                               <Text style={{color:"red"}}>{formikProps.errors.password}</Text>
                            </View>
                        </View>
                         <View style={styles.btnWrapp}>
                         <TouchableOpacity style={styles.registerBtn} onPress={formikProps.handleSubmit}>
                             <Text style={styles.btnDesc}>Register</Text>
                         </TouchableOpacity>
                         </View>
                         </View>
                    )}
                </Formik>
                       
            
           
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
        fontSize:20, 
        fontWeight:'bold',
        marginTop:30, 
        textAlign:'center',
        color:'#2b2b2b'
    },
    form:{
        marginTop:20
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
        backgroundColor:'#6e241c', 
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