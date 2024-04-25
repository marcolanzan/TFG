
// Importa las dependencias necesarias
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// Define el componente de la pantalla Main
const Main = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>¡Bienvenido a la pantalla principal!</Text>
    </View>
  );
};

// Estilos para el componente
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

// Exporta el componente Main
export default Main;
