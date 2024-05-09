//NO TOCAR

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/pokemontest';
import SettingScreen from '../screens/eventos';

const Stack = createStackNavigator();

export default function NavigationStacks() {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Home' component={HomeScreen} />
      <Stack.Screen name='Settings' component={SettingScreen} />
    </Stack.Navigator>
  );
}


