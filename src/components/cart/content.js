import React from 'react'
import { StyleSheet ,Text, View , Dimensions, Image} from 'react-native' 
import {Button} from 'react-native-elements'
import { saltedEgg } from '../../assets'

const Content = ()=>{
    return(
        <View style={styles.container}>
            <View style={styles.cart}>
                <Image source={saltedEgg} style={styles.img}/>
                <View style={{marginLeft:15}}>
                    <Text style={styles.cartTitle}>Salted Egg</Text>
                    <View style={styles.btnWrapper}>
                        <Button type='outline'  buttonStyle={styles.btn} />
                        <Text>0</Text>
                        <Button type='outline'  buttonStyle={styles.btn} />
                    </View>
                </View>
            </View>
            <View>
                <Text style={styles.price}>Rp. 20000</Text>
            </View>
        </View>
        
    )
}

export default Content
const {height, width} = Dimensions.get('screen')
const styles = StyleSheet.create({
    container:{
        paddingHorizontal:18,
        // backgroundColor:'',
        width,
        flexDirection:'row'
    },
    cart:{
        backgroundColor:'#fafafc',
        width:230,
        height:80,
        borderRadius:10,
        borderBottomWidth: 3,
        borderColor:'#f7fafa',
        flexDirection:'row'
    },
    cartTitle:{
        fontSize:14,
        fontWeight:'bold',
    },
    img:{
        width:80,
        height:80,
        borderRadius:10,
    },
    price:{
        marginLeft:20,
        marginTop:30
    },
    btnWrapper:{
        flexDirection:'row', 
        justifyContent:"space-between",
        marginTop:20
    },
    btn:{
        width:25,
        height:20,
        borderRadius:6,
        borderWidth:1,
        borderColor:'#e70510',
    }
})