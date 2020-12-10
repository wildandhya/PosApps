import React, { Fragment } from 'react'
import {View, Text, Image, ScrollView, TextInput, Button, FlatList} from 'react-native'

import styles from '../../styles/listFood'
import {addMenu} from '../../redux/action/cart'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useSelector , useDispatch} from 'react-redux'
import { deleteProductCreator, fetchProduct } from '../../redux/action/product'
import {localhost} from '../../utils/http'
import Axios from 'axios'

const ListFood = ({navigation}) =>{
    const product = useSelector((state) => state.product.data.data)
    const pageInfo = useSelector((state) => state.product.data.pageInfo)
    const cart = useSelector((state) => state.cart.data)
    const admin = useSelector((state) => state.auth.isAdmin)

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
    const handleLoadMore = ()=>{
       dispatch(fetchProduct(1+1))
    }
    return(
       <FlatList
       style={{flexDirection:'row', flexWrap:'wrap', width:'100%'}}
       data={product}
       renderItem={({item})=>{
         return(
          <View style={{ alignContent:'space-between'}}>
          
                      <View style={styles.cardFood} >
                          <TouchableOpacity  onPress={()=> addToCart(item.id, item.menu, item.price, item.image)}>
                              <Image source={{uri:item.image.replace('localhost', localhost)}} style={styles.foodImg}/>
                          </TouchableOpacity>
                          <View style={{maxWidth:100}}>
                            <Text style={styles.foodTitle}>{item.menu}</Text>
                            <Text style={styles.foodPrice}>Rp.{item.price}</Text>
                          </View>
                          {admin?(<View style={styles.editDeleteWrapp}>
                              <TouchableOpacity style={styles.editBtn} onPress={()=>navigation.navigate('EditProduct')}>
                                  <Text style={{color:'#000'}}>Edit</Text>
                              </TouchableOpacity>
                              <TouchableOpacity style={styles.deleteBtn} onPress={()=>dispatch(deleteProductCreator(item.id))}>
                                  <Text>Delete</Text>
                              </TouchableOpacity>
                          </View>):(null)}
                          
                      </View>
          
   </View>
         )
       }}
       keyExtractor={item=> item.id}
      //  onEndReached={()=> handleLoadMore()}
      //  onEndReachedThreshold={0.1}
       />
             
    )
}

export default ListFood