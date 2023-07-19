import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from "react-native";
import { useNavigation } from '@react-navigation/native';

const SignInForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();

  const handleSignIn = () => {
    // Create a user object with the form data
    const user = {
      email,
      password,
    };

    // Make a POST request to the sign-in route in your Node.js server
    fetch("http://192.168.100.10:5000/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle successful sign-in
        console.log("Sign in Successful", data);
        Alert.alert("Sign in Successful", "You are now signed in.", [
          { text: "OK", onPress: () => navigation.navigate('Home') },
        ]);
      })
      .catch((error) => {
        // Handle sign-in error
        console.error("Sign in Error:", error);
        Alert.alert("Sign in Error", "An error occurred during sign-in.", [
          { text: "OK", onPress: () => console.log("OK pressed") },
        ]);
      });
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
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

        <TouchableOpacity style={styles.button} onPress={handleSignIn}>
          <Text style={styles.buttonText}>Sign In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  input: {
    width: "100%",
    height: 50,
    borderColor: "#FCAEAE",
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  button: {
    backgroundColor: "#FF6666",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    width: "70%",
    marginTop: 15,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    width: 350,
  },
});

export default SignInForm;
