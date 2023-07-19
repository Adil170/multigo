import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';

const FoodDeliveryApp = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const categories = [
    { id: 1, name: 'Pizza' },
    { id: 2, name: 'Burgers' },
    { id: 3, name: 'Daily Deals' },
    // Add more categories here
  ];

  const items = {
    1: [
      { id: 1, name: 'Pepperoni Pizza' },
      { id: 2, name: 'Margherita Pizza' },
      // Add more pizza items here
    ],
    2: [
      { id: 3, name: 'Cheeseburger' },
      { id: 4, name: 'Veggie Burger' },
      // Add more burger items here
    ],
    3: [
      { id: 5, name: 'Discounted Pizza Slice' },
      { id: 6, name: 'Combo Meal Deal' },
      // Add more daily deals items here
    ],
    // Add more categories and items here
  };

  const handleCategoryPress = (category) => {
    setSelectedCategory(category);
  };

  const renderItems = (categoryId) => {
    const categoryItems = items[categoryId];

    return (
      <ScrollView key={categoryId} style={styles.itemContainer}>
        {categoryItems.map((item) => (
          <View key={item.id} style={styles.item}>
            <Text style={styles.itemName}>{item.name}</Text>
          </View>
        ))}
      </ScrollView>
    );
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        {categories.map((category) => (
          <TouchableOpacity
            key={category.id}
            style={[
              styles.category,
              selectedCategory?.id === category.id && styles.selectedCategory,
            ]}
            onPress={() => handleCategoryPress(category)}
          >
            <Text style={styles.categoryName}>{category.name}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <ScrollView style={styles.contentContainer}>
        {categories.map((category) => (
          <View key={category.id}>
            {selectedCategory?.id === category.id && renderItems(category.id)}
          </View>
        ))}
      </ScrollView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  category: {
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  selectedCategory: {
    backgroundColor: 'blue',
  },
  categoryName: {
    fontSize: 16,
    color: 'black',
  },
  contentContainer: {
    flex: 1,
    padding: 16,
  },
  itemContainer: {
    marginBottom: 8,
    padding: 16,
    borderRadius: 8,
    backgroundColor: '#ECECEC',
  },
  itemName: {
    fontSize: 16,
  },
});

export default FoodDeliveryApp;
