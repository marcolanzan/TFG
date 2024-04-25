import React, { useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Favorite from '../screens/Favorite';
import Account from '../screens/Account';
import Main from '../screens/Main';
import LoginScreen from '../screens/Login'; // Importa el componente LoginScreen
import RegisterScreen from '../screens/RegisterScreen'; // Importa el componente RegisterScreen

const Tab = createBottomTabNavigator();

export default function Navigation() {
  const [showTabs, setShowTabs] = useState(false);

  return (
    <Tab.Navigator initialRouteName="Login">
      <Tab.Screen
        name="Favorite"
        component={Favorite}
        options={{
          tabBarLabel: 'Favoritos',
          tabBarIcon: ({ color, size }) => (
            <Icon name="heart" color={color} size={size} />
          ),
          tabBarVisible: showTabs,
        }}
      />
      <Tab.Screen
        name="Account"
        component={Account}
        options={{
          tabBarLabel: 'Mi cuenta',
          tabBarIcon: ({ color, size }) => (
            <Icon name="user" color={color} size={size} />
          ),
          tabBarVisible: showTabs,
        }}
      />
      <Tab.Screen
        name="Main"
        component={Main}
        options={{
          tabBarLabel: 'Principal',
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" color={color} size={size} />
          ),
          tabBarVisible: showTabs,
        }}
      />
      <Tab.Screen
        name="Login"
        component={LoginScreen}
        options={{
          tabBarLabel: 'Iniciar Sesión',
          tabBarIcon: ({ color, size }) => (
            <Icon name="sign-in-alt" color={color} size={size} />
          ),
          tabBarVisible: false,
        }}
      />
      <Tab.Screen
        name="Register"
        component={RegisterScreen}
        options={{
          tabBarLabel: 'Registrarse',
          tabBarIcon: ({ color, size }) => (
            <Icon name="user-plus" color={color} size={size} />
          ),
          tabBarVisible: false,
          tabBarAccessibilityLabel: 'label-not-visible',
        }}
      />
    </Tab.Navigator>
  );
}



