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
        <Image style={styles.goutte} source={require('../../assets/El_info.png')} />
        <Text style={styles.title}>Odyssey</Text>
        <Text style={styles.text}>Apprendre n'importe quelle langue où et quand vous le souhaiter. C'est gratuit et pour toujours</Text>
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
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    padding: '5%',
  },
  goutte: {
    aspectRatio: 67/82,
    marginTop: hp('11%'),
    width: '55%',
    height: '30%',
  },
  title: {
    marginTop: hp('5%'),
    color: '#000',
    fontWeight: 'bold',
    fontSize: 40,
  },
  text: {
    marginTop: hp('5%'),
    color: '#000',
    fontSize: 20,
    textAlign: 'center',
    // fontWeight: 'bold',
  },
  buttonInscription: {
    borderRadius: 30,
    backgroundColor: '#6949FF',
    paddingVertical: hp('2.5%'),
    paddingHorizontal: wp('35%'),
    justifyContent: 'center',
    marginTop: hp('8%'),
  },
  buttonLogin: {
    borderRadius: 30,
    backgroundColor: '#F0EDFF',
    paddingVertical: hp('2.5%'),
    paddingHorizontal: wp('29%'),
    justifyContent: 'center',
    marginTop: 10,
    // width: 20,
  },
  textInscription: {
    color: '#F0EDFF',
    fontWeight: 'bold',
    fontSize: 15,
  },
  textLogin: {
    color: '#6949FF',
    fontWeight: 'bold',
    fontSize: 15,
  },
});

export default PreLogin;
