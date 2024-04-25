import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const EditProfileScreen = ({ route }) => {
  const navigation = useNavigation();
  const { id } = route.params; // Obtén el ID del usuario de los parámetros de ruta

  // Utiliza los estados locales para almacenar los datos del usuario
  const [name, setName] = useState(''); 
  const [email, setEmail] = useState(''); 
  const [password, setPassword] = useState(''); 
  const [plan, setPlan] = useState(''); 
  const [description, setDescription] = useState(''); 

  const handleUpdateProfile = async () => {
    try {
      const updatedUserData = {
        name: name,
        email: email,
        password: password,
        plan: plan,
        description: description,
      };

      const response = await fetch(`http://192.168.1.90:3000/usuarios/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedUserData),
      });

      if (!response.ok) {
        throw new Error('Error al actualizar el usuario');
      }

      // Una vez actualizados los datos, puedes redirigir al usuario a una pantalla de confirmación o a otra pantalla
      navigation.navigate('Profile');
    } catch (error) {
      console.error('Error al actualizar usuario:', error);
      Alert.alert('Error', 'Ocurrió un error al actualizar el usuario. Por favor, inténtalo de nuevo.');
    }
  };

  return (
    <View style={styles.container}>
      <Text>Editar Perfil</Text>
      <TextInput
        placeholder="Nombre"
        value={name}
        onChangeText={setName}
        style={styles.input}
      />
      <TextInput
        placeholder="Correo electrónico"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
      />
      <TextInput
        placeholder="Contraseña"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.input}
      />
      <TextInput
        placeholder="Plan"
        value={plan}
        onChangeText={setPlan}
        style={styles.input}
      />
      <TextInput
        placeholder="Descripción personal"
        value={description}
        onChangeText={setDescription}
        style={styles.input}
      />
      <Button title="Actualizar Perfil" onPress={handleUpdateProfile} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    borderWidth: 1,
    padding: 10,
    marginVertical: 10,
    width: 250,
  },
});

export default EditProfileScreen;



