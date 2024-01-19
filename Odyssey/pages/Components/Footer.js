import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default function Footer({ navigation }) {
    const handleAccueil = () => {
      navigation.navigate('ACCUEIL')
    }
    const handleProfil = () => {
      navigation.navigate('PROFIL')
    }
    return (
      <View style={styles.footer}>
          <TouchableOpacity onPress={handleAccueil}>
              <Image style={styles.footerFirstElem} source={require('../../assets/home.png')} />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleProfil}>
            <Image style={styles.footerLastElem} source={require('../../assets/profil.png')} />
          </TouchableOpacity>
      </View>
    );
  }

  const styles = StyleSheet.create({
    footer: {
      flex: 1,
      backgroundColor: '#FFF',
      padding: 30,
      alignItems: 'center',
      height: 100,
      width: 414,
      flexDirection: 'row',
      justifyContent: 'space-between',
      position: 'absolute',
      bottom: -10,
    },
    footerElements: {
      height: 30,
      width: 30,
      marginTop: -30,
      marginLeft: 0,
    },
    footerFirstElem: {
      marginTop: -30,
      height: 30,
      width: 30,
      marginLeft: 50,
    },
    footerLastElem: {
      marginTop: -30,
      height: 30,
      width: 30,
      marginRight: 50,
    },
  });
  