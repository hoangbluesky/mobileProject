import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { MainStackNavigator } from "./navigation/stackNavigation";

const App = () => {
  return (
    <NavigationContainer>
        <MainStackNavigator />
    </NavigationContainer>
  );
}

export default App; 
