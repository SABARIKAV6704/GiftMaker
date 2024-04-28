import React, { useState, useEffect } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './Login';
import Gift from './Gift';
import PhotoGridScreen from './PhotoGridScreen'; 
import PhotoDetailed from './PhotoDetailed';
import DetailsScreen  from './DetailsScreen';
import PaymentSuccessfulScreen from  './PaymentSuccessfulScreen';

const Stack = createStackNavigator();

const App = () => { 
  const [showLogin, setShowLogin] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowLogin(true);
    }, 5000);  

    return () => clearTimeout(timeout);
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login">
          {props => (
            <View style={styles.container}>
              {showLogin ? (
                <Login {...props} />
              ) : (
                <View style={styles.logoContainer}>
                  <Image
                    source={require('./logo.png')}
                    style={styles.logo}
                  />
                </View>
              )}
            </View>
          )}
        </Stack.Screen>
        <Stack.Screen name="Gift" component={Gift} />
        <Stack.Screen name="PhotoGridScreen" component={PhotoGridScreen} />
        <Stack.Screen name="PhotoDetailed" component={PhotoDetailed}/>
        <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
        <Stack.Screen name='PaymentSuccessful' component={PaymentSuccessfulScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FAC2C2',
  },
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 300,
    height: 300,
    resizeMode: 'contain',
  },
});

export default App;
