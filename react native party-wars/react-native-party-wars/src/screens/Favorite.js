import React, { useEffect, useState } from "react";
import { View, Text, FlatList, SafeAreaView, StyleSheet } from "react-native";

const EventList = () => {
  const [events, setEvents] = useState([]);
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch("http://192.168.1.90:3000/eventos");
        const data = await response.json();
        setEvents(data);
      } catch (error) {
        console.error("Error fetching events: ", error);
      }
    };

    const fetchRooms = async () => {
      try {
        const response = await fetch("http://192.168.1.90:3000/salas");
        const data = await response.json();
        setRooms(data);
      } catch (error) {
        console.error("Error fetching rooms: ", error);
      }
    };

    fetchEvents();
    fetchRooms();
  }, []);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.sectionTitle}>Eventos</Text>
        <FlatList
          data={events}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={[styles.item, styles.eventItem]}>
              <Text style={styles.title}>Nombre: {item.nombre}</Text>
              <Text style={styles.info}>Descripción: {item.descripcionEnvento}</Text>
              <Text style={styles.info}>Fecha: {item.fechaEvento}</Text>
              <Text style={styles.info}>Edad mínima: {item.edadMinEvento}</Text>
              <Text style={styles.info}>Edad máxima: {item.edadMaxEvento}</Text>
              <Text style={styles.info}>Localización: {item.localizacionEvento}</Text>
              <Text style={styles.info}>Cantidad de asistentes: {item.cantidadAsistentes}</Text>
              <Text style={styles.info}>Empresa: {item.nombreEmpEvento}</Text>
            </View>
          )}
          horizontal={true}
        />
        <Text style={[styles.sectionTitle, { marginTop: 20 }]}>Salas</Text>
        <FlatList
          data={rooms}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={[styles.item, styles.roomItem]}>
              <Text style={styles.title}>Nombre: {item.nombre}</Text>
              <Text style={styles.info}>Descripción: {item.descripcion}</Text>
              <Text style={styles.info}>Edad mínima: {item.edadMinima}</Text>
              <Text style={styles.info}>Edad máxima: {item.edadMaxima}</Text>
              <Text style={styles.info}>Tematica: {item.tematicaSala}</Text>
              <Text style={styles.info}>Localización: {item.localizacionSala}</Text>
              <Text style={styles.info}>Número de participantes: {item.numeroParticipantes}</Text>
            </View>
          )}
          horizontal={true}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  item: {
    backgroundColor: "#f9c2ff",
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    marginRight: 10,
  },
  eventItem: {
    minWidth: 300,
  },
  roomItem: {
    minWidth: 150, // Ajusta el tamaño de las cartas de las salas aquí
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  info: {
    fontSize: 16,
    marginBottom: 5,
  },
});

export default EventList;


