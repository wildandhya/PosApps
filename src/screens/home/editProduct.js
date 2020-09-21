import React from 'react'
import {  StyleSheet,View, Dimensions , Image, Text} from 'react-native'
import { backIcon } from '../../assets'

import { TouchableOpacity } from 'react-native-gesture-handler'
import Header from '../../components/editProduct/header'
import FormEdit from '../../components/editProduct/form'


const EditProduct = ({navigation})=>{
    const handleGoTo = (screen)=>{
        navigation.navigate(screen)
    }
    return(
        <View style={styles.container}>
            <View style={{flex:1}}>
               <Header onPress={()=>handleGoTo('Home')}/>
               <FormEdit/>
            </View>
        </View>

    )
}

export default EditProduct

const {height, width} = Dimensions.get('screen')
const styles = StyleSheet.create({
    container:{
        backgroundColor:'#e7ebef',
        height,
        flex:1
        
    },
})