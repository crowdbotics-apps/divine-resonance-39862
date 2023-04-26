import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";
import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, CheckBox } from 'react-native';

const LoginPage = () => {
  const navigation = useNavigation();
  const [phoneNumber, setPhoneNumber] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handlePhoneNumberChange = number => {
    setPhoneNumber(number);
  };

  const handleRememberMeChange = () => {
    setRememberMe(!rememberMe);
  };

  const handleSignupPress = () => {// handle signup logic
  };

  return <View style={styles.container}>
      <Image source={require('../assets/logo.png')} style={styles.logo} />
      <Text style={styles.title}>Welcome Back!</Text>
      <Pressable onPress={() => {
      navigation.navigate("Untitled5");
    }}><View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder="Phone Number" keyboardType="phone-pad" value={phoneNumber} onChangeText={handlePhoneNumberChange} />
      </View></Pressable>
      <Pressable onPress={() => {
      navigation.navigate("Untitled7");
    }}><View style={styles.checkboxContainer}>
        <CheckBox value={rememberMe} onValueChange={handleRememberMeChange} />
        <Text style={styles.checkboxLabel}>Remember Me</Text>
      </View></Pressable>
      <TouchableOpacity style={styles.signupButton} onPress={handleSignupPress}>
        <Text style={styles.signupButtonText}>Sign Up</Text>
      </TouchableOpacity>
      <View style={styles.termsContainer}>
        <Text style={styles.termsText}>
          By signing up, you agree to our 
        </Text>
        <TouchableOpacity>
          <Text style={styles.termsLink}>Terms and Conditions</Text>
        </TouchableOpacity>
        <Text style={styles.termsText}> and </Text>
        <TouchableOpacity>
          <Text style={styles.termsLink}>Privacy Policy</Text>
        </TouchableOpacity>
      </View>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff'
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20
  },
  inputContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginBottom: 20
  },
  input: {
    fontSize: 16
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20
  },
  checkboxLabel: {
    fontSize: 16,
    marginLeft: 10
  },
  signupButton: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5
  },
  signupButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold'
  },
  termsContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  termsText: {
    fontSize: 14
  },
  termsLink: {
    fontSize: 14,
    color: '#007AFF',
    textDecorationLine: 'underline'
  }
});
export default LoginPage;