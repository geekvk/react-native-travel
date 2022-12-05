import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import OnboardScreen from './Screens/OnboardScreen';
import HomeScreen from './Screens/HomeScreen';
import PlaceScreen from './Screens/PlaceScreen';

const Stack = createNativeStackNavigator();
const StackNavigation = () => {
  return (
    <Stack.Navigator
        initialRouteName='onboard'
        screenOptions={{
            headerShown: false
        }}
    >
      <Stack.Screen name='onboard' component={OnboardScreen}/>
      <Stack.Screen name='Home' component={HomeScreen}/>
      <Stack.Screen name='Place' component={PlaceScreen}/>
    </Stack.Navigator>
  )
}

export default StackNavigation