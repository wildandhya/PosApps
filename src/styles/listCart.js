import {Dimensions, StyleSheet} from 'react-native'

const {height, width} = Dimensions.get('screen')
const styles = StyleSheet.create({
    container:{
        flex:1
        
    },
    listCart:{
        paddingHorizontal:18,
        // backgroundColor:'',
        width,
        flexDirection:'row',
        flex:1
    },
    cart:{
        backgroundColor:'#fafafc',
        width:230,
        height:80,
        borderRadius:10,
        borderBottomWidth: 3,
        borderColor:'#f7fafa',
        flexDirection:'row',
        marginBottom:20
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
    },
    iconBtn:{
        fontSize:20,
        textAlign:'center',
        marginBottom:10
    },
    checkout:{
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
    btnCheckout:{
        width:90,
        height:39,
        borderRadius:20,
        marginVertical:4,
        marginLeft:100,
        backgroundColor:'#12a650'

    },
    textCheckout:{
        color:'white',
        textAlign:'center',
        paddingTop:10
    }
})