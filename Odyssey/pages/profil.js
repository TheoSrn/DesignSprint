import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, ImageBackground } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Footer from './Components/Footer';


const Profil = ({ navigation }) => {
    const handleLogin = () => {
      navigation.navigate('PRELOGIN');
    };

    const handleChangePassword = () => {
      navigation.navigate('CHANGER DE MOT DE PASSE');
    };

    const handleContactUs = () => {
      navigation.navigate('NOUS CONTACTER');
    };

    return (
        <ImageBackground
          source={require('../assets/profil_bg.png')}
          style={styles.backgroundImage}
        >
      {/* <View style={styles.formContainer}>
        <View style={styles.profileContainer}>
        <Image
        source={require('../assets/Kylian_Tek.jpg')}
        style={styles.pImage}
      />
        </View>

        <TouchableOpacity onPress={handleChangePassword} style={styles.buttonContainerc}>
          <Text style={styles.textcm}>Changer mot de passe {'>'}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleLogin} style={styles.buttonContainerc}>
          <Text style={styles.textcm}>Nous contacter {'>'}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleLogin} style={styles.buttonContainerd}>
          <Text style={styles.buttontext}>Se déconnecter</Text>
        </TouchableOpacity>
        <Footer navigation={navigation} />
      </View> */}
                  <Footer navigation={navigation}/>

      </ImageBackground>
    );
  };

  export default Profil;

const styles = StyleSheet.create({
    pImage: {
        // top: -70,
        width: 200,
        height: 200,
        borderRadius: 200,
    },
    backgroundImage: {
      flex: 1,
      resizeMode: 'cover',
      justifyContent: 'center',
    },
    formContainer: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      padding: '5%',
    },
    profileContainer: {
      alignItems: 'center', // Center the components horizontally
      marginBottom: 20,
    //   marginTop: 100,
    },
    avatarContainer: {
      marginBottom: 15,
    },
    avatarOverlayContainer: {
      backgroundColor: 'lightgreen',
    },
    avatarTitle: {
      textTransform: 'uppercase',
      fontSize: 20,
      fontWeight: 'bold',
    },
    centeredText: {
      textAlign: 'center', // Center the text horizontally
      fontWeight: 'bold',
      fontSize: 20,
      marginBottom: 10,
      fontStyle: 'italic',
      textDecorationLine: 'underline',
    },
    buttonContainerd: {
      borderRadius: 30,
      backgroundColor: '#D3D3D3',
      paddingVertical: hp('1.8%'),
      paddingHorizontal: '30%',
      justifyContent: 'left',
      alignItems: 'left',
      marginTop: '10%',
    },
    buttonContainerc: {
        paddingVertical: hp('1.8%'),
        justifyContent: 'left',
        alignSelf: 'flex-start',
        textAlign: 'left',
      },
      buttonContainercwc: {
        borderRadius: 30,
        backgroundColor: '#4E2ECC',
        paddingVertical: hp('1.8%'),
        paddingHorizontal: wp('18%'),
        justifyContent: 'center',
        marginTop: '10%',
      },
      buttonContainercw: {
        borderRadius: 30,
        backgroundColor: '#4E2ECC',
        paddingVertical: hp('1.8%'),
        paddingHorizontal: wp('20%'),
        justifyContent: 'center',
        marginTop: '3%',
      },
      textcm: {
        color: '#000',
        fontWeight: 'bold',
        fontSize: 18,
        alignSelf: 'flex-start',
      },
      textcw: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 18,
        alignSelf: 'flex-start',
      },
      buttontext: {
        color: '#000000',
        fontWeight: 'bold',
        fontSize: 15,
      },
      infos: {
        fontWeight: 'bold',
        fontSize: 20,
        marginBottom: 10,
        fontStyle: 'italic',
        textDecorationLine: 'underline',
      },
    });