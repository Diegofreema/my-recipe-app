import { StyleSheet, Text, View, Dimensions, FlatList } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Entypo } from '@expo/vector-icons';
import Input from '../components/Input';
import { myStyles } from '../constants/generalStyles';

import FeaturedCard from '../components/FeaturedCard';
import CategoryFilter from '../components/CategoryFilter';
import { ActivityIndicator } from 'react-native';
import axios from 'axios';
const { width } = Dimensions.get('window');
const Home = () => {
  const [recipes, setRecipes] = useState([]);
  const [searchRecipe, setSearchRecipes] = useState([]);
  const [heathy, setHeathy] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [tags, setTags] = useState([]);
  const [selectedTag, setSelectedTag] = useState('North American');
  useEffect(() => {
    const getMeals = async () => {
      setIsLoading(true);

      const options = {
        method: 'GET',
        url: 'https://tasty.p.rapidapi.com/recipes/list',
        params: {
          from: '0',
          size: '7',
          tags: selectedTag,
        },
        headers: {
          'X-RapidAPI-Key':
            'e91e1b5272msh83bedc2f51c314fp188ccbjsn5d3bfe03e985',
          'X-RapidAPI-Host': 'tasty.p.rapidapi.com',
        },
      };

      try {
        const response = await axios.request(options);

        setRecipes(response?.data?.results);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };
    getMeals();
  }, []);

  useEffect(() => {
    const getMeals = async () => {
      const options = {
        method: 'GET',
        url: 'https://tasty.p.rapidapi.com/recipes/list',
        params: {
          from: '0',
          size: '20',
          tags: selectedTag,
        },
        headers: {
          'X-RapidAPI-Key':
            'e91e1b5272msh83bedc2f51c314fp188ccbjsn5d3bfe03e985',
          'X-RapidAPI-Host': 'tasty.p.rapidapi.com',
        },
      };

      try {
        const response = await axios.request(options);

        setRecipes(response?.data?.results);
      } catch (error) {
        console.error(error);
      }
    };
    getMeals();
  }, [selectedTag]);
  useEffect(() => {
    const getMealsTags = async () => {
      const options = {
        method: 'GET',
        url: 'https://tasty.p.rapidapi.com/recipes/list',
        params: {
          from: '0',
          size: '7',
        },
        headers: {
          'X-RapidAPI-Key':
            'e91e1b5272msh83bedc2f51c314fp188ccbjsn5d3bfe03e985',
          'X-RapidAPI-Host': 'tasty.p.rapidapi.com',
        },
      };

      try {
        const response = await axios.request(options);

        setSearchRecipes(response?.data?.results);
      } catch (error) {
        console.error(error);
      }
    };
    getMealsTags();
  }, []);

  useEffect(() => {
    const allTags = [];
    searchRecipe?.forEach((recipe) => {
      recipe?.tags?.forEach((tag) => {
        if (!allTags?.includes(tag.display_name)) {
          allTags.push(tag.display_name);
        }
      });
    });
    setTags(allTags);
  }, [recipes]);

  useEffect(() => {
    const getHealthyRecipes = async () => {
      setIsLoading(true);

      const options = {
        method: 'GET',
        url: 'https://tasty.p.rapidapi.com/recipes/list',
        params: {
          from: '0',
          size: '5',
          tags: 'healthy',
        },
        headers: {
          'X-RapidAPI-Key':
            'e91e1b5272msh83bedc2f51c314fp188ccbjsn5d3bfe03e985',
          'X-RapidAPI-Host': 'tasty.p.rapidapi.com',
        },
      };

      try {
        const response = await axios.request(options);

        setHeathy(response?.data?.results);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };
    getHealthyRecipes();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      {isLoading ? (
        <View
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
        >
          <ActivityIndicator />
        </View>
      ) : (
        <View style={[myStyles]}>
          <View style={styles.searchContainer}>
            <Entypo
              name="magnifying-glass"
              size={24}
              color="#D9D9D9"
              style={{ marginRight: 5 }}
            />
            <Input nav={true} />
          </View>
          <View>
            <Text style={styles.text}>Healthy Recipe</Text>

            <FlatList
              data={heathy}
              renderItem={({ item }) => <FeaturedCard item={item} />}
              keyExtractor={(item) => item.id}
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{
                paddingVertical: 30,
                paddingHorizontal: 10,
              }}
            />
          </View>
          <CategoryFilter
            categories={tags}
            data={recipes}
            setSelectedTag={setSelectedTag}
            selectedTag={selectedTag}
          />
        </View>
      )}
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
