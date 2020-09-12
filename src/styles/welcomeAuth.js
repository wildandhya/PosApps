import {Dimensions, StyleSheet} from 'react-native'
import { color } from 'react-native-reanimated'
const {height, width} = Dimensions.get('screen')

const styles = StyleSheet.create({
    container:{
        alignItems:'center', 
        justifyContent:'center', 
        flex:1,
        backgroundColor:'white'
    },
    image:{
        width:219, 
        height:117,  
        marginBottom:90
    }, 
    textWelcome:{
        marginBottom:90,
        fontSize:20,
        fontWeight:'bold',
        color:'#e70510'
    },
    buttonAction:{
        marginBottom:13, 
        marginTop:2,
        width:150
        
    },
    btnDesc:{
        fontSize:12,
        color:'#7e7e7e',
        textAlign:'center',
        paddingHorizontal:'15%',
        marginBottom:6
    },
    btn:{
        backgroundColor:'#e70510', 
        borderRadius:10, 
        paddingVertical:10,
        paddingHorizontal:30
    },
    btnText:{
        color:'white', 
        fontSize:12, 
        fontWeight:"bold", 
        textTransform:'uppercase', 
        textAlign:'center'
    }
    
})

export default styles