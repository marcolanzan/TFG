import React from "react";
import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';

const CreateGameScreen = () => {
  const [nombre, setNombre] = useState('');
  const [propiedadJuego, setPropiedadJuego] = useState('');
  const [descripcionJuego, setDescripcionJuego] = useState('');
  const [categoriaJuego, setCategoriaJuego] = useState('');
  const [normasJuego, setNormasJuego] = useState('');

  const handleCreateGame = async () => {
    try {
      const response = await fetch('http://192.168.1.90:3000/juegos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nombre,
          propiedadJuego,
          descripcionJuego,
          categoriaJuego,
          normasJuego,
        }),
      });

      if (!response.ok) {
        throw new Error('Error al crear el juego');
      }

      // Si el juego se crea correctamente, muestra un mensaje de éxito
      Alert.alert('Juego Creado', 'El juego se ha creado exitosamente');

      // Limpiar los campos después de crear el juego
      setNombre('');
      setPropiedadJuego('');
      setDescripcionJuego('');
      setCategoriaJuego('');
      setNormasJuego('');
    } catch (error) {
      console.error('Error al crear el juego:', error);
      Alert.alert('Error', 'Ocurrió un error al crear el juego. Por favor, inténtalo de nuevo.');
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Crear Juego</Text>
      <TextInput
        placeholder="Nombre"
        value={nombre}
        onChangeText={setNombre}
        style={{ borderWidth: 1, padding: 10, marginVertical: 10, width: 250 }}
      />
      <TextInput
        placeholder="Propiedad del Juego"
        value={propiedadJuego}
        onChangeText={setPropiedadJuego}
        style={{ borderWidth: 1, padding: 10, marginVertical: 10, width: 250 }}
      />
      <TextInput
        placeholder="Descripción del Juego"
        value={descripcionJuego}
        onChangeText={setDescripcionJuego}
        style={{ borderWidth: 1, padding: 10, marginVertical: 10, width: 250 }}
      />
      <TextInput
        placeholder="Categoría del Juego"
        value={categoriaJuego}
        onChangeText={setCategoriaJuego}
        style={{ borderWidth: 1, padding: 10, marginVertical: 10, width: 250 }}
      />
      <TextInput
        placeholder="Normas del Juego"
        value={normasJuego}
        onChangeText={setNormasJuego}
        style={{ borderWidth: 1, padding: 10, marginVertical: 10, width: 250 }}
      />
      <Button title="Crear Juego" onPress={handleCreateGame} />
    </View>
  );
};

export default CreateGameScreen;
