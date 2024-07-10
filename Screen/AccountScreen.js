import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";


function AccountScreen({ navigation }) {
  const [user, setuser] = useState(null);
  const getUserData = async () => {
    let curUser = await AsyncStorage.getItem("curUser");
    curUser = JSON.parse(curUser);
    setuser(curUser);
  };
  const logout = async () => {
    await AsyncStorage.removeItem("curUser");
    navigation.reset({
      index: 0,
      routes: [{ name: "Login" }],
    });
  };
  useEffect(() => {
    getUserData(user);
  }, []);
  
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>My Account</Text>
      </View>

      <View style={styles.content}>
        {/* Hiển thị thông tin tài khoản ở đây, ví dụ: */}
        <View style={styles.userInfo}>
        <Image
          style={{
            height: 120,
            width: 120,
            borderRadius: 100,
          }}
          source={{ uri: "https://i.pravatar.cc/300" }}
        />
          
          <Text style={styles.userName}>{user && user.name}</Text>
          <Text style={styles.userEmail}>{user && user.email}</Text>
        </View>

        {/* Các tùy chọn khác của người dùng, ví dụ: */}
        <TouchableOpacity style={styles.option} onPress={() => console.log('Edit Profile')}>
          <Text>Edit Profile</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.option} onPress={() => console.log('Change Password')}>
          <Text>Change Password</Text>
        </TouchableOpacity>

        {/* Nút đăng xuất */}
        <TouchableOpacity style={styles.logoutButton} onPress={logout}>
          <Text style={styles.logoutButtonText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
// Trong tệp HomePageCss.js


export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  header: {
    backgroundColor: '#9139BA',
    paddingTop: 75,
    paddingBottom: 30,
    marginBottom: 10,
    alignItems: 'center',
  },
  headerText: {
    color: '#ffffff',
    fontSize: 30, // Increased font size for better readability
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    padding: 20,
  },
  userInfo: {
    alignItems: 'center',
    marginBottom: 20,
  },
  userAvatar: {
    width: 120, // Increased avatar size
    height: 120,
    borderRadius: 60,
  },
  userName: {
    marginTop: 15, // Increased marginTop for better spacing
    fontSize: 22, // Increased font size for better readability
    fontWeight: 'bold',
  },
  userEmail: {
    marginTop: 5,
    fontSize: 16, // Adjusted font size for better readability
    color: '#7f8c8d',
  },
  option: {
    padding: 15,
    backgroundColor: '#ecf0f1',
    borderRadius: 8, // Increased border radius for a softer look
    marginBottom: 15, // Increased marginBottom for better separation
  },
  optionText: {
    fontSize: 16, // Adjusted font size for better readability
  },
  logoutButton: {
    padding: 15,
    backgroundColor: '#9139BA',
    borderRadius: 8,
    alignItems: 'center',
  },
  logoutButtonText: {
    color: '#ffffff',
    fontSize: 18, // Increased font size for better readability
    fontWeight: 'bold',
  },
});




export default AccountScreen;
