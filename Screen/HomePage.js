import React from 'react';
import { View, Text, TextInput, Button, StyleSheet,TouchableOpacity, Image, FlatList,ScrollView } from 'react-native';
import { styles } from '../style/HomePageCss';
import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import axios from 'axios';


// const products = [
//   { id: '1', name: 'Barbeque', image: require('../assets/BBQ.png'),percent: '98%' },
//   { id: '2', name: 'Burger', image: require('../assets/Burger.png'),percent: '91%' },
//   { id: '3', name: 'Pizza',image: require('../assets/Pizza.png'),percent: '92%' },
//   { id: '4', name: 'Amala',image: require('../assets/Amala.png'),percent: '73%' },
//   { id: '5', name: 'Rice',image: require('../assets/Com.png'),percent: '82%' },
//   { id: '6', name: 'Vegan',image: require('../assets/Vegan.png'),percent: '94%' },
// ];



function HomePage({navigation}) {
  const [products, setProducts] = useState([]);
  const gotoDetail = (productId) => {
    navigation.navigate('Detail',{productId, products});
  }
  const renderProductItem = ({ item }) => (
    <View style={styles.product}>
      <View style={styles.boxImg}>
        <Image source={{ uri :item.image }} style={styles.imgProduct} />
        <TouchableOpacity style={styles.btnProduct} onPress={ () => gotoDetail(item.id)}>
          <Text style={styles.nameProduct}>{item.name}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.valuate}>
        <Image source={require('../icon/Group.png')} />
        <Text style={styles.percent}>{item.percent}</Text>
      </View>
    </View>
  );
  
  const goToDelivery = () => {
      navigation.navigate('DeliveryScreen');
  }
  const gotocart = () => {
    navigation.navigate('DeliveryScreen');
  }
  const gotoCart  = () =>{
    navigation.navigate('OrderScreen');
  }
  
  
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://192.168.137.1:2000/api/products');
        setProducts(response.data.product);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProducts();
  }, []);
  return (
    <ScrollView bounces={true} alwaysBounceVertical={true}>
    <View style={styles.container}>
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
        <View style={styles.cart} > 
          <Text onPress={gotoCart}>
            <Image
              source={require('../icon/shopping-cart.png')} 
            />
          </Text>
          
        </View>
      </View>
      <View style={styles.body}>
        <View style={styles.tracker}>
          <Text style = {styles.textTracker} >TRACKER</Text>
          
        </View>
        <View style={styles.headerBody}>
          <View style={styles.order}>
            <View style={styles.flexTitle}>
              <Text style={styles.titleOrder} >START YOUR ORDER</Text>
            </View>
            <View style ={styles.shipping} >
              <TouchableOpacity style={styles.btnShipping} onPress={goToDelivery} >
                <Text style={styles.btnShippingText}>DELIVERY</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.btnShipping} onPress={gotocart} >
                <Text style={styles.btnShippingText}>CARRY OUT</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.search}>
            <TextInput
              style={styles.inputSearch}
              placeholder="What do you need?"
            />
          </View>
        </View>
        <View style={styles.content}>
            <View style={styles.contentNext}>
              <Text style={styles.foodCategory}>FOOD CATEGORIES</Text>
              <View style={styles.nextIcon}>
                <Image source={require('../icon/next_bold.jpg')}/>
              </View>
            </View>
            <View style={styles.contentProduct}>
              <FlatList
              data={products}
              renderItem={renderProductItem}
              keyExtractor={(item) => item.id}/>
            </View>
        </View>
      </View>
      <View style={styles.footer}>
      
      </View>
    </View>
    </ScrollView>
  );
}
export default HomePage;



