import React from 'react'
import {  StyleSheet,View, Dimensions } from 'react-native'

import Header from '../../components/cart/header'
import Content from '../../components/cart/listCart'
import Checkout from '../../components/cart/checkout'

const Cart = ({navigation})=>{
    const handleGoTo = (screen)=>{
        navigation.navigate(screen)
    }
    return(
        <View style={styles.container}>
            <View style={{flex:1}}>
                <Header onPress={()=> handleGoTo('Home')}/>
                <Content />
            </View>
            <View>
                <Checkout onPress={()=> handleGoTo('Pay')}/>
            </View>
        </View>

    )
}

export default Cart

const {height, width} = Dimensions.get('screen')
const styles = StyleSheet.create({
    container:{
        backgroundColor:'white',
        height,
        flex:1
        
    },
})