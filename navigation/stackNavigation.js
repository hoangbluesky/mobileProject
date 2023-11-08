// ./navigation/StackNavigator.js

import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import WelcomeScreen from '../Screen/WelcomeScreen';
import HomePage from '../Screen/HomePage';
import ScreenLogin from '../Screen/ScreenLogin';
import ScreenRegis from '../Screen/ScreenRegis';
import DeliveryScreen from '../Screen/DeliveryScreen';
import BottomTabNavigator from "./TabNavigator";

const Stack = createStackNavigator();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="BottomTabNavigator">
        <Stack.Screen name="Home" component={HomePage} options={{ headerShown: false }}/>
        <Stack.Screen name="Login" component={ScreenLogin} options={{ headerShown: true, title: 'Login',headerStyle: {
    backgroundColor: '#95B7EB' 
    },headerTintColor: 'white', }}/>
        <Stack.Screen name="Welcome" component={WelcomeScreen}  options={{ headerShown: false }} />
        <Stack.Screen name="Regis" component={ScreenRegis}  options={{ headerShown: false }} />
        {/* <Stack.Screen name="Detail" component={DetailsScreen}  options={{ headerShown: false }} /> */}
        <Stack.Screen name="BottomTabNavigator" options={{ headerShown: false }} component={BottomTabNavigator} />
        <Stack.Screen name="DeliveryScreen"  component={DeliveryScreen} />
    </Stack.Navigator>
  );
}
export { MainStackNavigator};
