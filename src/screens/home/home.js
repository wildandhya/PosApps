import React, { useEffect } from 'react'
import {StyleSheet, View, Text, Image, ScrollView, TextInput} from 'react-native'

import styles from '../../styles/home'
import {useDispatch} from 'react-redux'

import {fetchProduct} from '../../redux/action/product'
import  Header  from '../../components/home/header'
import ListFood from '../../components/home/listfood'

const Home = ({navigation})=>{
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(fetchProduct(1))
    }, [])
    const handleGoTo = (screen)=>{
        navigation.navigate(screen)
    }
    return(
        <View style={styles.container}>
            <View style={styles.mainContent}>
                <Header navigation={navigation}/>
                <ListFood navigation={navigation}/>  
            </View>
        </View>
    )
}

export default Home
