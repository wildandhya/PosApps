import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Image,
  Dimensions,
} from 'react-native';
import {Input} from "react-native-elements"
import Icon from "react-native-vector-icons/Ionicons"
import {TouchableOpacity} from 'react-native-gesture-handler';
import {loginAction} from '../../redux/action/auth';
import {useDispatch, useSelector} from 'react-redux';
import {loginApi} from '../../utils/http'
import {Formik} from 'formik';
import * as yup from 'yup';

const Login = ({navigation}) => {
  const dispatch = useDispatch();

  const {user, isLogged} = useSelector((state) => state.auth);
  const [showPassword, setShowPassword] = useState(false)

  const handleGoTo = (screen) => {
    navigation.navigate(screen);
  };

  const formValidation = yup.object().shape({
    email: yup.string().required().label('email').email(),
    password: yup
      .string()
      .required()
      .label('password')
      .min(5, 'your password is to weak')
      .max(10),
  });

  const handleSubmit = async (value)=>{
    try{
      let respons = await loginApi(value)
      console.log(respons)
      if (respons.data.success == true) {
        handleGoTo('Home');
      }
    }catch(error){
      const {response} = error
      console.log(response)
    }
  
  }

  return (
    <View style={style.container}>
      <View style={style.subContainer}>
        <View style={style.LoginHeader}>
          <Text style={style.textLogin}>Login</Text>
          <Text style={style.subTextLogin}>Enter your email and password</Text>
        </View>
        <Formik
          initialValues={{email: '', password: ''}}
          // validationSchema={formValidation}
          onSubmit={(values, actions) => {
            actions.resetForm();
            handleSubmit(values)
            dispatch(loginAction(values));
          }}>
          {(formikProps) => (
            <View>
              <View style={style.inputWrapper}>
                <View style={style.emailWrap}>
                  <Text style={style.label}>Email</Text>
                  <Input
                    inputContainerStyle={style.textInput}
                    placeholder="Email"
                    value={formikProps.values.email}
                    onChangeText={formikProps.handleChange('email')}
                  />
                   {/* <Text>{formikProps.errors.email}</Text> */}
                </View>
                <View style={style.passwordWrapp}>
                  <Text style={style.label}>Password</Text>
                  <Input
                    placeholder="Password"
                    inputContainerStyle={style.textInput}
                    secureTextEntry={!showPassword}
                    value={formikProps.values.password}
                    rightIcon={
                      <TouchableOpacity onPress={()=> setShowPassword(!showPassword)}>
                        <Icon name={showPassword === false?"eye-off-outline":"eye-outline"} size={22} />
                      </TouchableOpacity>
                    }
                    onChangeText={formikProps.handleChange('password')}
                  />
                   {/* <Text>{formikProps.errors.password}</Text> */}
                </View>
              </View>
              <Text style={style.forgotPasswordText}>Forgot Password?</Text>
              <View style={style.btnWrapper}>
                <TouchableOpacity style={style.btnSubmit} onPress={formikProps.handleSubmit}>
                  <Text style={style.textBtn}>Login</Text>
                </TouchableOpacity>
                <View style={style.directSignUp}>
                  <Text style={style.textSignupAccount}>
                    Don't have an account?
                  </Text>
                  <TouchableOpacity
                    onPress={() => navigation.navigate('Register')}>
                    <Text style={style.textSignup}>SignUp</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          )}
        </Formik>
      </View>
    </View>
  );
};

export default Login;

const { width, height } = Dimensions.get("screen")
const style = StyleSheet.create({
    container: {
        backgroundColor: "#fcfcfc",
        height
    },
    subContainer: {
        marginTop: 130,
        marginHorizontal: 25,
        display:'flex'
    },
    LoginHeader: {

    },
    textLogin: {
        fontSize: 29,
        color: "#181725",
        fontWeight: "bold"
    },
    subTextLogin: {
        fontSize: 16,
        color: "#7c7c7c",
        marginTop: 15,
        fontWeight: 'normal'
    },
    inputWrapper: {
        marginTop: 40
    },
    textInput: {
        borderBottomColor: "#e2e2e2",
        borderBottomWidth: 1,
        fontSize:18,
        color:"#181725",
    },
    iconCheck:{
        color:'#53b175'
    },
    passwordWrapp:{
        marginTop:30
    },
    label: {
        fontSize: 16,
        color: "#7c7c7c",
        fontWeight: 'normal'
    },
    forgotPasswordText:{
        fontSize:14,
        color:"#181725",
        alignSelf:'flex-end',
        marginTop:20
    },
    btnWrapper:{
        marginTop:30
    },
    btnSubmit:{
        backgroundColor:"#53b175",
        paddingVertical:18,
        borderRadius:15,
    },
    textBtn:{
        color:"#fff",
        textAlign:'center',
        fontSize:18,
        fontWeight:"600"
    },
    directSignUp:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
        marginTop:25
    },
    textSignupAccount:{
        color:'#030303',
        fontSize:14,
        fontWeight:'bold'
    },
    textSignup:{
        color:"#53b175",
        fontSize:14,
        fontWeight:'600',
        marginLeft:3

    }
})
