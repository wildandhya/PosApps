import React, {useState} from 'react';
import {StyleSheet, View, Dimensions, Image, Text, Modal} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

const ModalSuccess = ({navigation}) => {
  const handleGoTo = (screen) => {
    navigation.navigate(screen);
  };
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        >
            <View>
                <Text>Your Order has been accepted</Text>
            </View>
        </Modal>
    </View>
  );
};

export default ModalSuccess;

const {height, width} = Dimensions.get('screen');
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#e7ebef',
    height,
    flex: 1,
  },
});
