import React from 'react';
import { View, Text, StyleSheet,Image } from 'react-native';

const DetailsScreen = () => {
  return (
    <View style={styles.header}>
      <View style={styles.menu}>
      <Image
            source={require('../icon/Hamburger_3.png')} 
      />
        
      </View>
      <View style={styles.contentLogo}>
        <Text style = {styles.nameStore} >Lobace Food</Text>
        <Text style = {styles.nameTile} >Delivery</Text>
      </View>
      <View style={styles.cart}>
        <Text>Giỏ hàng (0)</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  
  header: {
    width: '100%',
    height: '20%',
    backgroundColor: '#007bff',
    
    padding: 0,
  },
  menu: {
  },
  contentLogo: {
    alignItems: 'center'
  },
  storeName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  nameTile : {

  },
  cart: {
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 5,
  },
});

export default DetailsScreen;
