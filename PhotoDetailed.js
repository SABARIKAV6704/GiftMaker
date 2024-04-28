import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';
import { Appbar } from 'react-native-paper';

const PhotoDetailed = ({ navigation, route }) => {
  const { photo } = route.params;
  const [suggestion, setSuggestion] = useState('');

  const handleSuggestionChange = (text) => {
    setSuggestion(text);
  };

  const handleSubmit = () => {
    // Handle submission logic here
    console.log('Submitted suggestion:', suggestion);
    // You can add your logic to submit the suggestion to the backend or do any other actions here
    // For now, let's just clear the suggestion
    setSuggestion('');

    // Navigate to the next screen for collecting details
    navigation.navigate('DetailsScreen');
  };

  return (
    <View style={styles.container}>
      {/* Appbar */}
      <Appbar.Header style={styles.appbar}>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content title="GiftIt" />
      </Appbar.Header>

      {/* Main Content */}
      <View style={styles.content}>
        <Image source={photo.uri} style={styles.photo} />
        <Text style={styles.description}>{photo.description}</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your suggestion..."
          value={suggestion}
          onChangeText={handleSuggestionChange}
        />
        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <Text style={styles.submitButtonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  appbar: {
    backgroundColor: 'pink',
    elevation: 0, // Remove shadow on Android
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  photo: {
    width: '80%',
    height: 300,
    resizeMode: 'cover',
    marginBottom: 20,
  },
  description: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    marginBottom: 20,
  },
  submitButton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 8,
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default PhotoDetailed;
