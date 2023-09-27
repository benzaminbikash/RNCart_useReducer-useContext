import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  Image,
  StyleSheet,
  Pressable,
} from "react-native";
import React, { useContext } from "react";
import { AddProduct } from "../contextApi/ProductContext";
const { width, height } = Dimensions.get("window");

const ProductList = ({ item }) => {
  const {addProduct, dispatch}=useContext(AddProduct)
  // console.log('Add to cart', addProduct.length)
  return (
    <View style={styles.main}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <View style={{ marginTop: 10 }}>
        <Text style={{ color: "white", fontSize: 14 }}>
          {item.title.substring(0, 30)}+ ...
        </Text>
        <Text style={styles.price}>Rs {item.price}</Text>

        <Pressable style={styles.button} onPress={()=>dispatch({type:'ADD', payload:item})}>
          <Text>Add to Buy</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default ProductList;

const styles = StyleSheet.create({
  main: {
    width: width - 20,
    height: 120,
    backgroundColor: "black",
    margin: 10,
    flexDirection: "row",
    gap: 10,
  },
  button: {
    padding: 10,
    backgroundColor: "white",
    width: 100,
    borderRadius: 10,
    marginTop: 10,
  },
  image: { width: 100, height: 120, objectFit: "cover" },
  price: { color: "white", fontSize: 14, marginTop: 4 },
});
