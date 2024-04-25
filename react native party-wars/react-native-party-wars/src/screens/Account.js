import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const EditProfileScreen = () => {
  const navigation = useNavigation();
  const [name, setName] = useState('Nombre'); // Inicializa con el valor del nombre del usuario
  const [email, setEmail] = useState('correo@example.com'); // Inicializa con el valor del correo del usuario
  const [password, setPassword] = useState(''); // Inicializa con una cadena vacía para la contraseña
  const [plan, setPlan] = useState('Plan básico'); // Inicializa con el plan básico
  const [description, setDescription] = useState(''); // Inicializa con una descripción vacía
  const [image, setImage] = useState(null); // Considera cómo manejar las imágenes en tu aplicación

  const handleUpdateProfile = async () => {
    try {
      // Aquí puedes enviar los datos actualizados del usuario al servidor
      const updatedUserData = {
        nome: name,
        email: email,
        password: password,
        plan: plan,
        descripcionPersonal: description,
        imagen: image,
      };

      // Por ejemplo:
      // const response = await fetch('http://192.168.1.90:3000/usuarios/usuario_id', {
      //   method: 'PUT',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify(updatedUserData),
      // });

      // if (!response.ok) {
      //   throw new Error('Error al actualizar el usuario');
      // }

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
      {/* Considera cómo manejar la carga de imágenes en tu aplicación */}
      {/* Aquí puedes agregar un componente para cargar imágenes */}
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



