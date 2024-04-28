import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableWithoutFeedback } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Appbar, Card } from 'react-native-paper';

const Gift = () => {
  const navigation = useNavigation();

  const handleCardPress = () => {
    // Navigate to the PhotoGridScreen when a card is clicked
    navigation.navigate('PhotoGridScreen');
  };

  return (
    <View style={styles.container}>
      <Appbar.Header style={styles.appbar}>
        <Appbar.Content title="GiftIt" />
      </Appbar.Header>
      <View style={styles.space} />
      <View style={styles.content}>
        <Text style={styles.title}>Product customization</Text>
        <ScrollView>
          <TouchableWithoutFeedback onPress={handleCardPress}>
            <View style={styles.cardContainer}>
              <Card style={styles.card}>
                <Card.Cover source={require('./images.jpg')} style={styles.cardCover} />
                <Card.Content style={styles.cardContent}>
                  <Text>Jewellery</Text>
                </Card.Content>
              </Card>
              <Card style={styles.card}>
                <Card.Cover source={require('./cloth.jpg')} style={styles.cardCover} />
                <Card.Content style={styles.cardContent}>
                  <Text>Clothing</Text>
                </Card.Content>
              </Card>
              <Card style={styles.card}>
                <Card.Cover source={require('./7.jpg')} style={styles.cardCover} />
                <Card.Content style={styles.cardContent}>
                  <Text>Toys</Text>
                </Card.Content>
              </Card>
            </View>
          </TouchableWithoutFeedback>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  appbar: {
    backgroundColor: 'pink',
  },
  space: {
    height: 20, // Add some space below the app bar
  },
  content: {
    flex: 1,
    alignItems: 'left',
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  cardContainer: {
    marginTop: 10,
  },
  card: {
    marginBottom: 10,
    height: 200,
  },
  cardCover: {
    height: 160, 
  },
  cardContent: {
    padding: 10,
  },
});

export default Gift;
