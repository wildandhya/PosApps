import {Dimensions, StyleSheet} from 'react-native'

const {height, width} = Dimensions.get('screen')

const styles = StyleSheet.create({
    imageCart:{
        width:35,
        height:35,
        marginLeft:8,
        marginTop:3
    },
    searchBar:{
        backgroundColor:'white',
        height:40,
        borderWidth:2,
        borderColor:'#53b175',
        borderRadius:15,
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
        left:10,
    },
    searchWrapper:{
        position:'relative',
        width:'80%',
        marginTop:50
      
    },
    
})

export default styles