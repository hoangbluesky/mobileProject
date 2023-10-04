import React, { useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import { styles } from '../style/styles';
import { useNavigation } from '@react-navigation/native';

function WelcomeScreen() {
  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('Login');
    }, 3000);
    return () => clearTimeout(timer);
  }, [navigation]);
  return (
    <View style={styles.container}>
      <View style={styles.contentLogo}>
        <Text style = {styles.nameStore} >Lobace Food</Text>
        <Text style = {styles.nameTile} >Delivery</Text>
      </View>
    </View>
  );
}
export default WelcomeScreen;
