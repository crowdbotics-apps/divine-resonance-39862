import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const VerifyScreen = ({
  navigation
}) => {
  const [token, setToken] = useState('');
  const [timer, setTimer] = useState(60);

  const handleVerify = () => {
    // handle verification logic here
    navigation.navigate('Home');
  };

  return <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={styles.backButton}>Back</Text>
      </TouchableOpacity>
      <Text style={styles.title}>Verify Your Account</Text>
      <Text style={styles.subtitle}>Enter the 4-digit code we sent to your phone number</Text>
      <TextInput style={styles.input} placeholder="Enter code" keyboardType="numeric" value={token} onChangeText={setToken} />
      <TouchableOpacity style={styles.verifyButton} onPress={handleVerify}>
        <Text style={styles.verifyButtonText}>Verify</Text>
      </TouchableOpacity>
      {timer > 0 && <Text style={styles.timer}>Time remaining: {timer} seconds</Text>}
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20
  },
  backButton: {
    fontSize: 18,
    color: '#333',
    marginBottom: 20
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 30
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
    width: '100%',
    fontSize: 18
  },
  verifyButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
    marginBottom: 20
  },
  verifyButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold'
  },
  timer: {
    fontSize: 16,
    color: '#999',
    marginTop: 20
  }
});
export default VerifyScreen;