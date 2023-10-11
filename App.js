import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from './Screen/WelcomeScreen';
import HomePage from './Screen/HomePage';
import ScreenLogin from './Screen/ScreenLogin';
import DetailsScreen from './Screen/DetailsScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Detail">
        <Stack.Screen name="Home" component={HomePage} options={{ headerShown: false }}/>
        <Stack.Screen name="Login" component={ScreenLogin} options={{ headerShown: true, title: 'Login',headerStyle: {
      backgroundColor: '#95B7EB' 
    },headerTintColor: 'white', }}/>
        <Stack.Screen name="Welcome" component={WelcomeScreen}  options={{ headerShown: false }} />
        <Stack.Screen name="Detail" component={DetailsScreen}  options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App; 
