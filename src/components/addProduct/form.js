import React, {useEffect, useState} from 'react'
import { StyleSheet,View , Text, TextInput, Image, Dimensions, Button} from 'react-native'


import { TouchableOpacity } from 'react-native-gesture-handler'
import {useDispatch, useSelector} from 'react-redux'
import { addProductCreator, fetchProduct } from '../../redux/action/product'

import Axios from 'axios'

import ImagePicker from 'react-native-image-picker'
import {ip} from '../../utils/http'



const FormProduct = ({navigation})=>{
    const dispatch = useDispatch()
    const [form, setForm] = useState({
        menu:null,
        category_id: null,
        price:null,
        image:null,

    })
    const handleChoosePhoto = ()=>{
        const options ={
            title:'Choose Images',
            storageOptions:{
                skipBackup:true,
                path:'images'
            },
            noData:true
            
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
                const source = Response
                setForm({
                    ...form,
                    image:source
                })
            }
        })
    }

    const sendData = ()=>{
     let data = new FormData()
     data.append('menu', form.menumenu);
     data.append('image',{
         uri:`file://${form.image.path}`,
         type:form.image.type,
         name:form.image.fileName,
         size:form.image.fileSize

     })  
     data.append('price', form.price)
     data.append('category_id', form.category_id) 

     const config ={
         header:{
            'content-type': 'multipart/form-data',
            contentType: false,
            mimeType: 'multipart/form-data',
            'cache-control': 'no-cache',
            accept: 'application/json',
         }
     }
     const url = `http://192.168.1.100:8000/product`
     Axios.post(url, data)
     .then((res)=>{
         console.log(res)
         setForm({
             menu:null,
             category_id:null,
             price:null,
             image:null
         })
         dispatch(fetchProduct())
         navigation.navigate('Home')
     })
     .catch((err)=>{
         console.log(err)
     })
     
    }


    // const inputChange = (value, input)=>{
        // setForm({
        //     ...form,
        //     [input]: value,
        // })
    // }
    return(
        <View style={styles.container}>
            <View style={styles.form}>
                <TextInput style={styles.input} placeholder='Menu' placeholderTextColor='#cfcdce' value={form.menu} onChangeText={(value)=> setForm({...form, menu:value})}/>
                <TextInput style={styles.input} placeholder='Category_id' placeholderTextColor='#cfcdce' value={form.category_id} onChangeText={(value)=> setForm({...form, category_id:value})} />
                <TextInput style={styles.input} placeholder='Price' placeholderTextColor='#cfcdce' value={form.price} onChangeText={(value)=> setForm({...form, price:value})} />
                <TouchableOpacity onPress={()=>handleChoosePhoto()}>
                    <Text>Choose Photo</Text>
                </TouchableOpacity>
                
            </View>
            <View style={styles.btnWrapp}>
                <TouchableOpacity style={styles.loginBtn} onPress={()=>sendData()}>
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