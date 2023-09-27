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
import { Ionicons } from "@expo/vector-icons";

const AddTOCartList = ({ item }) => {
  const { addProduct, dispatch } = useContext(AddProduct);
  console.log(item)
  return (
    <View style={styles.main}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <View style={{ marginTop: 10 }}>
        <Text style={{ color: "white", fontSize: 14 }}>
          {item.title.substring(0, 30)}+ ...
        </Text>
        <Text style={styles.price}>Rs {item.price}</Text>

        <View style={{ flexDirection: "row", gap: 10, alignItems: "center" }}>
          <TouchableOpacity onPress={()=>dispatch({type:"INCREASE", payload:item})} >
            <Ionicons name="add-circle" size={30} color="white" />
          </TouchableOpacity>
          <Text style={{ color: "white", fontSize: 20, fontWeight: "bold" }}>
            {item.qty}
          </Text>
          <TouchableOpacity onPress={()=>dispatch({type:"DECREASE", payload:item})} >
            <Ionicons name="remove-circle" size={30} color="white" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default AddTOCartList;

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
    width: 30,
    height: 30,
    marginTop: 10,
    borderRadius: 30,
  },
  image: { width: 100, height: 120, objectFit: "cover" },
  price: { color: "white", fontSize: 14, marginTop: 4 },
  symbol: {
    // fontSize:20,
    color: "red",
  },
});
