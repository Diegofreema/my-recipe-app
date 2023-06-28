import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import React from 'react';
const { width } = Dimensions.get('window');
const CategoryCard = () => {
  return (
    <View style={styles.card}>
      <Image
        source={{
          uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUX7i5TBboTbN4R02Dl5TuOzA8ngG7e8aWPgHgQD67&s',
        }}
        style={styles.img}
      />
      <Text style={styles.text}>Classic Greek salad</Text>
      <View style={styles.timer}>
        <Text>Time</Text>
        <Text>15 mins</Text>
      </View>
    </View>
  );
};

export default CategoryCard;

const styles = StyleSheet.create({
  img: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginTop: -50,
    marginBottom: 10,
  },
  card: {
    backgroundColor: '#DCDCDC',
    width: width * 0.35,
    paddingVertical: 20,
    paddingHorizontal: 20,
    alignItems: 'center',
    borderRadius: 8,
    marginRight: 12,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  timer: {
    alignSelf: 'flex-start',
  },
});
