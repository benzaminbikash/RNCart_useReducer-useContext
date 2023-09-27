import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AppRouter from './src/AppRouter';
import ProductContext from './src/contextApi/ProductContext';

export default function App() {
  return (
  <ProductContext>
      <AppRouter/>
  </ProductContext>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
