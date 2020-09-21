import React from 'react'
import { View, Text, Image, TouchableOpacity} from 'react-native'

import styles from '../../src/styles/buttonNavigation'
import { homeIcon, user, history } from '../assets'
import { useSelector , useDispatch} from 'react-redux'
import {  search, cartImage, add} from '../assets'
import { Avatar , Badge} from 'react-native-elements'

const ButtonNavigation = ({navigation}) =>{
    const admin = useSelector((state) => state.auth.isAdmin)
    const cart = useSelector((state) => state.cart.data)
    if(admin){
    return(
        <View style={styles.btnNavigation}>
            <View style={styles.btnIcon}>
                <TouchableOpacity onPress={()=>navigation.navigate('Home')}>
                    <Image source={homeIcon} style={styles.imageUser}/>
                    <Text style={styles.btnTitle}>Home</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.btnIcon}>
                <Image source={history} style={styles.imageUser} />
                <Text style={styles.btnTitle}>History</Text>
            </View>
            <TouchableOpacity style={styles.btnIcon} onPress={()=>navigation.navigate('Profile')}>
                <Image source={user} style={styles.imageUser} />
                <Text style={styles.btnTitle}>Account</Text>
            </TouchableOpacity>
        </View>
    )
  }else{
    return(
        <View style={styles.btnNavigation}>
            <View style={styles.btnIcon}>
                <TouchableOpacity onPress={()=>navigation.navigate('Home')}>
                    <Image source={homeIcon} style={styles.imageUser}/>
                    <Text style={styles.btnTitle}>Home</Text>
                </TouchableOpacity>
            </View>
            <View  style={styles.btnIcon}>
            <TouchableOpacity onPress={()=> navigation.navigate('Cart')}>
                <View style={styles.cart}>
                    <Avatar
                        rounded
                        source={cartImage}
                        size='small'
                    />
                    <Badge
                        status="error" value={cart.length}
                        containerStyle={{ position: 'absolute', top: -4, right: -15 }}
                    />
                </View>
                {/* <Text style={styles.btnTitle}>Cart</Text> */}
            </TouchableOpacity>
            </View>
            <View style={styles.btnIcon}>
            <TouchableOpacity  onPress={()=>navigation.navigate('Profile')}>
                <Image source={user} style={styles.imageUser} />
                <Text style={styles.btnTitle}>Account</Text>
            </TouchableOpacity>
            </View>
        </View>
    )
  }
}

export default ButtonNavigation