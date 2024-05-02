import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ViewGamesScreen = () => {
  const navigation = useNavigation();
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchGames = async () => {
    try {
      const response = await fetch('http://192.168.1.90:3000/juegos');
      const data = await response.json();
      setGames(data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching games:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchGames(); // Realizar la primera llamada al cargar el componente

    const intervalId = setInterval(fetchGames, 60000); // Realizar la llamada cada 60 segundos

    // Limpiar el intervalo al desmontar el componente
    return () => clearInterval(intervalId);
  }, []);

  const handleCrearJuego = () => {
    navigation.navigate('CrearJuego');
  };

  const renderGameItem = ({ item }) => (
    <View style={{ padding: 10, borderBottomWidth: 1, borderBottomColor: '#ccc' }}>
      <Text style={{ fontWeight: 'bold' }}>{item.nombre}</Text>
      <Text>Propiedad: {item.propiedadJuego}</Text>
      <Text>Descripción: {item.descripcionJuego}</Text>
      <Text>Categoría: {item.categoriaJuego}</Text>
      <Text>Normas: {item.normasJuego}</Text>
    </View>
  );

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <View style={{ flex: 1, padding: 10 }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10 }}>Lista de Juegos</Text>
      <FlatList
        data={games}
        renderItem={renderGameItem}
        keyExtractor={(item) => item.id.toString()}
      />
      <Text style={{ marginVertical: 10 }}>¿No ves ningún juego que te convenza? <Text style={{ color: 'blue' }} onPress={handleCrearJuego}>¡Crea el tuyo!</Text></Text>
    </View>
  );
};

export default ViewGamesScreen;


