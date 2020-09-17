import React, { Fragment } from 'react'
import { Text, View , Image, Animated} from 'react-native' 
import { useSelector, useDispatch } from 'react-redux'
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler'

import {plusBtn, minusBtn, deleteMenu} from '../../redux/action/cart'

import Swipeable from 'react-native-gesture-handler/Swipeable'

import styles from '../../styles/listCart'


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

     
      const  RightAction = (id)=>{
        //   const scale = dragX.interpolate({
        //       inputRange: [-100, 0],
        //       ouputRange: [1, 0]
        //   })
          return(
              <TouchableOpacity onPress={()=>dispatch(deleteMenu(id))}>
               <View style={styles.rigthAction}>
                   <Text style={styles.actionText}>Delete</Text>
               </View>
            </TouchableOpacity>
          )
          
      }
    return(
        <Fragment>
            <ScrollView showsVerticalScrollIndicator={false}>
            {cart.map((item, index)=>{
                return(
                    <Swipeable renderRightActions={()=>RightAction(item.id)}>
                       <View style={styles.container} key={index}>
                           <View style={styles.cart}>
                            <View style={{flexDirection:'row'}}>
                                <Image source={{uri:item.image}} style={styles.img}/>
                                <View style={{marginLeft:20}}>
                                    <Text style={styles.cartTitle}>{item.menu}</Text>
                                    <Text style={styles.price}>Rp.{item.qty * item.price}</Text>
                                </View>
                            </View>
                            <View style={styles.btnWrapper}>
                                    <TouchableOpacity style={styles.btn} onPress={()=> increaseBtn(item.id)}>
                                        <Text style={styles.iconBtn}>+</Text>
                                    </TouchableOpacity>
                                        <Text style={{color:'#fff'}}>{item.qty}</Text>
                                    <TouchableOpacity style={styles.btn} onPress={()=> decreaseBtn(item.id)}>
                                        <Text style={styles.iconBtn}>-</Text>
                                    </TouchableOpacity >
                                </View>         
                            
                            {/* <TouchableOpacity onPress={)}>
                                <Text>Delete</Text>
                            </TouchableOpacity> */}
                        </View>
                      </View>
                    </Swipeable>
                )
            })}
            </ScrollView>
        </Fragment>
        
    )
}

export default Content
