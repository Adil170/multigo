import React from "react";
import { useState } from "react";
import { View, Image, TouchableOpacity, Text, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import restaurantData from "../../restaurantData/restaurantData";
import RestaurantMenu from "../../restaurantData/RestaurantMenu";
import ImagedCarouselCard from "react-native-imaged-carousel-card";


const HomeScreen = () => {
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);

  const handleRestaurantPress = (restaurant) => {
    setSelectedRestaurant(restaurant);
  };
      const navigation = useNavigation()
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
      <View className=" flex flex-row h-60 w-full justify-center bg-slate-200">
        <View className=" h-[96%] w-[48%] rounded-lg my-2 shadow-lg bg-white ml-2" >
          <Text className="text-white"> HEllo ADil</Text>
        </View>
        <View className="bg-white h-[96%] w-[48%] rounded-lg mx-2 my-2 shadow-lg">
          <Text className="text-white"> HEllo ADil</Text>
        </View>
      </View>
      <View className=" flex flex-row h-32 w-full justify-center bg-slate-200">
        <View className="bg-white h-[96%] w-[48%] rounded-lg mx-1 my-2 shadow-lg">
          <Text className="text-white"> HEllo ADil</Text>
        </View>
        <View className="bg-white h-[96%] w-[48%] rounded-lg  my-2 mx-1 shadow-lg">
          <Text className="text-white"> HEllo ADil</Text>
        </View>
      </View>
      <View className="mt-5 items-center bg-white ">
        <Text className="text-lg font-bold">Resturents & Shops</Text>
        <ScrollView horizontal={true}>
          {restaurantData.map((restaurant) => (
            <TouchableOpacity
              key={restaurant.id}
              onPress={() => navigation.navigate("Restaurant", { restaurant })}
        >
            
              <View style={{ marginRight: 10 }}>
                <ImagedCarouselCard
                  width={200}
                  height={200}
                  shadowColor="#051934"
                  overlayBorderBottomLeftRadius={20}
                  overlayBorderBottomRightRadius={20}
                  text={restaurant.name}
                  source={{ uri: restaurant.image }}
                />
              </View>
            </TouchableOpacity>
          ))}
          {selectedRestaurant && (
            <RestaurantMenu menuItems={selectedRestaurant.menu} />
          )}
        </ScrollView>
      </View>
    </View>
  );
};

export default HomeScreen;
