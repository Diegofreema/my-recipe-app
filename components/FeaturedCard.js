import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import Rating from './Rating';
const { width } = Dimensions.get('window');
const FeaturedCard = () => {
  return (
    <View style={styles.con}>
      {/* top */}
      <View style={styles.imgCon}>
        {/* top-left */}
        <View style={{ flex: 1, marginBottom: 20 }}>
          <Text numberOfLines={1} style={styles.foodText}>
            Steak with Tomatoes and Pepper
          </Text>
          <Rating rating={3} />
        </View>
        {/* top-right */}
        <Image
          source={{
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUX7i5TBboTbN4R02Dl5TuOzA8ngG7e8aWPgHgQD67&s',
          }}
          style={styles.img}
        />
      </View>
      {/* bottom */}
      <View style={styles.flex}>
        {/* bottom-left */}
        <View style={styles.flex}>
          <Image
            source={{
              uri: 'https://t4.ftcdn.net/jpg/02/24/86/95/360_F_224869519_aRaeLneqALfPNBzg0xxMZXghtvBXkfIA.jpg',
            }}
            style={styles.authorImage}
          />
          <Text>by Frank Ben</Text>
        </View>
        {/* bottom-left */}

        <View style={styles.flex}>
          <Ionicons
            style={{ marginRight: 5 }}
            name="stopwatch-outline"
            size={24}
            color="black"
          />
          <Text>20 mins</Text>
        </View>
      </View>
    </View>
  );
};

export default FeaturedCard;

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
    marginBottom: 50,
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
    width: width * 0.6,
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
    marginRight: 20,
  },
});
