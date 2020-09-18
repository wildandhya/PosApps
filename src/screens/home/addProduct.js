import React from 'react'
import {  StyleSheet,View, Dimensions , Image, Text} from 'react-native'
import { backIcon } from '../../assets'

import { TouchableOpacity } from 'react-native-gesture-handler'
import Header from '../../components/addProduct/header'
import FormProduct from '../../components/addProduct/form'


const AddProduct = ({navigation})=>{
    const handleGoTo = (screen)=>{
        navigation.navigate(screen)
    }
    return(
        <View style={styles.container}>
            <View style={{flex:1}}>
               <Header onPress={()=>handleGoTo('Home')}/>
               <FormProduct/>
            </View>
        </View>

    )
}

export default AddProduct

const {height, width} = Dimensions.get('screen')
const styles = StyleSheet.create({
    container:{
        backgroundColor:'#e7ebef',
        height,
        flex:1
        
    },
})