import {
  Image,
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Splash = () => {
  const navigation = useNavigation();
  const navigationHandler = () => {
    navigation.navigate('Home');
  };
  return (
    <ImageBackground
      style={styles.container}
      source={require('../assets/splash.png')}
    >
      <View style={styles.imgCon}>
        <Image source={require('../assets/chef.png')} style={styles.img} />
        <Text style={styles.imgText}>100K+ Premium Recipe </Text>
      </View>
      <View style={styles.bottom}>
        <Text style={[styles.text, styles.bigText]}>Get</Text>
        <Text style={[styles.text, styles.bigText, { marginBottom: 20 }]}>
          Cooking
        </Text>
        <Text style={[styles.text, { fontSize: 18 }]}>
          Simple way to find Tasty Recipe
        </Text>

        <Pressable style={styles.cooking} onPress={navigationHandler}>
          <Text style={{ color: 'white', fontSize: 16, marginRight: 5 }}>
            Start Cooking
          </Text>
          <AntDesign name="arrowright" size={24} color="white" />
        </Pressable>
      </View>
    </ImageBackground>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  imgCon: {
    flex: 1,
    marginTop: 100,
    alignItems: 'center',
  },
  img: {
    width: 79,
    height: 79,
    marginBottom: 10,
  },
  imgText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
  },
  bottom: {
    alignItems: 'center',
    marginBottom: 200,
  },
  text: {
    color: '#FFFFFF',
  },
  bigText: {
    fontSize: 45,
    fontWeight: '700',
  },
  cooking: {
    marginTop: 50,
    backgroundColor: 'rgba(18, 149, 117, 1)',
    paddingVertical: 15,
    paddingHorizontal: 35,
    borderRadius: 8,
    flexDirection: 'row',
  },
});
