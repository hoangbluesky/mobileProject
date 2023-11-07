import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet,TouchableOpacity } from 'react-native';
import { styles } from '../style/styles';



function ScreenLogin({ navigation }) {
  const [account, setAccount] = useState('');
  const [password, setPassword] = useState('');

  const goToHomePage = () => {
    navigation.navigate('Detail'); 
  };
  return (
    <View style={styles.container}>
      <View style={styles.curve}>
        <View style={styles.contentLogo}>
          <Text style = {styles.nameStore} >Lobace Food</Text>
          <Text style = {styles.nameTile} >Delivery</Text>
        </View>
        <View style= {styles.NamePage}>
          <Text style = {styles.TitleScreen} >LOGIN</Text>
        </View>
      </View>

      <View style= {styles.content}>
        <Text style= {{fontWeight: 600}} >Account</Text>
          <TextInput
            style={styles.input}
            placeholder="Account"
            value={account}
            onChangeText={(text) => setAccount(text)}
          />
          <Text style= {{fontWeight: 600, marginTop: 20}} >Password</Text>
          <TextInput
            style={styles.input}
            placeholder="Password"
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
        <TouchableOpacity style={styles.btnLogin} onPress={goToHomePage} >
          <Text style={styles.btnTextLogin}>LOGIN</Text>
        </TouchableOpacity>
        <Text style= {styles.forgot} >Forgot password?</Text>
      </View>
    </View>
    
  );
}
export default ScreenLogin;
