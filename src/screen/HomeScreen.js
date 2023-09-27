import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
  Dimensions,
  StyleSheet,
} from "react-native";
import React, { useContext, useEffect, useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Entypo } from "@expo/vector-icons";
import ProductList from "../components/ProductList";
import Header from "../components/Header";
import { Products } from "../contextApi/ProductContext";
const { width, height } = Dimensions.get("window");
const HomeScreen = () => {

  const {data, setData}=useContext(Products)
  return (
    <View style={{ marginTop: 30 }}>
      {/* header */}
     <Header/>
      {/* fetch data */}
      <FlatList
        data={data}
        renderItem={({ item }) => {
          return (
            <ProductList item={item} />
          );
        }}
      />
    </View>
  );
};

export default HomeScreen;
const styles = StyleSheet.create({

});
