import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet  } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import SignInForm from '../components/SignInForm';
import SignUpForm from '../components/SignUpForm';


const SignInScreen = () => {
  return (
    <View style={styles.container}>
        
           
     <View style={styles.compoform}>
  
     <SignInForm />
     
     </View>
     
    </View>
  );
};

const SignUpScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.compoform}>
  
  <SignUpForm />
  
  </View>
  
    </View>
  );
};

const MyScreen = () => {
  const [activeForm, setActiveForm] = useState('SignIn');

  const handleSignInPress = () => {
    setActiveForm('SignIn');
  };

  const handleSignUpPress = () => {
    setActiveForm('SignUp');
  };

  return (
    <SafeAreaView style={styles.container}>
        
      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={[
            styles.button,
            activeForm === 'SignIn' && styles.activeButton,
          ]}
          onPress={handleSignInPress}
        >
          <Text style={styles.buttonText}>Sign In</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.button,
            activeForm === 'SignUp' && styles.activeButton,
          ]}
          onPress={handleSignUpPress}
        >
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
      </View>

      {activeForm === 'SignIn' ? <SignInScreen /> : <SignUpScreen />}
      
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor : "#FFEADD"
  },
  buttonsContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    marginTop : 20
  },
  button: {
    flex: 1,
    paddingVertical: 10,
    alignItems: 'center',
    backgroundColor: '#FCAEAE',
    
  },
  activeButton: {
    backgroundColor: '#FF6666',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 0,
  },
  compoform: {
    marginBottom : 200
  }
});

export default MyScreen;
