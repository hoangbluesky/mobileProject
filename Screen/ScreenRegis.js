import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet,TouchableOpacity,TouchableWithoutFeedback, Keyboard } from 'react-native';
import { styles } from '../style/styles';
import AsyncStorage from "@react-native-async-storage/async-storage";




function ScreenRegis({ navigation }) {
  const handlePressOutside = () => {
    // Ẩn bàn phím khi nhấn ra ngoài
    Keyboard.dismiss();
  };
    const [name, setName] = useState("");
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const onGoBack = () => {
        navigation.goBack();
      };
      const onSignUp = () => {
        if (name.trim() == "" || !name) {
          alert("Không được để trống họ và tên !");
        } else if (email.trim() == "" || !email) {
          alert("Không được để trống email !");
        } else if (password.trim() == "" || !password) {
          alert("Không được để trống mật khẩu !");
        } else {
          createAccount();
        }
      };
      const createAccount = async () => {
        let userData = await AsyncStorage.getItem("userData");
        if (userData) {
          userData = JSON.parse(userData);
          let arr = [...userData];
          arr = arr.filter(
            (value) => value.email.toLocaleLowerCase() == email.toLocaleLowerCase()
          );
          if (arr.length > 0) {
            alert("Email already registered!");
            return;
          } else {
            userData.push({
              name: name.trim(),
              email: email.trim(),
              password: password.trim(),
            });
          }
        } else {
          userData = [];
          userData.push({
            name: name.trim(),
            email: email.trim(),
            password: password.trim(),
          });
        }
        AsyncStorage.setItem("userData", JSON.stringify(userData));
        alert("Đăng ký thành công!");
        navigation.replace('Regis');
      };
  const goToLogin = () => {
    navigation.replace('Login'); 
  };
  return (
    <TouchableWithoutFeedback onPress={handlePressOutside}>
    <View style={styles.container}>
      <View style={styles.curve}>
        <View style={styles.contentLogo}>
          <Text style = {styles.nameStore} >Lobace Food</Text>
          <Text style = {styles.nameTile} >Delivery</Text>
        </View>
        <View style= {styles.NamePage}>
          <Text style = {styles.TitleScreen} >REGISTER</Text>
        </View>
      </View>

      <View style= {styles.content}>
        <Text style= {{fontWeight: 600}} >Name</Text>
          <TextInput
            style={styles.input}
            placeholder="Your name"
            value={name}
            onChangeText={(text) => setName(text)}
          />
          <Text style= {{fontWeight: 600, marginTop: 20}} >Email</Text>
          <TextInput
            style={styles.input}
            placeholder="Your email"
            value={email}
            onChangeText={(text) => setemail(text)}
          />
          <Text style= {{fontWeight: 600, marginTop: 20}} >Password</Text>
          <TextInput
            style={styles.input}
            placeholder="Password"
            value={password}
            onChangeText={(text) => setpassword(text)}
          />
        <TouchableOpacity style={styles.btnLogin} onPress={onSignUp} >
          <Text style={styles.btnTextLogin}>REGISTER</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnLogin} onPress={goToLogin} >
          <Text style={styles.btnTextLogin}>LOGIN</Text>
        </TouchableOpacity>
      </View>
    </View>
    </TouchableWithoutFeedback>
  );
}
export default ScreenRegis;
