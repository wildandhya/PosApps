import React, { Fragment } from 'react'
import {View, Text, Image, ScrollView, TextInput} from 'react-native'

import styles from '../../styles/listFood'
import {addMenu} from '../../redux/action/cart'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useSelector , useDispatch} from 'react-redux'

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
        <Fragment>
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
                                <Text style={styles.foodTitle}>{item.menu}</Text>
                                <Text style={styles.foodPrice}>Rp.{item.price}</Text>
                            </View>
                        </View>
                            
                        )
                })} 
                </View>
             </ScrollView> 
         </View>
        </Fragment>  
             
    )
}

export default ListFood