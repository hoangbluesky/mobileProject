// ./navigation/StackNavigator.js

import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import WelcomeScreen from '../Screen/WelcomeScreen';
import HomePage from '../Screen/HomePage';
import ScreenLogin from '../Screen/ScreenLogin';
import ScreenRegis from '../Screen/ScreenRegis';
import DeliveryScreen from '../Screen/DeliveryScreen';
import BottomTabNavigator from "./TabNavigator";
import DetailsScreen from "../Screen/DetailsScreen";

const Stack = createStackNavigator();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Home" component={HomePage} options={{ headerShown: false }}/>
        <Stack.Screen name="Login" component={ScreenLogin} options={{ headerShown: false, title: 'Login',headerStyle: {
    backgroundColor: '#95B7EB' 
    },headerTintColor: 'white', }}/>
        <Stack.Screen name="Welcome" component={WelcomeScreen}  options={{ headerShown: false }} />
        <Stack.Screen name="Regis" component={ScreenRegis}  options={{ headerShown: false }} />
        <Stack.Screen name="Detail" component={DetailsScreen}  options={{
          headerTitle: 'Detail Product', // Đặt lại tiêu đề
          headerTitleStyle: {
            color: 'green',
            fontSize: 24,
            paddingBottom: 10,
          },
          headerShown: true,
        }} />
        <Stack.Screen name="BottomTabNavigator" options={{ headerShown: false }} component={BottomTabNavigator} />
        <Stack.Screen name="DeliveryScreen"  component={DeliveryScreen} />
    </Stack.Navigator>
  );
}
export { MainStackNavigator};
