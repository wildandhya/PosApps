import React from 'react'
import {  StyleSheet,View, Dimensions } from 'react-native'

import Header from '../../components/cart/header'
import Content from '../../components/cart/content'
import Checkout from '../../components/cart/checkout'

const Cart = ()=>{
    return(
        <View style={styles.container}>
            <View style={{flex:1}}>
                <Header/>
                <Content/>
            </View>
            <View>
                <Checkout/>
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