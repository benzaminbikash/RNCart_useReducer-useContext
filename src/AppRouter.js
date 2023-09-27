import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from './screen/HomeScreen'
import AddtoCart from './screen/AddtoCart'


const Stack=createNativeStackNavigator()
const AppRouter = () => {
  return (
  <NavigationContainer>
    <Stack.Navigator screenOptions={{
      animation:"none",
      headerShown:false
    }}>
        <Stack.Screen name='home' component={HomeScreen}/>
        <Stack.Screen name='cart' component={AddtoCart}/>
    </Stack.Navigator>
  </NavigationContainer>
  )
}

export default AppRouter