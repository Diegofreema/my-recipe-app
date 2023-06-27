import { StyleSheet, Text, View, Dimensions, FlatList } from 'react-native';
import React from 'react';
import { Entypo } from '@expo/vector-icons';
import Input from '../components/Input';
import { myStyles } from '../constants/generalStyles';

import FeaturedCard from '../components/FeaturedCard';
import CategoryFilter from '../components/CategoryFilter';
const { width } = Dimensions.get('window');
const Home = () => {
  return (
    <View style={[myStyles]}>
      <View style={styles.searchContainer}>
        <Entypo
          name="magnifying-glass"
          size={24}
          color="#D9D9D9"
          style={{ marginRight: 5 }}
        />
        <Input />
      </View>
      <View>
        <Text style={styles.text}>Featured Recipe</Text>
        <FlatList
          data={[1, 2, 3, 4, 5, 6, 7]}
          renderItem={({ item }) => <FeaturedCard />}
          keyExtractor={(item) => item}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            paddingVertical: 30,
            paddingHorizontal: 10,
          }}
        />
      </View>
      <CategoryFilter />
    </View>
  );
};

export default Home;

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
  text: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 30,
  },

  img: {
    width: 80,
    height: 80,
    borderRadius: 50,
    resizeMode: 'cover',
    marginTop: -35,
  },
  imgCon: {
    flexDirection: 'row',
  },
  foodText: {
    fontSize: 18,
    fontWeight: '600',
  },
  authorImage: {
    width: 40,
    height: 40,
    borderRadius: 25,
    marginRight: 10,
  },
  flex: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  con: {
    width: width * 0.7,
    backgroundColor: 'white',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
  },
});
