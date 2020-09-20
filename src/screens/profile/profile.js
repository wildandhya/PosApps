import React from 'react'
import {  StyleSheet,View, Dimensions , Image, Text, ImageBackground} from 'react-native'
import { backIcon, profileImage, saltedEgg } from '../../assets'

import { TouchableOpacity } from 'react-native-gesture-handler'
import RecentOrder from '../../components/profile/recentOrder'
import LastOrder from '../../components/profile/lastOrder'



const Profile = ({navigation})=>{
    const handleGoTo = (screen)=>{
        navigation.navigate(screen)
    }
    return(
        <View style={styles.container}>
            <View style={styles.profileWrapp}>
             <ImageBackground source={saltedEgg} style={styles.backgroundImg}>
                 <Text style={styles.signOut}>Sign Out</Text>
                 <View style={styles.profileHeader}>
                  <Image source={profileImage} style={styles.userImg}/>
                  <Text style={{ color:'#fff', fontWeight:'bold'}}>Wildan Dhya</Text>
                  <Text style={{ color:'#fff'}}>Wildandhya@gmail.com</Text>
                  <TouchableOpacity style={styles.editProfile}>
                      <Text>Edit Profile</Text>
                 </TouchableOpacity>
               </View>
            </ImageBackground>
            </View>
            <View style={styles.segment}>
                <TouchableOpacity>
                   <RecentOrder/>
                </TouchableOpacity>
            </View>
        </View>

    )
}

export default Profile

const {height, width} = Dimensions.get('screen')
const styles = StyleSheet.create({
    container:{
        backgroundColor:'#e7ebef',
        // backgroundColor:'#fff',
        height,
        flex:1
        
    },
    userImg:{
        width:70,
        height:70,
        borderRadius:40,
        borderColor:'#d9d9d9',
        borderWidth:1
    },
    profileHeader:{
        alignItems:"center",
        paddingVertical:20,
        justifyContent:'center',
       
        
    },
    editProfile:{
        borderWidth:1,
        padding:5,
        marginTop:5,
        borderRadius:7,
        backgroundColor:'yellow',
       
    },
    segment:{
        
        
        
    },
    profileWrapp:{
        height:200,
        
    },
    backgroundImg:{
        width:'100%',
        height:'100%',
        opacity:0.7,
        backgroundColor:'black'
    },
    signOut:{
        alignSelf:'flex-end',
        color:'#fff',
        fontWeight:'bold',
        marginRight:8,
        marginTop:5
    }
})