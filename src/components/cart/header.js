import React from 'react'
import { StyleSheet ,Text, View , Dimensions} from 'react-native'
import { useSelector } from 'react-redux'

const Header = ()=>{
    const cart = useSelector(state=> state.cart.data)
    return(
        <View style={styles.container}>
            <View style={styles.cart}>
                <Text style={styles.cartTitle}>My Cart ({cart.length})</Text>
            </View>
        </View>
        
    )
}

export default Header
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
        borderBottomWidth: 3,
        borderColor:'#f7fafa'
    },
    cartTitle:{
        fontSize:20,
        fontWeight:'bold',
        paddingLeft:30
    }
})