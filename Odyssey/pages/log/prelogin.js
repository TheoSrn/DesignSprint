import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
// import { NavigationContainer } from '@react-navigation/native';

const PreLogin = ({ navigation }) => {
  const handleLogin = () => {
    navigation.navigate('LOGIN');
  };

//   const handleInscription = () => {
//     navigation.navigate('INSCRIPTION');
//   };
  return (
      <View style={styles.Container}>
        <Image style={styles.goute} source={require('../../assets/El_info.png')} />
        <Text style={styles.title}>Odyssey</Text>
        <Text style={styles.text}>Apprendre des langues où et quand vous le souhaiter. C'est gratuit et pour toujours</Text>
        <TouchableOpacity onPress={handleLogin} style={styles.buttonInscription}>
          <Text style={styles.textInscription}>Commencer</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleLogin} style={styles.buttonLogin}>
          <Text style={styles.textLogin}>J'ai déjà un compte</Text>
        </TouchableOpacity>
      </View>
    );
};
const styles = StyleSheet.create({
  Container: {
    backgroundColor: '#FFF',
    flex: 1,
    alignItems: 'center',
    padding: '5%',
  },
  goute: {
    aspectRatio: 1/1,
    marginTop: hp('5%'),
    width: wp('70%'),
    height: hp('32%'),
  },
  title: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: '',
  },
  text: {
    color: '#000',
    fontSize: '',
    // fontWeight: 'bold',
  },
  buttonInscription: {
    borderRadius: 30,
    backgroundColor: '#6949FF',
    paddingVertical: hp('1.8%'),
    paddingHorizontal: wp('30%'),
    justifyContent: 'center',
    marginTop: hp('5%'),
  },
  buttonLogin: {
    borderRadius: 30,
    backgroundColor: '#F0EDFF',
    paddingVertical: hp('1.8%'),
    paddingHorizontal: wp('30%'),
    justifyContent: 'center',
    marginTop: 10,
  },
  textInscription: {
    color: '#F0EDFF',
    // fontWeight: 'bold',
  },
  textLogin: {
    color: '#6949FF',
    // fontWeight: 'bold',
  },
});

export default PreLogin;
