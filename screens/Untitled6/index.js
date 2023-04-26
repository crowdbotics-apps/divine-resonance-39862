import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

const PopupScreen = () => {
  return <View style={styles.container}>
      <View style={styles.popup}>
        <Image source={require('../assets/images/popup-image.png')} style={styles.image} />
        <Text style={styles.title}>Title of the Popup</Text>
        <Text style={styles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam vel bibendum bibendum, velit sapien bibendum sapien, vel bibendum sapien velit sapien bibendum sapien.</Text>
        <TouchableOpacity style={styles.button} onPress={() => console.log('Ok button pressed')}>
          <Text style={styles.buttonText}>Ok</Text>
        </TouchableOpacity>
      </View>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  popup: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 20
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10
  },
  description: {
    textAlign: 'center',
    marginBottom: 20
  },
  button: {
    backgroundColor: '#007AFF',
    borderRadius: 5,
    padding: 10
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold'
  }
});
export default PopupScreen;