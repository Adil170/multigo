import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';

const SignUpForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = () => {
    // Create a user object with the form data
    const user = {
      name,
      email,
      password,
    };

    // Make a POST request to the sign-up route in your Node.js server
    fetch('http://192.168.100.10:5000/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle successful sign-up, e.g., display a success message
        console.log('Sign Up Successful', data);
        Alert.alert('Sign Up Successful', 'You can now sign in.', [
          { text: 'OK', onPress: () => console.log('OK pressed') },
        ]);
      })
      .catch((error) => {
        // Handle sign-up error, e.g., display an error message
        console.error('Sign Up Error:', error);
        Alert.alert('Sign Up Error', 'An error occurred during sign up.', [
          { text: 'OK', onPress: () => console.log('OK pressed') },
        ]);
      });
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="User Name"
          onChangeText={(text) => setName(text)}
          value={name}
        />

        <TextInput
          style={styles.input}
          placeholder="Email"
          onChangeText={(text) => setEmail(text)}
          value={email}
        />

        <TextInput
          style={styles.input}
          placeholder="Password"
          onChangeText={(text) => setPassword(text)}
          value={password}
          secureTextEntry
        />
        <TouchableOpacity style={styles.button} onPress={handleSignUp}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: '#FCAEAE',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  button: {
    backgroundColor: '#FF6666',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    width: '70%',
    marginTop: 15,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    width: 350,
  },
});

export default SignUpForm;
