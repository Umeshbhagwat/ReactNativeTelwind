import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Drawer from './navigation/Drawer';
import { store } from './src/app/store'
import { Provider } from 'react-redux'

const root = createStackNavigator();

export default function App() {
  return (
  <Provider store={store}>
        <NavigationContainer>
          <Drawer/>
        </NavigationContainer>  
  </Provider> 
  )
}