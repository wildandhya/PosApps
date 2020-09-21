import React from 'react'
import {  StyleSheet,View, Dimensions , Image, Text} from 'react-native'
import { backIcon, profileImage } from '../../assets'

import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler'



const RecentOrder = ({navigation})=>{
    const handleGoTo = (screen)=>{
        navigation.navigate(screen)
    }
    return(
        <View style={styles.container}>
            <View style={styles.title}>
               <Text style={styles.textTitle}>Recent Order</Text>
            </View>
           <ScrollView>
            <View style={styles.card}>
                <View style={styles.cardWrapper}>
                    <View style={styles.cardList}>
                <View style={styles.listOrder}>
                    <View style={{flexDirection:'row'}}>
                      <Text style={{fontWeight:'bold', color:'#fff'}}>Invoice</Text>
                      <Text style={{color:'#fff'}}>#172966</Text>
                    </View>
                   <Text style={{color:'#fff'}}>15 August 2020</Text>
                </View>
                <View style={styles.listMenu}>
                   <Text style={{fontWeight:'bold'}}>Mie Goreng Ayam Geprek</Text>
                   <Text>1 porsi</Text>
                   <Text>Rp. 10000</Text>
                </View>
                <View style={styles.total}>
                <Text>Gopay</Text>
                    <View style={{flexDirection:'row'}}>
                       <Text style={{fontWeight:'bold', marginRight:5}}>Total:</Text>
                       <Text>Rp. 19087255</Text>
                   </View>
                   
                </View>
                </View>
                
                </View>
            </View>
            </ScrollView>
        </View>

    )
}

export default RecentOrder

const {height, width} = Dimensions.get('screen')
const styles = StyleSheet.create({
    container:{
       
        backgroundColor:'#fff',
    },
    title:{
        borderColor:'#131313',
        borderBottomWidth:1,
        paddingLeft:20,
        height:40,
        justifyContent:'center'
    },
    textTitle:{
        fontWeight:'bold'
    },
    card:{
        // backgroundColor:'#e7ebef',
       
        
    },
    cardWrapper:{
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
    listOrder:{
        flexDirection:'row', 
        justifyContent:'space-between',
        paddingHorizontal:8,
        backgroundColor:'#5e5c5d',
        height:25,
        alignItems:'center'
        
    },
    listMenu:{
        flexDirection:'row', 
        justifyContent:'space-between',
        marginHorizontal:8,
        marginVertical:15,
        borderBottomWidth:1,
        borderBottomColor:'#131313',
        height:20
    },
    total:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginHorizontal:8,
        paddingBottom:5
        
    },
    cardList:{
        borderLeftWidth:6,
        borderLeftColor:'#12a650'
    }
   
})