import React from "react";
import { View, Text, Image, FlatList, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const RestaurantScreen = ({ route }) => {
  const { restaurant } = route.params;

  const handleAddToCart = (item) => {
    // Implement your logic to add the item to the cart here
    console.log(`Added ${item.name} to cart.`);
  };

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity style={styles.menuItem} onPress={() => handleAddToCart(item)}>
        <Image source={{ uri: item.image }} style={styles.itemImage} />
        <View style={styles.itemDetails}>
          <Text style={styles.menuItemName}>{item.name}</Text>
          <Text style={styles.menuItemPrice}>${item.price}</Text>
        </View>
        <View style={styles.addButton}>
          <MaterialIcons name="add" size={24} color="white" />
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View>
      <Text>{restaurant.name}</Text>
      <Image source={{ uri: restaurant.image }} style={styles.restaurantImage} />
      <FlatList
        data={restaurant.menu}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  restaurantImage: {
    width: "100%",
    height: 150,
    borderRadius: 8,
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 5,
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 8,
    backgroundColor: "white",
    elevation: 2, // Add shadow effect
  },
  menuItemName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  menuItemPrice: {
    fontSize: 16,
    color: "#888",
  },
  addButton: {
    backgroundColor: "#FF6666",
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  itemImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
  },
  itemDetails: {
    flex: 1,
    marginLeft: 16,
  },
});

export default RestaurantScreen;
