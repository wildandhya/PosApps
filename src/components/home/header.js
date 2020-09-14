
import React from 'react'
import {StyleSheet, View, Text, Image, ScrollView, TextInput} from 'react-native'

import styles from '../../styles/headerHome'
import {  search, cartImage, add} from '../../assets'
import { Avatar , Badge} from 'react-native-elements'
import { TouchableOpacity } from 'react-native-gesture-handler'
import {useSelector, useDispatch} from 'react-redux'

import {searchMenuCreator} from '../../redux/action/product'


const Header = ({onPress}) =>{
    const cart = useSelector((state) => state.cart.data)
    const dispatch = useDispatch()



    return(
        <View>
            <View style={{flexDirection:'row', height:50}}>
            <Image source={add} style={styles.addBtn}/>
            <View style={styles.searchWrapper}>
                <TextInput placeholder="Search" style={styles.searchBar} onChangeText={(Text)=> dispatch(searchMenuCreator(Text, 'menu'))}/>
                <Image source={search} style={styles.iconSearch}/>
            </View>
            <TouchableOpacity onPress={onPress}>
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
}

export default Header