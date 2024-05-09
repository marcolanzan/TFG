import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Main = () => {
  const navigation = useNavigation();
  const [salas, setSalas] = useState([]);

  useEffect(() => {
    const intervalId = setInterval(fetchSalas, 20000); // Realizar la llamada cada 60 segundos

    // Limpiar el intervalo al desmontar el componente
    return () => clearInterval(intervalId);
  }, []);

  const fetchSalas = async () => {
    try {
      const response = await fetch('http://192.168.1.90:3000/salas');
      const data = await response.json();
      setSalas(data);
      
    } catch (error) {
      console.error('Error al cargar las salas:', error);
    }
  };

  const handleNavigate = (salaId) => {
    navigation.navigate('VerDatosSalas', { salaId });
  };

  const renderSalaCard = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate('VerDatosSalas', { salaId: item.id })} style={styles.card}>
      <Text style={styles.cardTitle}>{item.nombre}</Text>
      <Text style={styles.cardDescription}>{item.descripcion}</Text>
      <Text style={styles.cardInfo}>Tematica: {item.tematicaSala}</Text>
      <Text style={styles.cardInfo}>Edad Mínima: {item.edadMinima}</Text>
      <Text style={styles.cardInfo}>Edad Máxima: {item.edadMaxima}</Text>
      <Text style={styles.cardInfo}>Localización: {item.localizacionSala}</Text>
      <TouchableOpacity onPress={() => navigation.navigate('VerDatosSalas',  { salaId: item.id })} style={styles.button}>
        <Text style={styles.buttonText}>Ver Detalles</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Salas Disponibles</Text>
      <FlatList
        data={salas}
        renderItem={renderSalaCard}
        keyExtractor={(item) => item.id.toString()}
        style={styles.flatList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#f9f9f9',
    padding: 20,
    marginBottom: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  cardDescription: {
    marginBottom: 10,
  },
  cardInfo: {
    color: '#666',
    marginBottom: 5,
  },
  button: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default Main;



