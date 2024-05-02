import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Main = () => {
  const navigation = useNavigation();

  // Estado local para almacenar el ID del usuario
  const [id, setId] = useState(0);

  useEffect(() => {
    // Cargar los datos del usuario al cargar la pantalla
    loadUserData();
  }, []);

  const loadUserData = async () => {
    try {
      // Obtener los datos del usuario guardados en AsyncStorage
      const userData = await AsyncStorage.getItem('userData');
      if (userData) {
        // Si hay datos del usuario, actualizar el estado del ID
        const { id } = JSON.parse(userData);
        setId(id);
      }
    } catch (error) {
      console.error('Error al cargar los datos del usuario:', error);
    }
  };

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



