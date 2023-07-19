// RestaurantMenu.js

import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";

const RestaurantMenu = ({ menuItems }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={menuItems}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <Text style={styles.menuItem}>{item.name}</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  menuItem: {
    fontSize: 16,
    marginVertical: 5,
  },
});

export default RestaurantMenu;
