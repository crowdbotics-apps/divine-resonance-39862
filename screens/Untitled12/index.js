import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const UserScreen = () => {
  return <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Image source={require('../assets/back.png')} style={styles.backButton} />
        </TouchableOpacity>
        <Text style={styles.headerText}>User Profile</Text>
        <View style={styles.uPpqXHGE} />
      </View>
      <View style={styles.userInfo}>
        <Text style={styles.name}>John Doe</Text>
        <Text style={styles.phone}>+1 (123) 456-7890</Text>
        <Text style={styles.address}>123 Main St, Apt 4B, New York, NY 10001</Text>
      </View>
      <View style={styles.managerInfo}>
        <Text style={styles.managerTitle}>Property Manager</Text>
        <Text style={styles.managerName}>Jane Smith</Text>
        <Text style={styles.managerPhone}>+1 (987) 654-3210</Text>
      </View>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 50
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 30
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  backButton: {
    width: 30,
    height: 30
  },
  userInfo: {
    marginBottom: 30
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10
  },
  phone: {
    fontSize: 18,
    marginBottom: 10
  },
  address: {
    fontSize: 18
  },
  managerInfo: {
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    paddingTop: 30
  },
  managerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10
  },
  managerName: {
    fontSize: 18,
    marginBottom: 10
  },
  managerPhone: {
    fontSize: 18
  },
  uPpqXHGE: {
    width: 30
  }
});
export default UserScreen;