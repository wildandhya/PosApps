import {Dimensions, StyleSheet} from 'react-native'

const {height, width} = Dimensions.get('screen')

const styles = StyleSheet.create({
    container:{
        flex:1, 
        backgroundColor:'white'
    },
    mainContent:{
        flex:1,
        padding:8,
        
    },
    btnNavigation:{
        height:50, 
        flexDirection:'row',
        alignItems:'center', 
        justifyContent:'space-around',
    },
    imageUser:{
        width:29,
        height:29,
    },
    btnIcon:{
        flex:1, 
    },
    btnTitle:{
        fontSize:12,
        color:'#545454',
        marginTop:2,
        textAlign:'center'
    },
    imageCart:{
        width:35,
        height:35,
        marginLeft:8,
        marginTop:3
    },
    searchBar:{
        backgroundColor:'white',
        height:40,
        width:250,
        borderWidth:2,
        borderColor:'#e70510',
        borderRadius:30,
        fontSize:13,
        paddingLeft:45,
        paddingRight:20,
        
    },
    addBtn:{
        width:35,
        height:35,
        marginRight:11
    },
    iconSearch:{
        width:20,
        height:20,
        position:"absolute",
        top:10,
        left:10
    },
    searchWrapper:{
        position:'relative'
    },
    profile:{
        width:35,
        height:35,
        marginLeft:15
    },
    foodContainer:{
        marginTop:20
    },
    foodWrapper:{
        flex:1,
        flexDirection:'row',
        justifyContent:'center',
        flexWrap:'wrap'
    },
    cardFood:{
        margin:5
        
    },
    foodImg:{
        width:150,
        height:100,
        borderWidth:1,
        borderRadius:18,
        borderColor:'#efefef',
    },
    foodTitle:{
        fontSize:12,
        marginLeft:6,
        color:'#9e9a9b'
    },
    foodPrice:{
        fontSize:10,
        color:'#9e9a9b',
        marginLeft:6
    }
    
})

export default styles