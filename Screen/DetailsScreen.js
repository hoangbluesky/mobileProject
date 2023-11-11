
import React, {useState } from 'react';
import { View, Text, Image, StyleSheet,ScrollView,TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Picker} from '@react-native-picker/picker';
// import { NavigationContainer } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

const DetailsScreen = ({ route,navigation }) => {
  const { products, productId } = route.params;
  const selectedProduct = products.find(product => product.id === productId);
  const [selectedQuantity, setSelectedQuantity] = useState(1);

  const quantities = [1, 2, 3, 4, 5, 6, 7,8 ,9]; // Các tùy chọn số lượng

  const handleQuantityChange = (itemValue, itemIndex) => {
    // Hàm xử lý khi giá trị số lượng thay đổi
    setSelectedQuantity(itemValue);
  };
  const gotoCart  = () =>{
    navigation.navigate('OrderScreen');
  }
  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: selectedProduct.image }} style={styles.image} />
      <View style={styles.detailsContainer}>
        <Text style={styles.name}>{selectedProduct.name}</Text>
        <Text style={styles.description}>The right nutritional supplement helps you stay healthy, creating an unprecedented feeling.
         Bringing you new flavors. Thank you and good appetite</Text>
        <Text style={styles.price}>Price: ${selectedProduct.price}</Text>
        <Picker style= {styles.picker}
          selectedValue={selectedQuantity}
          onValueChange={handleQuantityChange}
        >
          {quantities.map((quantity) => (
            <Picker.Item key={quantity} label={quantity.toString()} value={quantity} />
          ))}
      </Picker>
      <TouchableOpacity style={styles.btnLogin}  onPress={gotoCart} >
          <Text style={styles.btnTextLogin}>Add To Cart</Text>
      </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 5,
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    marginBottom: 10,
  },
  detailsContainer: {
    margin: 5,
    marginBottom: 20,
  },
  name: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center'
  },
  description: {
    fontSize: 16,
    marginBottom: 8,
    color: 'black',
    marginLeft: 10,
  },
  price: {
    fontSize: 28,
    color: 'green',
    fontWeight: '700',
    textAlign: 'center',
  },
  picker: {
    fontSize: 20,
    color: 'red',
  },
  btnLogin: {
    marginTop: 20,
    alignItems: 'center',
    backgroundColor: '#9139BA',
    paddingTop: 15,
    paddingBottom: 15,
    borderRadius: 20,
  },
  btnTextLogin: {
    color: '#fff',
    fontSize: 16,
  },
});

export default DetailsScreen;






