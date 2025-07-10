import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Footer from '../components/Footer';

const LaundryApp = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to Laundry App</Text>
      <Footer />
    </View>
  )
}

  export default LaundryApp

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    fontStyle: 'italic',
    color: 'red',
  },
});
