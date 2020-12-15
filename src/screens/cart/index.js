import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  StatusBar,
  Text,
  Image,
  Button,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {TouchableOpacity, ScrollView} from 'react-native-gesture-handler';
import {plusBtn, minusBtn, deleteMenu} from '../../redux/action/cart';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import Animated from 'react-native-reanimated';
import BottomSheet from 'react-native-bottomsheet-reanimated';
import {primary, textBtnColor} from '../../assets/color';
import {ListItem, Avatar} from 'react-native-elements';
import {localhost} from '../../utils/http';
import Icon from 'react-native-vector-icons/Feather';

const Cart = ({navigation}) => {
  const handleGoTo = (screen) => {
    navigation.navigate(screen);
  };
  const cart = useSelector((state) => state.cart.data);
  const [backgroundDrawer, setBackgroundDrawer] = useState(false);
  const dispatch = useDispatch();

  const increaseBtn = (id) => {
    const checkId = cart.findIndex((item) => {
      return item.id === id;
    });
    dispatch(plusBtn(checkId));
  };
  const decreaseBtn = (id) => {
    const checkId = cart.findIndex((item) => {
      return item.id === id;
    });
    dispatch(minusBtn(checkId));
  };
  const RightAction = (id) => {
    return (
      <TouchableOpacity onPress={() => dispatch(deleteMenu(id))}>
        <View style={styles.rigthAction}>
          <Text style={styles.actionText}>Delete</Text>
        </View>
      </TouchableOpacity>
    );
  };
  const list = [
    {
      title: 'Delivery',
      data: 'Select Method',
    },
    {
      title: 'Payment',
      data: 'flight-takeoff',
    },
    {
      title: 'Total',
      data: cart.reduce((total, item) => {
        return total + item.price * item.qty;
      }, 0),
    },
  ];


  const renderContent = () => (
    <View style={styles.drawer}>
      <View style={styles.drawerContent}>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginHorizontal: 10,
          marginTop:6
        }}>
        <Text style={styles.titleCheckout}>Checkout</Text>
        <TouchableOpacity onPress={()=> sheetRef.current.snapTo(1)}>
          <Icon name="x" size={25} />
        </TouchableOpacity>
      </View>
        {list.map((item, i) => (
          <ListItem key={i} bottomDivider>
            <ListItem.Content>
              <ListItem.Title>{item.title}</ListItem.Title>
              <ListItem.Subtitle>{item.data}</ListItem.Subtitle>
            </ListItem.Content>
            <ListItem.Chevron size={33} color="#181725" />
          </ListItem>
        ))}
        <TouchableOpacity style={styles.btnDrawer}>
          <Text style={styles.btnText}>Checkout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  const sheetRef = React.createRef();
  const fall = new Animated.Value(1);
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#fff" />
      <BottomSheet
        ref={sheetRef}
        
        snapPoints={[340, 0]}
        borderRadius={10}
        renderContent={renderContent}
        initialSnap={1}
        callbackNode={fall}
        enabledGestureInteraction={true}
      />
      <Animated.View
        style={{
          flex: 1,
          opacity: Animated.add(0.1, Animated.multiply(fall, 3.0)),
        }}>
        <Text style={styles.headerTitle}>My Cart</Text>
        <View style={styles.contentWrapp}>
          {cart.map((item, index) => {
            return (
              <Swipeable
                renderRightActions={() => RightAction(item.id)}
                key={index}>
                <View>
                  <View style={styles.cartWrapp}>
                    <View style={{flexDirection: 'row'}}>
                      <Image
                        source={{
                          uri: item.image.replace('localhost', localhost),
                        }}
                        style={styles.img}
                      />
                      <View style={{marginLeft: 20}}>
                        <Text style={styles.cartTitle}>{item.menu}</Text>
                        <Text style={styles.price}>
                          Rp.{item.qty * item.price}
                        </Text>
                      </View>
                    </View>
                    <View style={styles.btnWrapper}>
                      <TouchableOpacity
                        style={styles.btnCard}
                        onPress={() => increaseBtn(item.id)}>
                        <Text style={styles.iconBtnCard}>+</Text>
                      </TouchableOpacity>
                      <Text style={{color: '#fff'}}>{item.qty}</Text>
                      <TouchableOpacity
                        style={styles.btnCard}
                        onPress={() => decreaseBtn(item.id)}>
                        <Text style={styles.iconBtnCard}>-</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </Swipeable>
            );
          })}
        </View>
      </Animated.View>
      <View style={styles.drawerWrapp}>
        <TouchableOpacity
          style={styles.btnOpenDrawer}
          onPress={() => sheetRef.current.snapTo(0)}>
          <Text style={styles.btnText}>Go to Checkout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Cart;

const {height, width} = Dimensions.get('screen');
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height,
    display: 'flex',
    flex: 1,
  },
  contentWrapp: {
    flex: 1,
    marginTop: 20,
    marginHorizontal: 10,
  },
  cartWrapp: {
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#eee',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  cartTitle: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  img: {
    width: 80,
    height: 80,
    borderRadius: 10,
  },
  price: {
    marginTop: 5,
  },
  btnWrapper: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#53b175',
    borderRadius: 20,
  },
  btnCard: {
    width: 27,
    height: 23,
  },
  iconBtnCard: {
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
  },
  rigthAction: {
    backgroundColor: '#53b175',
    justifyContent: 'center',
    alignItems: 'flex-end',
    height: 80,
    borderRadius: 10,
    padding: 20,
    marginHorizontal: 10,
  },
  actionText: {
    color: 'white',
  },
  headerTitle: {
    fontSize: 23,
    fontWeight: 'bold',
    color: '#323335',
    textAlign: 'center',
  },
  cartTotal: {
    fontSize: 15,
    fontWeight: 'bold',
    paddingLeft: 20,
    color: '#323335',
  },
  TotalPrice: {
    fontSize: 14,
    marginLeft: 5,
  },
  btnDrawer: {
    borderRadius: 15,
    backgroundColor: primary,
    padding: 15,
    marginTop: 10,
  },
  btnOpenDrawer: {
    borderRadius: 15,
    backgroundColor: primary,
    marginBottom: 28,
    padding: 15,
    marginHorizontal: 20,
  },
  btnText: {
    color: textBtnColor,
    textAlign: 'center',
    fontSize: 18,
  },
  drawer: {
    backgroundColor: 'white',
    height: 450,
    borderWidth: 1,
    borderColor: '#eee',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    alignContent: 'center',
    elevation: 10,
    shadowOffset: {width: 5, height: 5},
    shadowColor: '#181725',
    shadowOpacity: 1,
    shadowRadius: 10,
  },
  drawerContent: {
    marginHorizontal: 10,
  },
  titleCheckout: {
    color: '#181725',
    fontSize: 24,
    fontWeight: 'bold',
  },
  drawerWrapp: {
    width,
  },
});
