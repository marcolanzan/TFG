import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const Main = ({ route }) => {
  // Extrae el ID del usuario de las props de navegación
  const { id } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.text}>¡Bienvenido a la pantalla principal! {id}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default Main;
