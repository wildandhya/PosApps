import React from 'react'
import { StyleSheet ,Text, View , Dimensions} from 'react-native'
import {Button} from 'react-native-elements'
import { useSelector} from 'react-redux'

const Checkout = ()=>{
    const cart = useSelector((state) => state.cart.data)
    return(
        <View style={styles.container}>
            <View style={styles.cart}>
                <Text style={styles.cartTotal}>Total:</Text>
                <Text style={styles.TotalPrice}>Rp.{cart.reduce((total, item)=>{
                    return total + item.price * item.qty
                }, 0)}</Text>
                <Button  title='Checkout' type='solid'  buttonStyle={styles.btn} />
            </View>
        </View>
        
    )
}

export default Checkout
const {height, width} = Dimensions.get('screen')
const styles = StyleSheet.create({
    container:{
        padding:10,
        // backgroundColor:'#fafafc',
        width,
    },
    cart:{
        backgroundColor:'white',
        height:50,
        borderRadius:10,
        borderTopWidth: 3,
        borderColor:'#f7fafa',
        flexDirection:'row'
    },
    cartTotal:{
        fontSize:20,
        fontWeight:'bold',
        paddingLeft:20,
        marginVertical:10
    },
    TotalPrice:{
        fontSize:15,
        marginVertical:14,
        marginLeft:5
    },
    btn:{
        width:90,
        height:39,
        borderRadius:20,
        marginVertical:4,
        marginLeft:100,
        backgroundColor:'#12a650'

    }
})