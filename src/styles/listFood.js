import {Dimensions, StyleSheet} from 'react-native'

const {height, width} = Dimensions.get('screen')

const styles = StyleSheet.create({
    foodWrapper:{
        flex:1,
        width:'100%',
        flexDirection:'row',
        justifyContent:'space-evenly',
        flexWrap:'wrap',
        marginTop:5
    },
    cardFood:{
        margin:5
        
    },
    header:{
        marginTop:10
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
        color:'black'
    },
    foodPrice:{
        fontSize:10,
        color:'#9e9a9b',
        marginLeft:6
    }
    
})

export default styles