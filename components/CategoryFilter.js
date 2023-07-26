import {
  Pressable,
  StyleSheet,
  Text,
  View,
  FlatList,
  ScrollView,
} from 'react-native';
import React, { useState } from 'react';
import CategoryCard from './CategoryCard';

const CategoryFilter = ({ data, categories, setSelectedTag, selectedTag }) => {
  return (
    <View>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        horizontal
        style={{ flexDirection: 'row' }}
      >
        {categories?.map((category) => (
          <Pressable
            style={[
              styles.text,
              selectedTag === category && styles.selectedStyle,
            ]}
            onPress={() => setSelectedTag(category)}
            key={category}
          >
            <Text
              style={{ color: selectedTag === category ? 'white' : 'black' }}
            >
              {category}
            </Text>
          </Pressable>
        ))}
      </ScrollView>
      <View style={{ marginTop: 50, flexDirection: 'row' }}>
        <FlatList
          data={data}
          renderItem={({ item }) => <CategoryCard item={item} />}
          keyExtractor={(item) => item.id}
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
