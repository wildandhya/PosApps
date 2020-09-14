import React, { Fragment } from 'react'
import { StyleSheet ,Text, View , Dimensions, Image} from 'react-native' 
import { useSelector, useDispatch } from 'react-redux'
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler'

import {plusBtn, minusBtn} from '../../redux/action/cart'

const Content = ()=>{
    const cart = useSelector((state) => state.cart.data)
    const dispatch = useDispatch()


    const increaseBtn = (id)=>{
        const checkId = cart.findIndex(item => {
          return item.id === id
        });
        dispatch(plusBtn(checkId))
      }
      const decreaseBtn = (id)=>{
        const checkId = cart.findIndex(item => {
          return item.id === id
        });
        dispatch(minusBtn(checkId))
      }
    return(
        <Fragment>
            <ScrollView showsVerticalScrollIndicator={false}>
            {cart.map((item, index)=>{
                return(
                    <View style={styles.container} key={index}>
                        <View style={styles.cart}>
                            <Image source={{uri:item.image}} style={styles.img}/>
                            <View style={{marginLeft:15, width:100}}>
                                <Text style={styles.cartTitle}>{item.menu}</Text>
                                <View style={styles.btnWrapper}>
                                    <TouchableOpacity style={styles.btn} onPress={()=> decreaseBtn(item.id)}>
                                        <Text style={styles.iconBtn}>-</Text>
                                    </TouchableOpacity>
                                        <Text>{item.qty}</Text>
                                    <TouchableOpacity style={styles.btn} onPress={()=> increaseBtn(item.id)}>
                                        <Text style={styles.iconBtn}>+</Text>
                                    </TouchableOpacity >
                                </View>
                            </View>
                        </View>
                        <View>
                            <Text style={styles.price}>Rp.{item.qty * item.price}</Text>
                        </View>
                    </View>
                )
            })}
            </ScrollView>
        </Fragment>
        
    )
}

export default Content
const {height, width} = Dimensions.get('screen')
const styles = StyleSheet.create({
    container:{
        paddingHorizontal:18,
        width,
        flexDirection:'row'
    },
    cart:{
        backgroundColor:'#fafafc',
        width:250,
        height:80,
        borderRadius:10,
        borderBottomWidth: 3,
        borderColor:'#f7fafa',
        flexDirection:'row',
        marginBottom:20
    },
    cartTitle:{
        fontSize:14,
        fontWeight:'bold',
    },
    img:{
        width:80,
        height:80,
        borderRadius:10,
    },
    price:{
        marginLeft:10,
        marginTop:30
    },
    btnWrapper:{
        flexDirection:'row', 
        justifyContent:"space-between",
        marginTop:15
    },
    btn:{
        width:27,
        height:23,
        borderRadius:6,
        backgroundColor:'#e70510',
    },
    iconBtn:{
        fontSize:15,
        fontWeight:'bold',
        textAlign:'center',
        color:'white'
    }
})