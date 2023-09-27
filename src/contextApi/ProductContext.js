import { createContext, useEffect, useReducer, useState } from "react";
import Reducer from "./Reducer";
export const Products = createContext();
export const AddProduct=createContext();


const ProductContext = ({ children }) => {
  const [data, setData] = useState([]);
  const [addProduct, dispatch]=useReducer(Reducer, [])
  const fetchApi = async () => {
    const response = await fetch("https://fakestoreapi.com/products/");
    const d = await response.json();
    setData(d);
  };
  useEffect(() => {
    fetchApi();
  }, []);
  return (
    <Products.Provider value={{ data, setData }}>
      <AddProduct.Provider value={{addProduct, dispatch}}>
        {children}
      </AddProduct.Provider>
    </Products.Provider>
  );
};

export default ProductContext;
