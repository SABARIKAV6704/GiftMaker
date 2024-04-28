import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const PaymentSuccessfulScreen = ({ navigation }) => {
  const handleContinueShopping = () => {
    navigation.navigate('Gift');
  };

  return (
    <View style={styles.container}>
      <Image source={require('./successful.png')} style={styles.successIcon} />
      <Text style={styles.heading}>Payment Successful!</Text>
      <Text style={styles.message}>Thank you for your purchase.</Text>
      <TouchableOpacity style={styles.continueButton} onPress={handleContinueShopping}>
        <Text style={styles.buttonText}>Continue Shopping</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  successIcon: {
    width: 120,
    height: 120,
    marginBottom: 30,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  message: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  continueButton: {
    backgroundColor: '#007bff',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default PaymentSuccessfulScreen;
