
import React from 'react'
import {StyleSheet, View, Text, Image, ScrollView, TextInput} from 'react-native'

import styles from '../../styles/headerHome'
import {  search, cartImage, add} from '../../assets'
import { Avatar , Badge} from 'react-native-elements'
import { TouchableOpacity } from 'react-native-gesture-handler'
import {useSelector, useDispatch} from 'react-redux'

import {searchMenuCreator} from '../../redux/action/product'


const Header = ({navigation}) =>{
    const cart = useSelector((state) => state.cart.data)
    const admin = useSelector((state) => state.auth.isAdmin)
    const dispatch = useDispatch()

    if(admin){
    return(
        <View>
            <View style={{flexDirection:'row', height:50}}>
                <TouchableOpacity onPress={()=>navigation.navigate('AddProduct')}>
                    <Image source={add} style={styles.addBtn}/>
                </TouchableOpacity>
            <View style={styles.searchWrapper}>
                <TextInput placeholder="Search" style={styles.searchBar} onChangeText={(Text)=> dispatch(searchMenuCreator(Text, 'menu'))}/>
                <Image source={search} style={styles.iconSearch}/>
            </View>
            <TouchableOpacity onPress={()=> navigation.navigate('Cart')}>
                <View style={styles.imageCart}>
                    <Avatar
                        rounded
                        source={cartImage}
                        size='small'
                    />
                    <Badge
                        status="error" value={cart.length}
                        containerStyle={{ position: 'absolute', top: -4, right: -4 }}
                    />
                </View>
            </TouchableOpacity>
        </View>
    </View>
    )
  }else{
    return(
        <View>
            <View style={{flexDirection:'row', height:50, justifyContent:'center'}}>
            <View style={styles.searchWrapper}>
                <TextInput placeholder="Search" style={styles.searchBar} onChangeText={(Text)=> dispatch(searchMenuCreator(Text, 'menu'))}/>
                <Image source={search} style={styles.iconSearch}/>
            </View>
        </View>
    </View>
    )
  }
}

export default Header