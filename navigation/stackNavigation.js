// ./navigation/StackNavigator.js

import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import WelcomeScreen from '../Screen/WelcomeScreen';
import HomePage from '../Screen/HomePage';
import ScreenLogin from '../Screen/ScreenLogin';
import DetailsScreen from '../Screen/DetailsScreen';
import DeliveryScreen from '../Screen/DeliveryScreen';
import SearchScreen from '../Screen/SearchScreen';
import OrderScreen from "../Screen/OrderScreen";
import AccountScreen from "../Screen/AccountScreen";

const Stack = createStackNavigator();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Home" component={HomePage} options={{ headerShown: false }}/>
        <Stack.Screen name="Login" component={ScreenLogin} options={{ headerShown: true, title: 'Login',headerStyle: {
    backgroundColor: '#95B7EB' 
    },headerTintColor: 'white', }}/>
        <Stack.Screen name="Welcome" component={WelcomeScreen}  options={{ headerShown: false }} />
        <Stack.Screen name="Detail" component={DetailsScreen}  options={{ headerShown: false }} />
        <Stack.Screen name="DeliveryScreen" component={DeliveryScreen} />

    </Stack.Navigator>
  );
}
const SearchStackNavigator = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Search" component={SearchScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    );
}
const OrderScreenNavigation = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Search" component={OrderScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    );
}
const AccountScreenNavigation = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Search" component={AccountScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    );
}

export { MainStackNavigator, SearchStackNavigator,OrderScreenNavigation,AccountScreenNavigation };
