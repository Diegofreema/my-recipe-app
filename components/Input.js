import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const Input = ({ nav = false, value, setValue }) => {
  const navigation = useNavigation();
  const navigationHandler = () => {
    navigation.navigate('Search');
  };
  return (
    <Pressable onPress={nav ? navigationHandler : null} style={{ flex: 1 }}>
      <TextInput
        editable={nav === true ? false : true}
        placeholder="Search recipe "
        style={{ flex: 1 }}
        onChangeText={setValue}
        value={value}
      />
    </Pressable>
  );
};

export default Input;

const styles = StyleSheet.create({});
