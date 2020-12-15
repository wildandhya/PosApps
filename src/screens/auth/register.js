import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Image,
  Dimensions,
} from 'react-native';
import {useDispatch} from 'react-redux';

import Icon from 'react-native-vector-icons/Ionicons';
import {Input} from 'react-native-elements';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {registerAction} from '../../redux/action/auth';
import {Formik} from 'formik';
import * as yup from 'yup';

const Register = ({navigation}) => {
  const dispatch = useDispatch();

  const handleGoTo = (screen) => {
    navigation.navigate(screen);
  };
  const [showPassword, setShowPassword] = useState(false)
  const formValidation = yup.object().shape({
    username: yup.string().required().label('name'),
    email: yup.string().required().label('email').email(),
    password: yup
      .string()
      .required()
      .label('password')
      .min(5, 'Weak')
      .max(15, 'Strenght'),
  });

  return (
    <View style={style.container}>
      <View style={style.subContainer}>
        <View style={style.signUpHeader}>
          <Text style={style.textTitleSignUp}>Sign Up</Text>
          <Text style={style.subtextTitleSignUp}>
            Enter your credentials to continue
          </Text>
        </View>

        <Formik
          initialValues={{username: '', email: '', password: ''}}
        //   validationSchema={formValidation}
          onSubmit={(values, actions) => {
            actions.resetForm();
            dispatch(registerAction(values));
          }}>
          {(formikProps) => (
            <View>
              <View style={style.inputContainer}>
                <View style={style.wrapper}>
                  <Text style={style.label}>Username</Text>
                  <Input
                    inputContainerStyle={style.textInput}
                    containerStyle={{margin: 0}}
                    placeholder="username"
                    value={formikProps.values.username}
                    onChangeText={formikProps.handleChange('username')}
                  />
                  {/* <Text>{formikProps.errors.username}</Text> */}
                </View>
                <View style={style.wrapper}>
                  <Text style={style.label}>Email</Text>
                  <Input
                    inputContainerStyle={style.textInput}
                    containerStyle={{margin: 0}}
                    placeholder="Email"
                    value={formikProps.values.email}
                    onChangeText={formikProps.handleChange('email')}
                  />
                   {/* <Text>{formikProps.errors.email}</Text> */}
                </View>
                <View style={style.wrapper}>
                  <Text style={style.label}>Password</Text>
                  <Input
                    placeholder="Password"
                    inputContainerStyle={style.textInput}
                    containerStyle={{margin: 0}}
                    secureTextEntry={!showPassword}
                    value={formikProps.values.password}
                    onChangeText={formikProps.handleChange('password')}
                    rightIcon={
                      <TouchableOpacity onPress={()=> setShowPassword(!showPassword)}>
                        <Icon name={showPassword === false?"eye-off-outline":"eye-outline"} size={22} />
                      </TouchableOpacity>
                    }
                  />
                   {/* <Text>{formikProps.errors.password}</Text> */}
                </View>
              </View>
              <View style={style.btnWrapper}>
                <TouchableOpacity style={style.btnSubmit} onPress={formikProps.handleSubmit}>
                  <Text style={style.textBtn}>Sign Up</Text>
                </TouchableOpacity>
                <View style={style.directSignUp}>
                  <Text style={style.textSignupAccount}>
                    Already have an account?
                  </Text>
                  <TouchableOpacity
                    onPress={() => navigation.navigate('Login')}>
                    <Text style={style.textSignup}>Login</Text>
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

export default Register;

const {width, height} = Dimensions.get('screen');
const style = StyleSheet.create({
  container: {
    backgroundColor: '#fcfcfc',
    height,
  },
  subContainer: {
    marginTop: 130,
    marginHorizontal: 25,
    display: 'flex',
  },
  signUpHeader: {},
  textTitleSignUp: {
    fontSize: 29,
    color: '#181725',
    fontWeight: 'bold',
  },
  subtextTitleSignUp: {
    fontSize: 16,
    color: '#7c7c7c',
    marginTop: 15,
    fontWeight: 'normal',
  },
  inputContainer: {
    marginTop: 40,
  },
  textInput: {
    borderBottomColor: '#e2e2e2',
    borderBottomWidth: 1,
    fontSize: 18,
    color: '#181725',
  },
  wrapper: {},
  iconCheck: {
    color: '#53b175',
  },
  label: {
    fontSize: 16,
    color: '#7c7c7c',
    fontWeight: 'normal',
  },
  textTerms: {
    fontSize: 14,
    color: '#181725',
    alignSelf: 'flex-end',
    lineHeight: 20,
  },
  terms: {
    color: '#53b175',
  },
  btnWrapper: {
    marginTop: 30,
  },
  btnSubmit: {
    backgroundColor: '#53b175',
    paddingVertical: 18,
    borderRadius: 15,
  },
  textBtn: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '600',
  },
  directSignUp: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 25,
  },
  textSignupAccount: {
    color: '#030303',
    fontSize: 14,
    fontWeight: 'bold',
  },
  textSignup: {
    color: '#53b175',
    fontSize: 14,
    fontWeight: '600',
    marginLeft: 3,
  },
});
