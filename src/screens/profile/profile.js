import React from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  Image,
  Text,
  StatusBar,
} from 'react-native';
import {profileImage} from '../../assets';
import {TouchableOpacity, FlatList} from 'react-native-gesture-handler';
import {lagoutAction} from '../../redux/action/auth';
import {useSelector, useDispatch} from 'react-redux';
import {ListItem, Icon} from 'react-native-elements';
import {primary} from '../../assets/color/index';
import Pencil from 'react-native-vector-icons/EvilIcons';
import Exit from 'react-native-vector-icons/Feather';
import CardId from 'react-native-vector-icons/AntDesign';
import Pin from 'react-native-vector-icons/Ionicons';

const Profile = ({navigation}) => {
  const dispatch = useDispatch();
  const handleGoTo = (screen) => {
    navigation.navigate(screen);
  };
  const {user} = useSelector((state) => state.auth);
  console.log(user);

  const list = [
    {
      title: 'Order',
      icon: 'shopping-bag',
      type: 'Feather',
    },
    {
      title: 'My Detail',
      icon: 'idCard',
      type: 'AntDesign',
    },
    {
      title: 'Delevery Address',
      icon: 'md-location-sharp',
      type: 'Ionicons',
    },
  ];

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#fff" />
      <View style={styles.subContainer}>
        <View style={styles.profileWrapp}>
          <Image source={profileImage} style={styles.userImg} />
          <View style={styles.textContainer}>
            <View style={{display: 'flex', flexDirection: 'row'}}>
              <Text style={{color: '#000', fontWeight: 'bold', fontSize: 20}}>
                Wildan
              </Text>
              <TouchableOpacity>
                <Pencil name="pencil" size={27} color={primary} />
              </TouchableOpacity>
            </View>
            <Text style={{color: '#7c7c7c', fontSize: 16}}>
              Wildandhya15@gmail.com
            </Text>
          </View>
        </View>
        <View style={{marginTop: 30}}>
          {list.map((item, i) => (
            <ListItem bottomDivider>
              <Icon name={item.icon} />
              <ListItem.Content>
                <ListItem.Title>{item.title}</ListItem.Title>
              </ListItem.Content>
              <ListItem.Chevron size={26} color="#181725" />
            </ListItem>
          ))}
        </View>
        <View style={{marginTop: 50}}>
          <TouchableOpacity style={styles.btnLogout}>
            <Text style={styles.textBtn}>Logout</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Profile;

const {height, width} = Dimensions.get('screen');
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    height,
  },
  profileWrapp: {
    display: 'flex',
    flexDirection: 'row',
  },
  subContainer: {
    marginHorizontal: 25,
    marginTop: 40,
  },
  textContainer: {
    alignSelf: 'center',
    marginLeft: 8,
  },
  userImg: {
    width: 70,
    height: 70,
    borderRadius: 40,
    borderColor: '#d9d9d9',
    borderWidth: 1,
  },
  btnLogout: {
    backgroundColor: '#f2f3f2',
    display: 'flex',
    flexDirection: 'row',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textBtn: {
    color: primary,
    padding: 16,
    fontSize: 20,
    fontWeight: 'bold',
  },
});
