import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ComicBubble = ({ text }) => {
  return (
    <View style={styles.bubbleContainer}>
      <View style={styles.bubbleTriangle} />
      <Text style={styles.bubbleText}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  bubbleContainer: {
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    padding: 11,
    marginTop: 50,
    marginBottom: -60,
    maxWidth: '70%',
    position: 'relative',
  },
  bubbleText: {
    color: '#000',
    fontSize: 18,
  },
  bubbleTriangle: {
    position: 'absolute',
    bottom: '-73%',
    left: '20%',
    marginLeft: -8,
    width: 0,
    height: 0,
    borderLeftWidth: 25,
    borderRightWidth: 25,
    borderTopWidth: 25,
    borderStyle: 'solid',
    backgroundColor: 'transparent',
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderTopColor: '#f0f0f0',
  },
});

export default ComicBubble;