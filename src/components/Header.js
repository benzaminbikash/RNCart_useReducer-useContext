import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useContext } from 'react'
import { Entypo } from "@expo/vector-icons";
import { AddProduct } from '../contextApi/ProductContext';
import { useNavigation } from '@react-navigation/native'
const Header = () => {
  const navigation=useNavigation()
  const {addProduct, dispatch}=useContext(AddProduct)
  return (
    <View style={styles.header}>
        <View></View>
        <Text style={styles.title}>All Product</Text>
        <TouchableOpacity style={{ paddingRight: 10 }} onPress={()=>navigation.navigate('cart')}>
          <Entypo name="shopping-cart" size={20} color="white" />
          <View style={styles.cart}>
            <Text style={{ color: "white", fontSize: 15 }}>{addProduct.length}</Text>
          </View>
        </TouchableOpacity>
      </View>
  )
}

export default Header
const styles = StyleSheet.create({
    header: {
      height: 60,
      backgroundColor: "black",
      alignItems: "center",
      justifyContent: "space-between",
      flexDirection: "row",
    },
    title: { fontSize: 16, fontWeight: "bold", color: "white" },
    cart: {
      width: 20,
      height: 20,
      backgroundColor: "black",
      borderRadius: 100,
      position: "absolute",
      top: -13,
      right: 6,
      alignItems: "center",
      elevation: 12,
      shadowColor: "black",
    },
  });
  