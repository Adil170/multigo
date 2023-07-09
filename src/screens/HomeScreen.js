import React from 'react';
import { View, Image, TouchableOpacity,Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();

//   const handleFoodDeliveryPress = () => {
//     // Navigate to the food delivery app
//     navigation.navigate('FoodDeliveryApp');
//   };

//   const handleGroceryPress = () => {
//     // Navigate to the grocery app
//     navigation.navigate('GroceryApp');
//   };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

      <TouchableOpacity
        style={{
          width: 300,
          height: 300,
          borderRadius: 150,
          backgroundColor: '#f2f2f2',
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: 20,
          marginTop : 25
        }}
        // onPress={handleFoodDeliveryPress}
      >
                <Text className="text-4xl uppercase  font-bold text-yellow-400 ">food delivery</Text>
        
        <Image
          source={{ uri: 'https://plus.unsplash.com/premium_photo-1663013248646-9e524a1301d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80'}} // Replace with your actual image URL
          style={{ width: 300, height: 300, borderRadius: 150 }}
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          width: 300,
          height: 300,
          borderRadius: 150,
          backgroundColor: '#f2f2f2',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop :20
        }}
        // onPress={handleGroceryPress}
      >
         <Text className="text-4xl uppercase  font-bold text-yellow-400  ">grocery </Text>
        <Image
          source={{ uri: 'https://images.unsplash.com/photo-1604719312566-8912e9227c6a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80' }} // Replace with your actual image URL
          style={{ width: 300, height: 300, borderRadius: 150 }}
        />
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
