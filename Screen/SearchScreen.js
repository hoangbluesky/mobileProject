// import React from 'react';
// import { View, Text, TextInput, Button, StyleSheet,TouchableOpacity, Image, FlatList,ScrollView } from 'react-native';


// function SearchScreen() {
//     return(
//         <View style={styles.container}>
//           <View style={styles.search}>
//             <TextInput
//               style={styles.inputSearch}
//               placeholder="Search for a vendor or product"
//             />
//           </View>
//         </View>
//     )
// }
// const styles = StyleSheet.create({
//   container: {
//     marginTop: 50,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   search: {
//     // flex: 1,
//     margin: 10,
//     marginBottom: 15,
    
// },
// inputSearch: {
//     backgroundColor: '#F0E3F6',
//     paddingVertical: 12,
//     borderRadius: 30,
//     paddingLeft: 20,
//     fontSize: 14,
//     fontWeight: '600',
//     width: 300,
// },
// });
// export default SearchScreen;

import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet, Image, FlatList } from 'react-native';
import axios from 'axios';

const SearchScreen = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResult, setSearchResult] = useState([]);

  const searchProduct = async () => {
    try {
      setSearchTerm();
      const response = await axios.get(`http://192.168.137.1:2000/api/products`);

      if (response.data.length > 0) {
        setSearchResult(response.data);
      } else {
        setSearchResult([]);
      }
    } catch {
      
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter product name"
        value={searchTerm}
        onChangeText={searchProduct}
      />
      <FlatList
        data={searchResult}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.productItem}>
            <Image source={{ uri: item.image }} style={styles.productImage} />
            <Text style={styles.productName}>{item.name}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    padding: 8,
    width: '80%',
  },
  productItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  productImage: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  productName: {
    fontSize: 18,
  },
});

export default SearchScreen;
