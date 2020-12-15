import React from 'react'
import {  StyleSheet,View, Dimensions , Image, Text} from 'react-native'
import { backIcon } from '../../assets'

import { TouchableOpacity } from 'react-native-gesture-handler'
import Header from '../../components/pay/header'
import Footer from '../../components/pay/footer'
import ListPayment from '../../components/pay/listPayment'



const Pay = ({navigation})=>{
    const handleGoTo = (screen)=>{
        navigation.navigate(screen)
    }
    return(
        <View style={styles.container}>
            <View style={{flex:1}}>
               <Header onPress={()=>handleGoTo('Cart')}/>
               <ListPayment/>
            </View>
            <View>
                <Footer/>
            </View>
           
        </View>

    )
}

export default Pay

const {height, width} = Dimensions.get('screen')
const styles = StyleSheet.create({
    container:{
        backgroundColor:'#e7ebef',
        height,
        flex:1
        
    },
})