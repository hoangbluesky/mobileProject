// Trong OrderScreen.js
import React, { useState, useEffect } from 'react';
import AsyncStorage from "@react-native-async-storage/async-storage";
import CartItem from '../navigation/CartItem';
import { View, Text,StatusBar, FlatList, Image, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { useIsFocused } from "@react-navigation/native";


const OrderScreen = () => {
  const isFocused = useIsFocused();
  const [cartList, setcartList] = useState([]);
  const onFinish = async () => {
    if (cartList.length > 0) {
      Alert.alert(
        "Thông Báo",
        "Thanh Toán Thành Công!",
        [
          {
            text: "OKI",
            style: "cancel", 
          },
        ],
        { cancelable: false, backgroundColor: "blue" }
      );
      let cartData = [];
      await AsyncStorage.setItem("cartData", JSON.stringify(cartData));
      setcartList([]);
    }
  };
  const getCartData = async () => {
    let cartData = await AsyncStorage.getItem("cartData");
    if (cartData) {
      cartData = JSON.parse(cartData);
    } else {
      cartData = [];
    }
    setcartList(cartData);
  };
  useEffect(() => {
    getCartData();
  }, [isFocused]);
  const renderItem = ({ item, index }) => {
    return <CartItem item={item} index={index} onChange={setcartList} />;
  };
  const getTotal = () => {
    let total = 0;
    cartList.map((value) => (total += value.price * value.amount));
    return total;
  };

  return (
    <View
      style={{
        paddingTop: StatusBar.currentHeight + 20,
        backgroundColor: "#fff",
        paddingHorizontal: 12,
        paddingTop: 50,
        flex: 1,
        marginTop: 10,
      }}
    >
      <View style={{ flexDirection: "row", alignItems: "flex-end",marginBottom: 20 }}>
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 30,
            color: "#9139BA",
            flex: 1,
          }}
        >
          My Cart
        </Text>
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 20,
          }}
        >
          {"TỔNG: "}
        </Text>
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 18,
            color: "#9139BA",
          }}
        >
           {getTotal()} $
        </Text>
      </View>
      {cartList.length > 0 ? (
        <FlatList
          style={{ marginTop: 12 }}
          data={cartList}
          keyExtractor={(item, index) => item + index}
          renderItem={renderItem}
        />
      ) : (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Text style={{ color: "gray", fontSize: 20 }}>Giỏ hàng đang trống</Text>
        </View>
      )}

      
      <TouchableOpacity style={styles.logoutButton} onPress={onFinish}>
          <Text style={styles.logoutButtonText}>Thanh Toan</Text>
        </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
 logoutButton: {
  padding: 15,
  backgroundColor: '#9139BA',
  borderRadius: 8,
  alignItems: 'center',
  marginBottom: 10,
},
logoutButtonText: {
  color: '#ffffff',
  fontSize: 18, // Increased font size for better readability
  fontWeight: 'bold',
},
});

export default OrderScreen;
