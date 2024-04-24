import React, { useEffect, useState } from "react";
import { View, Text, FlatList, SafeAreaView, StyleSheet } from "react-native";

const EventList = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch(
          "http://192.168.1.90:3000/eventos" // Cambia localhost por tu dirección IP
        );
        const data = await response.json();
        setEvents(data);
      } catch (error) {
        console.error("El error es " + error);
      }
    };

    fetchEvents();
  }, []);

  return (
    <SafeAreaView style={styles.safeArea}>
      <FlatList
        data={events}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.eventItem}>
            <Text>ID: {item.id}</Text>
            <Text>Nombre Sala: {item.nombreSala}</Text>
            <Text>Edad mínima: {item.edadMinEvento}</Text>
            <Text>Edad máxima: {item.edadMaxEvento}</Text>
            <Text>Localización: {item.localizacion}</Text>
            <Text>Temática: {item.tematicaEvento}</Text>
            <Text>Descripción: {item.descripcionEnvento}</Text>
            <Text>Localización Evento: {item.localizacionEvento}</Text>
            <Text>Cantidad de Asistentes: {item.cantidadAsistentes}</Text>
            <Text>Fecha del Evento: {item.fechaEvento}</Text>
            <Text>Nombre de la Empresa: {item.nombreEmpEvento}</Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  eventItem: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
});

export default EventList;



