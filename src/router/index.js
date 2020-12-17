import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  Home,
  Login,
  Register,
  WelcomeAuth,
  SplashScreen,
  Cart,
  ModalSuccess,
  AddProduct,
  Profile,
  EditProduct,
} from '../screens';
import Store from 'react-native-vector-icons/MaterialIcons';
import CartIcon from 'react-native-vector-icons/Ionicons';
import User from 'react-native-vector-icons/FontAwesome';
import {primary} from '../assets/color';
import {useSelector} from 'react-redux'


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="WelcomeAuth" component={WelcomeAuth} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="AddProduct" component={AddProduct} />
    </Stack.Navigator>
  );
};
const CartStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Cart" component={Cart} />
      <Stack.Screen name="ModalSuccess" component={ModalSuccess} />
    </Stack.Navigator>
  );
};
const ProfileStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="EditProduct" component={EditProduct} />
    </Stack.Navigator>
  );
};
const ButtomNavigator = () => {
 const data = useSelector((state) => state.cart.data)
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: primary,
        inactiveTintColor:'#181725',
        style: {height: 70, paddingBottom:10, paddingTop:6}, 
      }}
      >
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          title: 'Home',
          tabBarIcon: ({color, size}) => {
            return <Store name="storefront" color={color} size={size} />;
          },
        }}
      />
      <Tab.Screen name="Cart" component={CartStack}  options={{
          title: 'Cart',
          tabBarIcon: ({color, size}) => {
            return <CartIcon name="ios-cart-outline" color={color} size={size} />;
          },
          tabBarBadge:data.length,
          tabBarBadgeStyle:{backgroundColor:primary, color:'#fff'}
        }}
        />
      <Tab.Screen name="Profile" component={ProfileStack}  options={{
          title: 'Profile',
          tabBarIcon: ({color, size}) => {
            return <User name="user-o" size={size} color={color} />;
          },
        }} />
    </Tab.Navigator>
  );
};

export default ButtomNavigator;
