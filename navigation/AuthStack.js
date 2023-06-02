import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import SignUp from '../src/components/SignUp';
import Login from '../src/components/Login';

const Auth = createStackNavigator();

export default function AuthStack() {
  return (
    <Auth.Navigator>
        <Auth.Screen name="SignUp" component={SignUp} />
        <Auth.Screen name="Login" component={Login} />
        <Auth.Screen name="About" component={About} />
  </Auth.Navigator>
  )
}