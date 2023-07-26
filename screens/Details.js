import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';

const Details = ({ route }) => {
  const { item } = route?.params;
  console.log(item.instructions);

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Image source={{ uri: item?.thumbnail_url }} style={styles.image} />
      <Text style={{ fontSize: 16, fontWeight: 'bold', marginBottom: 20 }}>
        {item.name}
      </Text>
      <View>
        {Object.keys(item.nutrition).map((key) => {
          if (key !== 'updated_at') {
            return (
              <View key={key} style={styles.nutrition}>
                <Text style={{ fontSize: 15, fontWeight: '600' }}>
                  {key.toUpperCase()}
                </Text>
                <Text>{item.nutrition[key]}</Text>
              </View>
            );
          }
        })}
      </View>
      <View>
        <Text style={{ fontWeight: '600', fontSize: 17, marginVertical: 10 }}>
          Instructions
        </Text>
        {item.instructions.map((instruction, index) => (
          <View
            key={index}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: 10,
              marginBottom: 20,
            }}
          >
            <Text style={{ fontSize: 18 }}>{index + 1}</Text>
            <Text style={{ fontSize: 16 }}>{instruction.display_text}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default Details;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    borderRadius: 10,
    marginBottom: 10,
  },
  nutrition: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    backgroundColor: '#ccc',
    padding: 10,
    borderRadius: 7,
  },
});
