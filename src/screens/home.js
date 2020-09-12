import React from 'react'
import {View, Text} from 'react-native'

import styles from '../styles/home'
const Home = ()=>{
    return(
        <View style={{flex:1}}>
            <View style={{flex:1, backgroundColor: 'blue'}}></View>
            <View style={{height:54, backgroundColor: 'yellow', flexDirection:'row'}}>
                <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
                    <View style={{width:26, height:26, backgroundColor:'white'}}></View>
                    <Text style={{fontSize:10, color:'#545454', marginTop:4}}>Home</Text>
                </View>
                <View style={{flex:1, alignItems:'center', justifyContent:'center'}} >
                    <View style={{width:26, height:26, backgroundColor:'white'}}></View>
                    <Text style={{fontSize:10, color:'#545454', marginTop:4}} >Order</Text>
                </View >
                <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
                    <View style={{width:26, height:26, backgroundColor:'white'}}></View>
                    <Text style={{fontSize:10, color:'#545454', marginTop:4}}>History</Text>
                </View>
                <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
                    <View style={{width:26, height:26, backgroundColor:'white'}}></View>
                    <Text style={{fontSize:10, color:'#545454', marginTop:4}}>Account</Text>
                </View>
            </View>
        </View>
    )
}

export default Home

