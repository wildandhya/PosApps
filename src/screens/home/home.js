import React from 'react'
import {StyleSheet, View, Text, Image, ScrollView, TextInput} from 'react-native'

import styles from '../../styles/home'
import { homeIcon, user, search, saltedEgg, cart, history , add} from '../../assets'
import { Avatar , Badge} from 'react-native-elements'
import { TouchableOpacity } from 'react-native-gesture-handler'

const Home = ({navigation})=>{
    const goToCart = (screen)=>{
        navigation.navigate(screen)
    }
    return(
        <View style={styles.container}>
            <View style={styles.mainContent}>
                <View style={{flexDirection:'row'}}>
                    <Image source={add} style={styles.addBtn}/>
                    <View style={styles.searchWrapper}>
                        <TextInput placeholder="Search" style={styles.searchBar}/>
                        <Image source={search} style={styles.iconSearch}/>
                    </View>
                    {/* <Image source={user} style={styles.imageCart}/>                     */}
                    <TouchableOpacity onPress={()=> goToCart('Cart')}>
                        <View style={styles.imageCart}>
                            <Avatar
                                rounded
                                source={cart}
                                size='small'
                            />
                            <Badge
                                status="error" value="0"
                                containerStyle={{ position: 'absolute', top: -4, right: -4 }}
                            />
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.foodContainer}>
                    <Text>Food</Text>
                    <ScrollView horizontal scrollIndicatorInsets={false}>
                        <View style={styles.foodWrapper}>
                            <View style={styles.cardFood}>
                                <Image source={saltedEgg} style={styles.foodImg}/>
                                <Text style={styles.foodTitle}>Mie Goreng Rica-Rica</Text>
                                <Text style={styles.foodPrice}>Rp. 10000</Text>
                            </View>
                            <View style={styles.cardFood}>
                                <Image source={saltedEgg} style={styles.foodImg}/>
                                <Text style={styles.foodTitle}>Mie Goreng Rica-Rica</Text>
                                <Text style={styles.foodPrice}>Rp. 10000</Text>
                            </View>
                            <View style={styles.cardFood}>
                                <Image source={saltedEgg} style={styles.foodImg}/>
                                <Text style={styles.foodTitle}>Mie Goreng Rica-Rica</Text>
                                <Text style={styles.foodPrice}>Rp. 10000</Text>
                            </View>
                        </View>
                    </ScrollView>
                </View>
                <View style={styles.foodContainer}>
                    <Text>Drink</Text>
                    <ScrollView horizontal scrollIndicatorInsets={false}>
                        <View style={styles.foodWrapper}>
                            <View style={styles.cardFood}>
                                <Image source={saltedEgg} style={styles.foodImg}/>
                                <Text style={styles.foodTitle}>Mie Goreng Rica-Rica</Text>
                                <Text style={styles.foodPrice}>Rp. 10000</Text>
                            </View>
                            <View style={styles.cardFood}>
                                <Image source={saltedEgg} style={styles.foodImg}/>
                                <Text style={styles.foodTitle}>Mie Goreng Rica-Rica</Text>
                                <Text style={styles.foodPrice}>Rp. 10000</Text>
                            </View>
                            <View style={styles.cardFood}>
                                <Image source={saltedEgg} style={styles.foodImg}/>
                                <Text style={styles.foodTitle}>Mie Goreng Rica-Rica</Text>
                                <Text style={styles.foodPrice}>Rp. 10000</Text>
                            </View>
                        </View>
                    </ScrollView>
                </View>
            </View>
            <View style={styles.btnNavigation}>
                <View style={styles.btnIcon}>
                    <Image source={homeIcon} style={styles.imageUser}/>
                    <Text style={styles.btnTitle}>Home</Text>
                </View>
                <View style={styles.btnIcon}>
                    <Image source={history} style={styles.imageUser} />
                    <Text style={styles.btnTitle}>History</Text>
                </View>
                <View style={styles.btnIcon}>
                <Image source={user} style={styles.imageUser} />
                <Text style={styles.btnTitle}>Account</Text>
                </View>
            </View>
        </View>
    )
}

export default Home
