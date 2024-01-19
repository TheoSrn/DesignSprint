import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, ImageBackground } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Footer from './Components/Footer';
// import { NavigationContainer } from '@react-navigation/native';

const Accueil = ({ navigation }) => {
  const handleLogin = () => {
    navigation.navigate('EXE1');
  };
  const handleEx1 = () => {
    navigation.navigate('EXE1');
  };
  const handleEx2 = () => {
    navigation.navigate('EXE1');
  };
  const handleEx3 = () => {
    navigation.navigate('EXE1');
  };

//   const handleInscription = () => {
//     navigation.navigate('INSCRIPTION');
//   };
  return (
    <ImageBackground
    source={require('../assets/ocean.png')}
    style={styles.backgroundImageOcean}
    >
    <ImageBackground
        source={require('../assets/sand.png')}
        style={styles.backgroundImageSand}
    >
        <View style={styles.Container}>
            <TouchableOpacity onPress={handleEx1} style={styles.island1}>
                <Image style={styles.island} source={require('../assets/island.png')}></Image>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleEx2} style={styles.island2}>
                <Image style={styles.island} source={require('../assets/island.png')}></Image>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleEx3} style={styles.island3}>
                <Image style={styles.island} source={require('../assets/island.png')}></Image>
            </TouchableOpacity>
            <Footer navigation={navigation}/>
        </View>
 
      </ImageBackground>
      </ImageBackground>
    );
};
const styles = StyleSheet.create({
    backgroundImageSand: {
        flex: 1,
        width: '-10%',
        height: '22%',
        top: '-1%',
        resizeMode: 'cover',
        justifyContent: 'center',
        // position: 'absolute',
      },
      backgroundImageOcean: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
      },
  Container: {
    flex: 1,
    // backgroundColor: '#FFF',
    alignItems: 'center',
    padding: '5%',
  },
  island: {
    aspectRatio: 67/82,
    marginTop: hp('11%'),
    width: '55%',
    height: '30%',
  },
  island1: {
    aspectRatio: 67/82,
    top: 0,
  },
  island2: {
    aspectRatio: 67/82,
    right: -200,
    top: -150,
  },
  island3: {
    aspectRatio: 67/82,
    left: 15,
    top: -325,
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

export default Accueil;
