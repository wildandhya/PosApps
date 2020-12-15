import React, {useState} from 'react';
import {StyleSheet, Text, View, Dimensions} from 'react-native';
import {Button} from 'react-native-elements';
import {useSelector} from 'react-redux';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Animated from 'react-native-reanimated';
import BottomSheet from 'reanimated-bottom-sheet';
import {primary, textBtnColor} from '../../assets/color';
import {ListItem, Avatar} from 'react-native-elements';

const Checkout = ({onPress}) => {
  const cart = useSelector((state) => state.cart.data);
  const [backgroundDrawer, setBackgroundDrawer] = useState(false);
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
      data: 
      cart.reduce((total, item) => {
        return total + item.price * item.qty;
      }, 0)
    },
  ];
  const renderContent = () => (
    <View style={styles.drawer}>
      <View style={styles.cart}>
          <Text style={styles.titleCheckout}>Checkout</Text>
        {list.map((item, i) => (
          <ListItem key={i} bottomDivider>
            <ListItem.Content>
              <ListItem.Title>{item.title}</ListItem.Title>
              <ListItem.Subtitle>{item.data}</ListItem.Subtitle>
            </ListItem.Content>
            <ListItem.Chevron size={33} color="#181725" />
          </ListItem>
        ))}
        <Button
          title="Buy"
          type="solid"
          buttonStyle={styles.btnDrawer}
          onPress={onPress}
        />
      </View>
    </View>
  );

  const sheetRef = React.createRef()
  const fall = new Animated.Value(1)
  return (
    <View
      style={
        backgroundDrawer === true
          ? {...styles.container, backgroundColor: '#181725'}
          : styles.container
      }>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => sheetRef.current.snapTo(0)}>
        <Text style={styles.btnText}>Checkout</Text>
      </TouchableOpacity>

      <BottomSheet
        ref={sheetRef}
        snapPoints={[450, 300, 0]}
        borderRadius={10}
        renderContent={renderContent}
        initialSnap={1}
        callbackNode={fall}
        enabledGestureInteraction={true}
      />
    </View>
  );
};

export default Checkout;
const {height, width} = Dimensions.get('screen');
const styles = StyleSheet.create({
  container: {
    width,
  },
  cart: {
    backgroundColor: 'white',
    marginHorizontal:15,
    marginTop: 30,
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
    marginTop:30
    
  },
  btn: {
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
  titleCheckout:{
      color:"#181725",
      fontSize:24,
      fontWeight:'bold'
  }
});
