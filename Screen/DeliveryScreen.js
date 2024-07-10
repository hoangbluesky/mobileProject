import React from 'react';
import { View, Text, TextInput, Button, StyleSheet,TouchableOpacity, Image, FlatList,ScrollView } from 'react-native';
import { styles } from '../style/HomePageCss';


function DeliveryScreen() {
    return(
        <View style={styles.contentLogo}>
          <Text style = {styles.nameStore} >Lobace Food</Text>
          <Text style = {styles.nameTile} >Delivery</Text>
        </View>
    )
}

export default DeliveryScreen;