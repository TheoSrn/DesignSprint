import React, { useState } from 'react';
import { StyleSheet, TextInput, Text, TouchableOpacity, View, Image, ScrollView, } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';
import CheckboxComponent from '../Components/CheckBoxComponent'

const LoginScreen = () => {

//   const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [validationErrors, setValidationErrors] = useState({})
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleRememberMe = async () => {
    console.log('Remember me Pressed');
  };

  const handleLogin = async () => {
    console.log('Login Pressed');
    // navigation.navigate('ACCUEIL');
  };

  const ForgotPassword = async () => {
    console.log('Login Pressed');
  };

  return (
    <View style={styles.container}>

        <View style={styles.content}>
          <TouchableOpacity style={styles.BackArrow}>
            <Image
              source={require('../../assets/back_arrow.png')}
            />
          </TouchableOpacity>
          <Text style={styles.title}> Hello there 👋 </Text>

          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={(text) => setEmail(text)}
          />

          <TextInput
            style={styles.input}
            placeholder="Password"
            value={password}
            onChangeText={(text) => setPassword(text)}
            secureTextEntry={!showPassword}
          />
          <TouchableOpacity onPress={toggleShowPassword}>
            <Image
            source={
                showPassword
                ? require('../../assets/ShowPassword.png')
                : require('../../assets/HidePassword.png')
            }
            style={styles.eyeIcon}
            />
        </TouchableOpacity>

          <View style={styles.rememberMeContainer}>
            <CheckboxComponent
              label="Remember me"
              isChecked={rememberMe}
              onChange={handleRememberMe}
            />
          </View>

          <View style={styles.separator}></View>

          <TouchableOpacity style={styles.Forgot} onPress={ForgotPassword}>
            <Text style={styles.ForgotText}> Forgot Password? </Text>
          </TouchableOpacity>

          <View style={styles.errorContainer}>
            {Object.keys(validationErrors).map((key) => (
              <Text key={key} style={styles.errorText}>
                {validationErrors[key].message}
              </Text>
            ))}
          </View>

          <TouchableOpacity style={styles.Loginbutton} onPress={handleLogin}>
            <Text style={styles.LoginButtonText}>Sign in</Text>
          </TouchableOpacity>

        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  BackArrow: {
    position: 'absolute',
    top: '-30%',
    left: '-65%',
    transform: [{ scale: 0.065 }],
  },
  title: {
    fontSize: 24,
    position: 'absolute',
    top: '14%',
    left: '0%',
    fontWeight: 'bold',
    fontSize: 30,
  },
  labelContainer: {
    width: '100%',
    alignItems: 'flex-start',
  },
  rememberMeContainer: {
    flexDirection: 'row',
    marginBottom: 16,
    marginLeft: '-60%',
  },
  separator: {
    borderWidth: 0.4,
    borderColor: 'grey',
    margin: 10,
    width: '95%',
    opacity: '0.2%',
  },
  Forgot: {
    marginTop: 20,
  },
  ForgotText: {
      fontWeight: 'bold',
      color: '#6949FF',
      fontSize: 17,
  },
  input: {
    height: 40,
    width: '100%',
    borderWidth: 1,
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderLeftWidth: 0,
    marginBottom: 30,
    padding: 8,
    borderRadius: 12,
    borderBottomColor: '#6949FF',
    fontWeight: 'bold',
    fontSize: 17,
  },
  eyeIcon: {
    position: 'absolute',
    right: '-45%',
    top: -57,
    width: 25,
    height: 15,
  },
  Loginbutton: {
    borderRadius: 30,
    backgroundColor: '#6949FF',
    paddingVertical: hp('1.8%'),
    paddingHorizontal: wp('30%'),
    justifyContent: 'center',
    marginTop: hp('5%'),
    bottom: '-20%',
  },
  LoginButtonText: {
    color: 'white',
    fontSize: 16,
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
});

export default LoginScreen;