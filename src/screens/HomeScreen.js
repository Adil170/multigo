import React from "react";
import { View, Image, TouchableOpacity, Text ,ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const HomeScreen = () => {
  return (
    <View>
      <View className="h-36 w-full bg-[#FF6666]">
        <View className="flex flex-row justify-between mt-10 mx-4">
          <Ionicons name="menu-outline" size={24} color="white" />
          <Text className="text-lg text-white">Multi Go address bar</Text>
          <MaterialCommunityIcons name="cart-check" size={24} color="white" />
        </View>
        <View className="bg-white h-10 w-80 rounded-md mt-5 justify-center ml-5">
          <TouchableOpacity className="flex flex-row justify-start ml-5">
            <Ionicons name="ios-search-outline" size={20} color="black" />
            <Text className="text-gray-400">search for shops & resturent</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View className=" flex flex-row h-60 w-full bg-black justify-center ">
        <View className="bg-red-600 h-[96%] w-[48%] rounded-lg my-2  ">
          <Text className="text-white"> HEllo ADil</Text>
        </View>
        <View className="bg-red-600 h-[96%] w-[48%] rounded-lg mx-2 my-2">
          <Text className="text-white"> HEllo ADil</Text>
        </View>
       
      </View>
      <View className=" flex flex-row h-32 w-full bg-gray-500 justify-center ">
      <View className="bg-red-600 h-[96%] w-[48%] rounded-lg mx-1 my-2">
          <Text className="text-white"> HEllo ADil</Text>
        </View>
        <View className="bg-red-600 h-[96%] w-[48%] rounded-lg  my-2 mx-1 ">
          <Text className="text-white"> HEllo ADil</Text>
        </View>

      </View>
      <ScrollView />
      

    </View>
  );
};

export default HomeScreen;
