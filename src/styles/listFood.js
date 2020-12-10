import {Dimensions, StyleSheet} from 'react-native'

const {height, width} = Dimensions.get('screen')

const styles = StyleSheet.create({
    // foodWrapper:{
    //     flex:1,
    //     width:'100%',
    //     flexDirection:'row',
    //     justifyContent:'space-evenly',
    //     flexWrap:'wrap',
    //     marginTop:5
    // },
    cardFood:{
        
        borderWidth: 1,
        borderRadius: 8,
        borderColor: '#ddd',
        // borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width: 20, height: 30 },
        shadowOpacity: 1,
        shadowRadius: 10,
        elevation: 1,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10,
        backgroundColor:'#fff'
        
    },
    header:{
        marginTop:10
    },
    foodImg:{
        width:150,
        height:100,
        borderWidth:1,
        borderRadius:8,
        borderColor:'#efefef',
    },
    foodTitle:{
        fontSize:14,
        marginLeft:6,
        color:'black'
    },
    foodPrice:{
        fontSize:13,
        color:'#9e9a9b',
        marginLeft:6,
        paddingVertical:5,
        // alignSelf:'flex-end'
    },
    deleteBtn:{
        borderWidth:1,
        backgroundColor:'#ffe701',
        borderRadius:4,
        borderColor:'#ddd',
        padding:4,
        alignItems:'center'
    },
    editBtn:{
        borderWidth:1,
        backgroundColor:'#7cdc39',
        borderRadius:4,
        borderColor:'#ddd',
        padding:4,
        alignItems:'center',
        marginBottom:5
    },
    editDeleteWrapp:{
        padding:5
        
    }
    
})

export default styles