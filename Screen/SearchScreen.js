import React from 'react';
import { View, Text, TextInput, Button, StyleSheet,TouchableOpacity, Image, FlatList,ScrollView } from 'react-native';


function SearchScreen() {
    return(
        <View style={styles.container}>
          <View style={styles.search}>
            <TextInput
              style={styles.inputSearch}
              placeholder="Search for a vendor or product"
            />
          </View>
        </View>
    )
}
const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  search: {
    // flex: 1,
    margin: 10,
    marginBottom: 15,
    
},
inputSearch: {
    backgroundColor: '#F0E3F6',
    paddingVertical: 12,
    borderRadius: 30,
    paddingLeft: 20,
    fontSize: 14,
    fontWeight: '600',
    width: 300,
},
});
export default SearchScreen;