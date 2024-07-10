import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, Image, FlatList, ScrollView,TouchableWithoutFeedback, Keyboard } from 'react-native';

function SearchScreen() {
  const handlePressOutside = () => {
    // Ẩn bàn phím khi nhấn ra ngoài
    Keyboard.dismiss();
  };
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await fetch(`http://192.168.137.1:2000/api/products?name=${searchTerm}`);
      
      if (!response.ok) {
        // Xử lý lỗi nếu có
        console.error('Error fetching data');
        return;
      }

      const data = await response.json();
      setSearchResults(data.product);
      alert("No Product");
    } catch (error) {
      console.error('Error fetching data', error);
    }
  };
  const renderitem = ({ item }) =>{
    <View style={styles.BoxListProduct}>
          <View style={styles.img}>
            <Image source={{ uri :item.image }} style={styles.image} />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.name}>{}</Text>
            <Text style={styles.detail}>Limited products</Text>
          </View>
    </View>
  }

  return (
    <TouchableWithoutFeedback onPress={handlePressOutside}>
    <ScrollView>

    <View style={styles.container}>
      <View style={styles.search}>
        <TextInput
          style={styles.inputSearch}
          placeholder="Search for a vendor or product"
          value={searchTerm}
          onChangeText={(text) => setSearchTerm(text)}
        />
        <Button style={styles.btn} title="Search" onPress={handleSearch} />
        
      </View>
      <View style={styles.boxProduct}>
        <Text style={styles.texttt} >Choose foods</Text>
        <View style={styles.BoxListProduct}>
          <View style={styles.img}>
            <Image source={require('../assets/BBQ.png')} style={styles.image} />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.name}>heloo</Text>
            <Text style={styles.detail}>Limited products</Text>
          </View>
    </View>
      </View>
        <FlatList
          data={searchResults}
          keyExtractor={(item) => item.id.toString()}
          renderItem={(renderitem)}/>

    </View>
    </ScrollView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    justifyContent: 'center',
  },
  search: {
    margin: 10,
    marginBottom: 15,
    flexDirection: 'row',
  },
  inputSearch: {
    backgroundColor: '#F0E3F6',
    paddingVertical: 12,
    borderRadius: 30,
    paddingLeft: 20,
    fontSize: 14,
    fontWeight: '600',
    width: 280,
  },
  btn: {
    marginLeft: 20,

  },
  BoxListProduct: {
   flexDirection: 'row',
   margin: 10,
    borderColor: '#ddd', // Màu của đường viền
    borderRadius: 8, // Độ cong của góc
    padding: 10,
    marginBottom: 10,
  },
  texttt: {
    marginLeft: 10,
    fontSize: 16,
    fontWeight: '400',
    color: "#bbb",
  },
  img: {
    width: '30%',
  },
  image: {
    height: 60,
    width: 'auto',
  },
  textContainer: {
    textAlign: 'center',
    marginLeft: 20,
  },
  name: {
    color: 'green',
    fontSize: 28,
    fontWeight: '600',
    marginBottom:5,
  },
  detail: {
    color: "#000",
    fontWeight: '500',
  }
});

export default SearchScreen;
