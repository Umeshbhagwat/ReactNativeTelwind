import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import About from '../src/components/About';
import AuthStack from './AuthStack';
import ZomatoLogin from '../src/components/ZomatoLogin'
const Drawers = createDrawerNavigator();

export default function Drawer() {
  return (
    <Drawers.Navigator >
      <Drawers.Screen name="Login" component={ZomatoLogin} options={{ headerStyle: {
      backgroundColor: '#E52B50', 
   } }}/>
    <Drawers.Screen name="About" component={About} options={{ headerStyle: {
      backgroundColor: '#E52B50', 
   } }}/>
   
    </Drawers.Navigator>
  )
}