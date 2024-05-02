import React from react;
import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';

const CreateRoomScreen = () => {
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [tematica, setTematica] = useState('');
  const [edadMinima, setEdadMinima] = useState('');
  const [edadMaxima, setEdadMaxima] = useState('');
  const [localizacion, setLocalizacion] = useState('');
  const [numeroParticipantes, setNumeroParticipantes] = useState('');

  const handleVerJuegos = () => {
    // Redirige a la pantalla de registro
    navigation.navigate('VerJuegos');
  };
  const handleCreateRoom = async () => {
    try {
      const response = await fetch('http://192.168.1.90:3000/salas', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nombre,
          descripcion,
          tematicaSala: tematica,
          edadMinima: parseInt(edadMinima),
          edadMaxima: parseInt(edadMaxima),
          localizacionSala: localizacion,
          numeroParticipantes: parseInt(numeroParticipantes),
        }),
      });

      if (!response.ok) {
        throw new Error('Error al crear la sala');
      }

      // Si la sala se crea correctamente, muestra un mensaje de éxito
      Alert.alert('Sala Creada', 'La sala se ha creado exitosamente');

      // Limpiar los campos después de crear la sala
      setNombre('');
      setDescripcion('');
      setTematica('');
      setEdadMinima('');
      setEdadMaxima('');
      setLocalizacion('');
      setNumeroParticipantes('');
      handleVerJuegos();
    } catch (error) {
      console.error('Error al crear la sala:', error);
      Alert.alert('Error', 'Ocurrió un error al crear la sala. Por favor, inténtalo de nuevo.');
    }
  };

  

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Crear Sala</Text>
      <TextInput
        placeholder="Nombre"
        value={nombre}
        onChangeText={setNombre}
        style={{ borderWidth: 1, padding: 10, marginVertical: 10, width: 250 }}
      />
      <TextInput
        placeholder="Descripción"
        value={descripcion}
        onChangeText={setDescripcion}
        style={{ borderWidth: 1, padding: 10, marginVertical: 10, width: 250 }}
      />
      <TextInput
        placeholder="Temática"
        value={tematica}
        onChangeText={setTematica}
        style={{ borderWidth: 1, padding: 10, marginVertical: 10, width: 250 }}
      />
      <TextInput
        placeholder="Edad Mínima"
        value={edadMinima}
        onChangeText={setEdadMinima}
        keyboardType="numeric"
        style={{ borderWidth: 1, padding: 10, marginVertical: 10, width: 250 }}
      />
      <TextInput
        placeholder="Edad Máxima"
        value={edadMaxima}
        onChangeText={setEdadMaxima}
        keyboardType="numeric"
        style={{ borderWidth: 1, padding: 10, marginVertical: 10, width: 250 }}
      />
      <TextInput
        placeholder="Localización"
        value={localizacion}
        onChangeText={setLocalizacion}
        style={{ borderWidth: 1, padding: 10, marginVertical: 10, width: 250 }}
      />
      <TextInput
        placeholder="Número de Participantes"
        value={numeroParticipantes}
        onChangeText={setNumeroParticipantes}
        keyboardType="numeric"
        style={{ borderWidth: 1, padding: 10, marginVertical: 10, width: 250 }}
      />
      <Button title="Confirmar Ajustes" onPress={handleCreateRoom} />
    </View>
  );
};
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 20,
    },
    title: {
      fontSize: 24,
      marginBottom: 20,
    },
    input: {
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 5,
      padding: 10,
      marginBottom: 10,
      width: '100%',
    },
  });
export default CreateRoomScreen;
