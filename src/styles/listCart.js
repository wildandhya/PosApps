import {Dimensions, StyleSheet} from 'react-native'

const {height, width} = Dimensions.get('screen')
const styles = StyleSheet.create({
    container:{
        paddingHorizontal:20,
        width,
        flexDirection:'row'
    },
    cart:{
        // backgroundColor:'#e1e0e1',
        width:'100%',
        height:80,
        borderRadius:20,
        borderWidth: 2,
        borderColor:'#eee',
        flexDirection:'row',
        justifyContent:'space-between',
        marginBottom:5
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
       marginTop:5
    },
    btnWrapper:{
        flexDirection:'column', 
        justifyContent:"center",
        alignItems:'center',
        
        backgroundColor:'#e70510',
        borderRadius:20
    },
    btn:{
        width:27,
        height:23,
    },
    iconBtn:{
        fontSize:15,
        fontWeight:'bold',
        textAlign:'center',
        color:'white'
    },
    rigthAction:{
        backgroundColor:'#e70510',
        justifyContent:'center',
        alignItems:'flex-end',
        height:80,
        borderRadius:10,
        padding:20,
        marginHorizontal:10,
    },
    actionText:{
        color:'white',
    }

    
})

export default styles