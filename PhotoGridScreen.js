import React from 'react';
import { View, StyleSheet, FlatList, Image, TouchableOpacity, Text, Dimensions } from 'react-native';
import { Appbar } from 'react-native-paper';

const PhotoGridScreen = ({ navigation }) => {
  const photos = [
    { id: '1', uri: require('./cloth.jpg'), description: 'Description for photo 1' },
    { id: '2', uri: require('./cloth.jpg'), description: 'Description for photo 2' },
    { id: '3', uri: require('./cloth.jpg'), description: 'Description for photo 3' },
    { id: '4', uri: require('./cloth.jpg'), description: 'Description for photo 4' },
    { id: '5', uri: require('./cloth.jpg'), description: 'Description for photo 5' },
    { id: '6', uri: require('./cloth.jpg'), description: 'Description for photo 6' },
    { id: '7', uri: require('./cloth.jpg'), description: 'Description for photo 7' },
    { id: '8', uri: require('./cloth.jpg'), description: 'Description for photo 8' },
    { id: '9', uri: require('./cloth.jpg'), description: 'Description for photo 9' },
  ];

  const renderPhotoItem = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate('PhotoDetailed', { photo: item })}>
      <Image source={item.uri} style={styles.photo} />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* Appbar */}
      <Appbar.Header style={styles.appbar}>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content title={<Text style={styles.title}>GiftIt</Text>} />
      </Appbar.Header>

      {/* Photo Grid */}
      <FlatList
        data={photos}
        renderItem={renderPhotoItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={styles.photoGrid}
      />
    </View>
  );
};

const { width } = Dimensions.get('window');
const photoSize = (width - 30) / 2 - 6; // Adjust for padding and margin

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  appbar: {
    backgroundColor: 'pink',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  photoGrid: {
    paddingHorizontal: 5, // Add horizontal padding
    paddingBottom: 10, // Add bottom padding
  },
  photo: {
    width: photoSize,
    height: photoSize,
    margin: 8,
  },
});

export default PhotoGridScreen;
