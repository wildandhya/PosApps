import React from 'react'
import { StyleSheet ,Text, View , Dimensions, Image} from 'react-native'

import { TouchableOpacity } from 'react-native-gesture-handler'
import { goPay, ovo, dana } from '../../assets'
import { CheckBox } from 'react-native-elements'

const ListPayment = ({onPress})=>{
    return(
        <View style={styles.container}>
            <TouchableOpacity>
                <View style={styles.listPayment}>
                    <Image source={goPay} style={styles.logoGopay}/>
                </View>
            </TouchableOpacity>
           <TouchableOpacity>
                <View style={styles.listPayment}>
                    <Image source={ovo} style={styles.logo}/>
                </View>
           </TouchableOpacity>
           <TouchableOpacity>
                <View style={styles.listPayment}>
                    <Image source={dana} style={styles.logo}/>
                </View>
           </TouchableOpacity>
        </View>
        
    )
}

export default ListPayment
const {height, width} = Dimensions.get('screen')
const styles = StyleSheet.create({
    container:{
        width,
    },
    logo:{
        width:60,
        height:50,
        marginLeft:10
       
    },
    logoGopay:{
        width:70,
        height:50,
        marginLeft:10
       
    },
   
    listPayment:{
        height:50,
        marginHorizontal:20,
        marginTop:15,
        backgroundColor:'#fff',
        borderRadius:10,
        justifyContent:"center"
    }

})