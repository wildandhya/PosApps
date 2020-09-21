import React from 'react'
import { StyleSheet ,Text, View , Dimensions, Image} from 'react-native'
import { useSelector } from 'react-redux'
import { backIcon, menu } from '../../assets'
import { TouchableOpacity } from 'react-native-gesture-handler'

const Header = ({onPress})=>{
    const cart = useSelector(state=> state.cart.data)
    return(
        <View style={styles.container}>
            <View style={styles.cart}>
                <TouchableOpacity onPress={onPress} style={{marginTop:5,}}>
                    <Image source={backIcon} style={styles.iconBack}/>
                </TouchableOpacity>
                <View>
                <Text style={styles.cartTitle}>Edit Menu</Text>
                </View>
                <TouchableOpacity onPress={onPress} style={{marginTop:5,}}>
                    <Image source={menu} style={styles.iconMenu}/>
                </TouchableOpacity>
            </View>
        </View>
        
    )
}

export default Header
const {height, width} = Dimensions.get('screen')
const styles = StyleSheet.create({
    container:{
        padding:10,
        backgroundColor:'#fff',
        width,
        marginBottom:10
        
    },
    cart:{
        backgroundColor:'white',
        height:50,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'       
       
    },
    cartTitle:{
        fontSize:23,
        fontWeight:'bold',
        color:'#323335',
        textAlign:'center',
       
    },
    iconBack:{
        width:17,
        height:17,
        justifyContent:"center"
    },
    iconMenu:{
        width:23,
        height:30,
     
        
    },
})