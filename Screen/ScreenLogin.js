import React, {useEffect, useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet,TouchableOpacity,TouchableWithoutFeedback, Keyboard } from 'react-native';
import { styles } from '../style/styles';
import AsyncStorage from '@react-native-async-storage/async-storage';


function ScreenLogin({ navigation }) {
  const handlePressOutside = () => {
    // Ẩn bàn phím khi nhấn ra ngoài
    Keyboard.dismiss();
  };
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const goToHomePage = () => {
    if (email.trim() == '' || !email) {
      alert('Không được để trống email !');
    } else if (password.trim() == '' || !password) {
      alert('Không được để trống mật khẩu !');
    } else {
      login();
    }
  };


const login = async () => {
  let userData = await AsyncStorage.getItem('userData');
  if (userData) {
    userData = JSON.parse(userData);
    let arr = [...userData];
    arr = arr.filter(
      (value) =>
        value.email.toLocaleLowerCase() == email.toLocaleLowerCase() &&
        value.password == password
    );
    if (arr.length > 0) {
      let curUser = arr[0];
      AsyncStorage.setItem('curUser', JSON.stringify(curUser));
      
      // Chuyển hướng đến BottomTabNavigator và truyền thông tin
      navigation.replace('BottomTabNavigator');
    } else alert('Email hoặc mật khẩu không chính xác!');
  } else {
    alert('Email hoặc mật khẩu không chính xác!');
  }
};




  const gotoSingup = () => {
    navigation.replace('Regis'); 
  };
  const checkLogin = async () => {
    let userData = await AsyncStorage.getItem('curUser');
    if (userData) navigation.replace('');
  };
  useEffect(() => {
    checkLogin();
  }, []);
  return (
    <TouchableWithoutFeedback onPress={handlePressOutside}>
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
        <Text style= {{fontWeight: 600}} >Email</Text>
          <TextInput
            style={styles.input}
            placeholder="Your email"
            value={email}
            onChangeText={(text) => setEmail(text)}
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
        <Text style= {styles.singUP} onPress={gotoSingup} >Sign Up</Text>
      </View>
    </View>
    </TouchableWithoutFeedback>
  );
}
export default ScreenLogin;
