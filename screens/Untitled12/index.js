import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const UserScreen = () => {
  return <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Image source={require('../assets/back.png')} style={styles.backButton} />
        </TouchableOpacity>
        <Text style={styles.headerText}>User Profile</Text>
        <View style={styles.LmhsgpeU} />
      </View>
      <View style={styles.userInfo}>
        <Image source={require('../assets/user.png')} style={styles.userImage} />
        <View style={styles.userDetails}>
          <Text style={styles.userName}>John Doe</Text>
          <Text style={styles.userPhone}>+1 (123) 456-7890</Text>
          <Text style={styles.userAddress}>123 Main St, Apt 4, New York, NY 10001</Text>
        </View>
      </View>
      <View style={styles.managerInfo}>
        <Text style={styles.managerTitle}>Property Manager</Text>
        <View style={styles.managerDetails}>
          <Image source={require('../assets/manager.png')} style={styles.managerImage} />
          <View style={styles.managerText}>
            <Text style={styles.managerName}>Jane Smith</Text>
            <Text style={styles.managerPhone}>+1 (987) 654-3210</Text>
            <Text style={styles.managerEmail}>jane.smith@property.com</Text>
          </View>
        </View>
      </View>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 40,
    paddingBottom: 20,
    backgroundColor: '#F9A826'
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff'
  },
  backButton: {
    width: 30,
    height: 30
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 30,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5'
  },
  userImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 20
  },
  userDetails: {
    flex: 1
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5
  },
  userPhone: {
    fontSize: 16,
    color: '#666',
    marginBottom: 5
  },
  userAddress: {
    fontSize: 16,
    color: '#666'
  },
  managerInfo: {
    paddingHorizontal: 20,
    paddingVertical: 30
  },
  managerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20
  },
  managerDetails: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  managerImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 20
  },
  managerText: {
    flex: 1
  },
  managerName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5
  },
  managerPhone: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5
  },
  managerEmail: {
    fontSize: 14,
    color: '#666'
  },
  LmhsgpeU: {
    width: 30
  }
});
export default UserScreen;