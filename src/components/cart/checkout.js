import React from 'react'
import { StyleSheet ,Text, View , Dimensions} from 'react-native'
import {Button} from 'react-native-elements'
import { useSelector} from 'react-redux'
import { TouchableOpacity } from 'react-native-gesture-handler'

const Checkout = ({onPress})=>{
    const cart = useSelector((state) => state.cart.data)
    return(
        <View style={styles.container}>
            <View style={styles.cart}>
                <View style={{justifyContent:'center', alignItems:'center'}}>
                <Text style={styles.cartTotal}>Total Price</Text>
                <Text style={styles.TotalPrice}>Rp.{cart.reduce((total, item)=>{
                    return total + item.price * item.qty
                }, 0)}</Text>
                </View>
                <Button  title='Buy' type='solid'  buttonStyle={styles.btn} onPress={onPress} />
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
        flexDirection:'row',
        justifyContent:'space-between'
    },
    cartTotal:{
        fontSize:15,
        fontWeight:'bold',
        paddingLeft:20,
        color:'#323335'
    },
    TotalPrice:{
        fontSize:14,
        marginLeft:5
    },
    btn:{
        width:100,
        height:39,
        borderRadius:4,
        marginVertical:4,
        marginLeft:100,
        backgroundColor:'#12a650'

    }
})