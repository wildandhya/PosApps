import React from 'react'
import { StyleSheet ,Text, View , Dimensions} from 'react-native'
import {Button} from 'react-native-elements'
import { useSelector} from 'react-redux'
import { TouchableOpacity } from 'react-native-gesture-handler'

const Footer = ({onPress})=>{
    const cart = useSelector((state) => state.cart.data)
    return(
        <View style={styles.container}>
            <View style={styles.cart}>
                <View style={styles.descPay}>
                    <Text style={styles.cartTotal}>Menu</Text>
                    <Text style={styles.TotalPrice}>{cart.length}</Text>
                </View>
                <View style={styles.descPay}>
                    <Text style={styles.cartTotal}>Subtotal</Text>
                    <Text style={styles.TotalPrice}>Rp.{cart.reduce((total, item)=>{
                    return total + item.price * item.qty
                    }, 0)}</Text>
                </View>
                <View style={styles.descPay}>
                    <Text style={styles.cartTotal}>Ppn</Text>
                    <Text style={styles.TotalPrice}>5%</Text>
                </View>
                <View style={styles.descPay}>
                    <Text style={styles.cartTotal}>Total</Text>
                    <Text style={styles.TotalPrice}>Rp.{cart.reduce((total, item)=>{
                    return (total + item.price * item.qty) + 1000}, 0)}</Text>
                </View>
                <Button  title='Pay' type='solid'  buttonStyle={styles.btn} onPress={onPress} />
            </View>
        </View>
        
    )
}

export default Footer
const {height, width} = Dimensions.get('screen')
const styles = StyleSheet.create({
    container:{
        padding:20,
        // backgroundColor:'#fafafc',
        width,
    },
    cart:{
        backgroundColor:'white',
        height:150,
        borderRadius:15,
        borderTopWidth: 3,
        borderColor:'#f7fafa',
        flexDirection:'column',
       
    },
    cartTotal:{
        fontSize:15,
        fontWeight:'bold',
        color:'#323335'
    },
    TotalPrice:{
        fontSize:14,
        
    },
    btn:{
        width:320,
        height:39,
        alignSelf:'center',
        borderRadius:10,
        marginVertical:4,
        backgroundColor:'#12a650'
    },
    descPay:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginVertical:4,
        marginHorizontal:10
    }
})