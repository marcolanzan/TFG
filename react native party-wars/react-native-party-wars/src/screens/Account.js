import React, { useEffect, useState } from "react";
import { View, Text, FlatList, SafeAreaView, StyleSheet, Image } from "react-native";


const UserList = () => {
  const [users, setUsers] = useState([]);


  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(
          "http://192.168.1.90:3000/usuarios" // Reemplaza esto con la URL de tu API
        );
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error("El error es " + error);
      }
    };


    fetchUsers();
  }, []);


  return (
    <SafeAreaView style={styles.safeArea}>
      <FlatList
        data={users}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.userItem}>
            <Text style={styles.title}>ID: {item.id}</Text>
            <Text style={styles.info}>Nombre: {item.nome}</Text>
            <Text style={styles.info}>Email: {item.email}</Text>
            <Text style={styles.info}>Plan: {item.plan}</Text>
            <Text style={styles.description}>Descripción Personal: {item.descripcionPersonal}</Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
  },
  userItem: {
    backgroundColor: "#f9c2ff",
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
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
  description: {
    fontSize: 14,
    fontStyle: "italic",
  },
});


export default UserList;
