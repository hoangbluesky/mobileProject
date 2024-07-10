// ./navigation/TabNavigator.js

import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, Text, Image, StyleSheet } from 'react-native';
import HomePage from '../Screen/HomePage';
import SearchScreen from '../Screen/SearchScreen';
import OrderScreen from "../Screen/OrderScreen";
import AccountScreen from "../Screen/AccountScreen";
const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator   >
      <Tab.Screen name="Home" component={HomePage} 
      options={{
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <Image source={focused ? require('../assets/home.png') : require('../assets/home.png')}/>
          ),
          }} 
      />
      <Tab.Screen name="SearchScreen" component={SearchScreen} 
      options={{
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <Image source={focused ? require('../assets/search-normal.png') : require('../assets/search-normal.png')}/>
          ),
          }} 
      />
      <Tab.Screen name="OrderScreen" component={OrderScreen} 
      options={{
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <Image source={focused ? require('../assets/shopping-cart.png') : require('../assets/shopping-cart.png')}/>
          ),
          }} 
      />
      <Tab.Screen name="AccountScreen" component={AccountScreen} 
      options={{
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <Image source={focused ? require('../assets/account.png') : require('../assets/account.png')}/>
          ),
          }} 
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
