import React from 'react'
import { StyleSheet ,Text, View , Dimensions, StatusBar} from 'react-native'
import { useSelector } from 'react-redux'
import { backIcon, menu } from '../../assets'
import { TouchableOpacity } from 'react-native-gesture-handler'

const Header = ({onPress})=>{
    const cart = useSelector(state=> state.cart.data)
    return(
        <View style={styles.container}>
            <StatusBar backgroundColor='#fff'/>
            <View style={styles.cart}>
                {/* <TouchableOpacity onPress={onPress} style={{marginTop:5,}}>
                    <Image source={backIcon} style={styles.iconBack}/>
                </TouchableOpacity> */}
              
                <Text style={styles.cartTitle}>My Cart</Text>
                
               
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
        marginBottom:10
        
    },
    cart:{
        backgroundColor:'white',
        justifyContent:'center'   
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