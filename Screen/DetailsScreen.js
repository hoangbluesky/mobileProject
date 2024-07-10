
import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, Alert } from 'react-native';
import AsyncStorage from "@react-native-async-storage/async-storage";

const DetailsScreen = ({ route, navigation }) => {
  const { products, productId } = route.params;
  const selectedProduct = products.find(product => product.id === productId);

  const [amount, setAmount] = useState(1);

  const handleIncrease = () => {
    setAmount(amount + 1);
  }

  const handleDecrease = () => {
    if (amount > 1) {
      setAmount(amount - 1);
    }
  }

  const addToCart = async () => {
    try {
      let cartData = await AsyncStorage.getItem("cartData");

      if (cartData) {
        cartData = JSON.parse(cartData);
        cartData.push({
          id: selectedProduct.id,
          name: selectedProduct.name,
          image: selectedProduct.image,
          price: selectedProduct.price,
          amount: amount,
        });
      } else {
        cartData = [];
        cartData.push({
          id: selectedProduct.id,
          name: selectedProduct.name,
          image: selectedProduct.image,
          price: selectedProduct.price,
          amount: amount,
        });
      }

      await AsyncStorage.setItem("cartData", JSON.stringify(cartData));
      navigation.navigate("OrderScreen");
    } catch (error) {
      console.error("Lỗi khi thêm vào giỏ hàng:", error);
      // Xử lý lỗi, ví dụ: hiển thị thông báo lỗi cho người dùng
      Alert.alert("Lỗi", "Không thể thêm sản phẩm vào giỏ hàng. Vui lòng thử lại.");
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: selectedProduct.image }} style={styles.image} />
      <View style={styles.detailsContainer}>
        <Text style={styles.name}>{selectedProduct.name}</Text>
        <Text style={styles.description}>{selectedProduct.description}</Text>
        <Text style={styles.price}>Giá: ${selectedProduct.price}</Text>

        <View style={styles.quantitySelector}>
          <TouchableOpacity onPress={handleDecrease} style={styles.button}>
            <Text style={styles.buttonText}>-</Text>
          </TouchableOpacity>

          <Text style={styles.quantityText}>{amount}</Text>

          <TouchableOpacity onPress={handleIncrease} style={styles.button}>
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.btnLogin} onPress={addToCart}>
          <Text style={styles.btnTextLogin}>Thêm vào giỏ hàng</Text>
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
    textAlign: 'center',
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
  quantitySelector: {
    flexDirection: 'row',
    alignItems: 'center',
    textAlign:'center',
    justifyContent: 'space-between',
    width: 100,
    marginLeft: 130,
  },
  button: {
    backgroundColor: '#3498db',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
  },
  quantityText: {
    fontSize: 16,
  },
});

export default DetailsScreen;






