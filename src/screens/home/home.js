import React from 'react'
import {View, Text, Image} from 'react-native'

import styles from '../../styles/home'
import { homeIcon, user } from '../../assets'
const Home = ()=>{
    return(
        <View style={{flex:1}}>
            <View style={{flex:1, backgroundColor: 'blue'}}></View>
            <View style={{height:54, flexDirection:'row'}}>
                <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
                    <Image source={homeIcon} style={styles.imageUser}/>
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
                    <Image source={user} style={styles.imageUser}/>
                    <Text style={{fontSize:10, color:'#545454', marginTop:4}}>Account</Text>
                </View>
            </View>
        </View>
    )
}

export default Home

