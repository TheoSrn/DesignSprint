import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Ex1 = ({ navigation }) => {
  const [isFirstCardClicked, setFirstCardClicked] = useState(false);

  const handleFirstCardClick = () => {
    setFirstCardClicked(true);
  };

  const Valide = () => {
    navigation.navigate('ACCUEIL');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.translateText}>Correct the sentence</Text>
      <View style={styles.separator}></View>
      <View style={styles.middleContent}>
        <Text style={styles.middleText}>She likes to swimd</Text>
      </View>
      <View style={styles.bottomContent}>
        <TouchableOpacity
          style={[styles.card, isFirstCardClicked && styles.clickedCard]}
          onPress={handleFirstCardClick}
        >
          <Text>swim</Text>
        </TouchableOpacity>
        <View style={styles.card}>
          <Text>swims</Text>
        </View>
        <View style={styles.card}>
          <Text>swym</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.button} onPress={Valide}>
        <Text style={styles.buttonText}>Check Answers</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  translateText: {
    textAlign: 'right',
    fontSize: 18,
    fontWeight: 'bold',
    right: '50%',
  },
  middleContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  middleText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  bottomContent: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: '5%',
  },
  card: {
    width: 80,
    height: 80,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  clickedCard: {
    backgroundColor: 'green',
  },
  separator: {
    borderWidth: 0.4,
    borderColor: 'grey',
    margin: 10,
    width: '130%',
    opacity: 0.2,
    right: '20%',
  },
  button: {
    marginTop: 20,
    backgroundColor: '#6949FF',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: '20%',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default Ex1;
