import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import HomePage from '../Screen/HomePage';
import SearchScreen from '../Screen/SearchScreen';
import OrderScreen from '../Screen/OrderScreen';
import AccountScreen from '../Screen/AccountScreen';
const Tab = createBottomTabNavigator();

const DetailsScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <NavigationContainer independent={true}>
      
        <Tab.Navigator>
          <Tab.Screen name="HomePage" component={HomePage} 
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <Image source={focused ? require('../assets/home.png') : require('../assets/home.png')}/>
          ),
          }} />
          <Tab.Screen name="SearchScreen" component={SearchScreen} 
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <Image source={focused ? require('../assets/search-normal.png') : require('../assets/search-normal.png')}/>
          ),
          }} />
          <Tab.Screen name="OrderScreen" component={OrderScreen} 
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <Image source={focused ? require('../assets/shopping-cart.png') : require('../assets/shopping-cart.png')}/>
          ),
          }} />
          <Tab.Screen name="AccountScreen" component={AccountScreen} 
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <Image source={focused ? require('../assets/account.png') : require('../assets/account.png')}/>
          ),
          }} />
          
        </Tab.Navigator>
      </NavigationContainer>

    </View>
  );
};

export default DetailsScreen;
