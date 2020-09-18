import React, {useEffect, useState} from 'react'
import { StyleSheet,View , Text, TextInput, Image, Dimensions, Button} from 'react-native'

import {backIcon} from '../../assets'
import { TouchableOpacity } from 'react-native-gesture-handler'
import {loginAction} from '../../redux/action/auth'
import {useDispatch, useSelector} from 'react-redux'
import { addProductCreator } from '../../redux/action/product'

import ImagePicker from 'react-native-image-picker'


const FormProduct = ()=>{
    const dispatch = useDispatch()

    const {user, isLogged} = useSelector(state => state.auth)
    const [form, setForm] = useState({
        menu: '',
        category_id: '',
        price:'',
        image:null
    })

    const handleChoosePhoto = ()=>{
        const options ={
            title:'Choose Images',
            storageOptions:{
                skipBackup:true,
                path:'images'
            },
            
        }
        ImagePicker.showImagePicker(options, Response =>{
            console.log('respon', Response)
            if(Response.didCancel){
                console.log('Cancel')
               
            }else if(Response.error){
                console.log('ImagePicker Error', Response.error)
            }else if(Response.customButton){
                console.log('User Tapped Custom Button', Response.customButton)

            }else{
                setForm({
                    image:Response
                })
            }
        })
    }

    const sendData = ()=>{
        dispatch(addProductCreator(form))
    }
    const inputChange = (value, input)=>{
        setForm({
            ...form,
            [input]: value,
        })
    }

    const uploadImage = ()=>{
        const data = new FormData()
        data.append('image',{
            uri:image.uri

        })
    }
    return(
        <View style={styles.container}>
            <View style={styles.form}>
                <TextInput style={styles.input} placeholder='Name' placeholderTextColor='#cfcdce' value={form.menu} onChangeText={(value)=> inputChange(value, 'menu')}/>
                <TextInput style={styles.input} placeholder='Category' placeholderTextColor='#cfcdce' value={form.category_id} onChangeText={(value)=> inputChange(value, 'category_id')} />
                <TextInput style={styles.input} placeholder='Price' placeholderTextColor='#cfcdce' value={form.price} onChangeText={(value)=> inputChange(value, 'price')} />
                {/* <TextInput style={styles.input} placeholder='Image' placeholderTextColor='#cfcdce' value={form.password} onChangeText={(value)=> inputChange(value, 'Image')} /> */}
                <Button title='choose images' onPress={handleChoosePhoto}/>
                
            </View>
            <View style={styles.btnWrapp}>
                <TouchableOpacity style={styles.loginBtn} onPress={sendData}>
                    <Text style={styles.btnDesc}>Add</Text>
                </TouchableOpacity>
               
            </View>
        </View>
    )
}

export default FormProduct

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
        marginTop:10
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