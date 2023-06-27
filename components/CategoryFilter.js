import { Pressable, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
const categories = ['Trending', 'Chocoholic', 'Daily', 'Seasonal'];
const CategoryFilter = () => {
  const [selected, setSelected] = useState('Trending');
  console.log(selected);
  return (
    <View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        {categories.map((category) => (
          <Pressable
            style={[styles.text, selected === category && styles.selectedStyle]}
            onPress={() => setSelected(category)}
          >
            <Text>{category}</Text>
          </Pressable>
        ))}
      </View>
      <Text>CategoryFilter</Text>
    </View>
  );
};

export default CategoryFilter;

const styles = StyleSheet.create({
  selectedStyle: {
    backgroundColor: '#3F704D',
    color: '#fff',
  },

  text: {
    padding: 10,
    borderRadius: 5,
  },
});
