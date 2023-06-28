import { Pressable, StyleSheet, Text, View, FlatList } from 'react-native';
import React, { useState } from 'react';
import CategoryCard from './CategoryCard';

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
            key={category}
          >
            <Text style={{ color: selected === category ? 'white' : 'black' }}>
              {category}
            </Text>
          </Pressable>
        ))}
      </View>
      <View style={{ marginTop: 50, flexDirection: 'row' }}>
        <FlatList
          data={[1, 2, 3, 4, 5, 6, 7]}
          renderItem={({ item }) => <CategoryCard />}
          keyExtractor={(item) => item}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            paddingVertical: 30,
            paddingHorizontal: 10,
          }}
        />
      </View>
    </View>
  );
};

export default CategoryFilter;

const styles = StyleSheet.create({
  selectedStyle: {
    backgroundColor: '#3F704D',
    color: 'white',
  },

  text: {
    padding: 10,
    borderRadius: 5,
  },
});
