import React, { Fragment } from 'react'
import {View, Text, Image, ScrollView, TextInput, Button, FlatList} from 'react-native'

import styles from '../../styles/listFood'
import {addMenu} from '../../redux/action/cart'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useSelector , useDispatch} from 'react-redux'
import { deleteProductCreator } from '../../redux/action/product'

const ListFood = () =>{
    const product = useSelector((state) => state.product.data)
    const cart = useSelector((state) => state.cart.data)

    const dispatch = useDispatch()

    const addToCart = (id, menu, price, image) => {
        const cartItem = cart;
        let alreadyExist = false;
        cartItem.forEach((item) => {
          if (item.id === id) {
            alreadyExist = true;
            item.qty++;
          }
        });
        if (!alreadyExist) {
          const cartData = {
            id: id,
            menu: menu,
            price: price,
            image: image,
            qty: 1,
          };
          dispatch(addMenu(cartData));
        }
      };
    return(
        <View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.foodWrapper}>
                {product.map((item, index)=>{
                    return(
                        <View key={index}>
                            <View style={styles.cardFood} >
                                <TouchableOpacity  onPress={()=> addToCart(item.id, item.menu, item.price, item.image)}>
                                    <Image source={{uri:item.image}} style={styles.foodImg}/>
                                </TouchableOpacity>
                                <View>
                                  <Text style={styles.foodTitle}>{item.menu}</Text>
                                  <Text style={styles.foodPrice}>Rp.{item.price}</Text>
                                </View>
                                <TouchableOpacity onPress={()=>dispatch(deleteProductCreator(id))}>
                                  <Text>Delete</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                            
                        )
                })} 
                </View>
             </ScrollView> 
         </View>
 
             
    )
}

export default ListFood