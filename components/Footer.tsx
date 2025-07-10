import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const Footer = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>home</Text>
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#f8f8f8',
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    color: 'green',
  },
});
