import {Dimensions, StyleSheet} from 'react-native'

const {height, width} = Dimensions.get('screen')

const styles = StyleSheet.create({
    btnNavigation:{
        height:50, 
        flexDirection:'row',
        alignItems:'center', 
        backgroundColor:'white',
        paddingTop:5
        
    },
    imageUser:{
        width:22,
        height:22,
        marginHorizontal:45
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
    cart:{
        width:22,
        height:22,
        marginHorizontal:45,
        marginBottom:20
    },
    
})

export default styles