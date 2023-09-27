import { View, Text, FlatList } from "react-native";
import React, { useContext } from "react";
import { AddProduct } from "../contextApi/ProductContext";
import AddTOCartList from "../components/AddToCartList";

const AddtoCart = () => {
  const { addProduct, dispatch } = useContext(AddProduct);
  return (
    <View style={{ marginTop: 30, flex: 1 }}>
      {addProduct.length === 0 ? (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Text>Please Shopping</Text>
        </View>
      ) : (
        <FlatList
          data={addProduct}
          renderItem={({ item }) => {
            return <AddTOCartList item={item} />;
          }}
        />
      )}
    </View>
  );
};

export default AddtoCart;
