import React from 'react';
import { View, Text, TextInput, Button, StyleSheet,TouchableOpacity, Image, FlatList,ScrollView } from 'react-native';
import { styles } from '../style/HomePageCss';

const products = [
  { id: '1', name: 'Barbeque', image: require('../assets/BBQ.png'),percent: '98%' },
  { id: '2', name: 'Burger', image: require('../assets/Burger.png'),percent: '91%' },
  { id: '3', name: 'Sản phẩm 3',image: require('../assets/Pizza.png'),percent: '92%' },
  // Thêm các sản phẩm khác vào đây
];

function HomePage() {
  const renderItem = ({ item }) => (
    <View style={styles.product}>
      <View style={styles.boxImg}>
        <Image source={item.image} style={styles.imgProduct} />
        <TouchableOpacity style={styles.btnProduct} >
          <Text style={styles.nameProduct}>{item.name}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.valuate}>
        <Image source={require('../icon/Group.png')} />
        <Text style={styles.percent}>{item.percent}</Text>
      </View>
    </View>
  );
  return (
    <ScrollView>
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
        <View style={styles.cart}>
          <Image
            source={require('../icon/shopping-cart.png')} 
          />
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
              <TouchableOpacity style={styles.btnShipping} >
                <Text style={styles.btnShippingText}>DELIVERY</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.btnShipping} >
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
              renderItem={renderItem}
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



