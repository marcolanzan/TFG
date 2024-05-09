import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import { StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const CreateRoomScreen = () => {
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [tematica, setTematica] = useState('');
  const [edadMinima, setEdadMinima] = useState('');
  const [edadMaxima, setEdadMaxima] = useState('');
  const [localizacion, setLocalizacion] = useState('');
  const [numeroParticipantes, setNumeroParticipantes] = useState('');
  const navigation = useNavigation();
  let idNavigationJuegos = 0; // Cambiando de constante a variable
  const handleVerJuegos = () => {
    navigation.navigate('VerJuegos', { idNavigationJuegos }); // Pasar el ID como un objeto
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

      const data = await response.json(); // Obtener el cuerpo de la respuesta
      idNavigationJuegos = data; // Asignar directamente el número devuelto
      Alert.alert('Sala Creada', 'La sala se ha creado exitosamente');
      console.log('ID de la sala creada:', idNavigationJuegos); // Imprimir el ID de la sala creada en la consola

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
    <View style={styles.container}>
      <Text style={styles.title}>Crear Sala</Text>
      <TextInput
        placeholder="Nombre"
        value={nombre}
        onChangeText={setNombre}
        style={styles.input}
      />
      <TextInput
        placeholder="Descripción"
        value={descripcion}
        onChangeText={setDescripcion}
        style={styles.input}
      />
      <TextInput
        placeholder="Temática"
        value={tematica}
        onChangeText={setTematica}
        style={styles.input}
      />
      <TextInput
        placeholder="Edad Mínima"
        value={edadMinima}
        onChangeText={setEdadMinima}
        keyboardType="numeric"
        style={styles.input}
      />
      <TextInput
        placeholder="Edad Máxima"
        value={edadMaxima}
        onChangeText={setEdadMaxima}
        keyboardType="numeric"
        style={styles.input}
      />
      <TextInput
        placeholder="Localización"
        value={localizacion}
        onChangeText={setLocalizacion}
        style={styles.input}
      />
      <TextInput
        placeholder="Número de Participantes"
        value={numeroParticipantes}
        onChangeText={setNumeroParticipantes}
        keyboardType="numeric"
        style={styles.input}
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
