import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { Appbar } from 'react-native-paper';

const DetailsScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');

  const handleSubmit = () => {
    // Handle form submission logic here
    console.log('Name:', name);
    console.log('Phone Number:', phoneNumber);
    console.log('Email:', email); // Log the email address
    console.log('Address:', address);
    console.log('Payment Method:', paymentMethod);

    // You can add logic here to process the details and proceed accordingly

    // Navigate to the next screen
    navigation.navigate('PaymentSuccessful');
  };

  return (
    <View style={styles.container}>
      {/* Appbar */}
      <Appbar.Header style={styles.appbar}>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content title="Enter Details" />
      </Appbar.Header>

      {/* Main Content */}
      <View style={styles.content}>
        <Text style={styles.title}>Enter Your Details</Text>
        <TextInput
          style={styles.input}
          placeholder="Name"
          value={name}
          onChangeText={setName}
        />
        <TextInput
          style={styles.input}
          placeholder="Phone Number"
          value={phoneNumber}
          onChangeText={setPhoneNumber}
          keyboardType="phone-pad"
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address" // Set keyboard type to email address
        />
        <TextInput
          style={styles.input}
          placeholder="Address"
          value={address}
          onChangeText={setAddress}
        />
        <Text style={styles.paymentTitle}>Choose Payment Method:</Text>
        <View style={styles.radioContainer}>
          <TouchableOpacity
            style={styles.radioButton}
            onPress={() => setPaymentMethod('GPay')}
          >
            <Text style={styles.radioButtonText}>GPay</Text>
            {paymentMethod === 'GPay' && <View style={styles.radioDot} />}
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.radioButton}
            onPress={() => setPaymentMethod('PhonePe')}
          >
            <Text style={styles.radioButtonText}>PhonePe</Text>
            {paymentMethod === 'PhonePe' && <View style={styles.radioDot} />}
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.radioButton}
            onPress={() => setPaymentMethod('CashOnDelivery')}
          >
            <Text style={styles.radioButtonText}>Cash on Delivery</Text>
            {paymentMethod === 'CashOnDelivery' && <View style={styles.radioDot} />}
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <Text style={styles.submitButtonText}>Proceed</Text>
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
    elevation: 0, 
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '75%',
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  paymentTitle: {
    fontSize: 18,
    marginBottom: 10,
  },
  radioContainer: {
    marginBottom: 20,
  },
  radioButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  radioButtonText: {
    fontSize: 16,
    marginRight: 10,
  },
  radioDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: 'blue',
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

export default DetailsScreen;
