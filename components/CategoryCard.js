import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  Pressable,
} from 'react-native';
import React from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
const { width } = Dimensions.get('window');
const CategoryCard = ({ item, style }) => {
  const { name } = useRoute();
  const { navigate } = useNavigation();

  const switchScreens = () => {
    navigate('Details', { item });
  };
  return (
    <Pressable
      style={({ pressed }) => [styles.card, style, pressed && styles.pressed]}
      onPress={name === 'Search' ? switchScreens : null}
    >
      <Image
        source={{
          uri: item?.thumbnail_url,
        }}
        style={styles.img}
      />
      <Text numberOfLines={2} style={styles.text}>
        {item?.name}
      </Text>
      <View style={styles.timer}>
        <Text>Time</Text>
        <Text>{item?.cook_time_minutes || 0} mins</Text>
      </View>
    </Pressable>
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
  pressed: {
    opacity: 0.7,
  },
});
