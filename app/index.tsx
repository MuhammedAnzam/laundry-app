import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import NavigationBar from '../components/BottomNavigationbar';
const LaundryApp = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to Laundry App</Text>
      <NavigationBar />
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
