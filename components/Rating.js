import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { AntDesign } from '@expo/vector-icons';
const Rating = ({ rating }) => {
  const arr = [1, 2, 3, 4, 5];
  const renderRating = () => {
    return arr.map((number) => {
      if (rating >= number) {
        return <AntDesign name="star" key={number} size={20} color="gold" />;
      } else {
        return <AntDesign name="staro" size={20} key={number} color="gold" />;
      }
    });
  };
  return (
    <View>
      <Text>{renderRating()}</Text>
    </View>
  );
};

export default Rating;

const styles = StyleSheet.create({});
