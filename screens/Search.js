import { FlatList, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';

import { Entypo } from '@expo/vector-icons';
import Input from '../components/Input';
import axios from 'axios';
import CategoryCard from '../components/CategoryCard';

const Search = () => {
  const [data, setData] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState('');
  useEffect(() => {
    const getMeals = async () => {
      setLoading(true);

      const options = {
        method: 'GET',
        url: 'https://tasty.p.rapidapi.com/recipes/list',
        params: {
          from: '0',
          size: '20',
        },
        headers: {
          'X-RapidAPI-Key':
            'e91e1b5272msh83bedc2f51c314fp188ccbjsn5d3bfe03e985',
          'X-RapidAPI-Host': 'tasty.p.rapidapi.com',
        },
      };

      try {
        const response = await axios.request(options);
        const meals = response?.data?.results;
        const filtered = meals.filter((item) =>
          value === ''
            ? item
            : item.name.toLowerCase().includes(value.toLowerCase())
        );
        setData(filtered);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    getMeals();
  }, [value]);

  useEffect(() => {}, []);

  return (
    <View style={{ marginHorizontal: 20, paddingTop: 20, flex: 1 }}>
      <View style={styles.searchContainer}>
        <Entypo
          name="magnifying-glass"
          size={24}
          color="#D9D9D9"
          style={{ marginRight: 5 }}
        />
        <Input setValue={setValue} value={value} />
      </View>
      <FlatList
        numColumns={2}
        showsVerticalScrollIndicator={false}
        data={data}
        renderItem={({ item }) => (
          <CategoryCard
            item={item}
            style={{ width: '50%', marginBottom: 50 }}
          />
        )}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingVertical: 30,
          paddingHorizontal: 10,
        }}
      />
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderWidth: 1,
    borderColor: '#D9D9D9',
    borderRadius: 10,
    marginBottom: 40,
  },
});
