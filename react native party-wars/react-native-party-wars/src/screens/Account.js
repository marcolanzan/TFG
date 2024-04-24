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
            <Text>ID: {item.id}</Text>
            <Text>Nombre: {item.nome}</Text>
            <Text>Email: {item.email}</Text>
            <Text>Plan: {item.plan}</Text>
            <Text>Descripción Personal: {item.descripcionPersonal}</Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
};


// Función para convertir un ArrayBuffer a una cadena Base64


const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  userItem: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  image: {
    width: 50,
    height: 50,
  },
});


export default UserList;





