import React from "react";
import { Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/FontAwesome5";
import Favorite from "../screens/Favorite";
import Account from "../screens/Account";
/*import FavoriteNavigation from "./FavoriteNavigation";
import PokedexNavigation from "./PokedexNavigation";
import AccountNavigation from "./AccountNavigation";*/

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <Tab.Navigator initialRouteName="Disney">
      <Tab.Screen
        name="Favorite"
        component={Favorite}
        options={{
          tabBarLabel: "Favoritos",
          tabBarIcon: ({ color, size }) => (
            <Icon name="heart" color={color} size={size} />
          ),
        }}
      />

      <Tab.Screen
        name="Account"
        component={Account}
        options={{
          tabBarLabel: "Mi cuenta",
          tabBarIcon: ({ color, size }) => (
            <Icon name="user" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

