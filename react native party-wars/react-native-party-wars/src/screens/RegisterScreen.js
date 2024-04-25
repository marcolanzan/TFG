import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const RegisterScreen = () => {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [plan, setPlan] = useState('Plan básico');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null); // Considera cómo manejar las imágenes en tu aplicación

  const handleRegister = async () => {
    try {
      const userData = {
        nome: name,
        email: email,
        password: password,
        plan: plan,
        descripcionPersonal: description,
        imagen: image,
      };

      const response = await fetch('http://192.168.1.90:3000/usuarios', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        throw new Error('Error al registrar el usuario');
      }

      // Una vez registrado, redirigir al usuario a la pantalla 'Main'
      navigation.navigate('Main');
    } catch (error) {
      console.error('Error al registrar usuario:', error);
      Alert.alert('Error', 'Ocurrió un error al registrar el usuario. Por favor, inténtalo de nuevo.');
    }
  };

  const goToLogin = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <Text>Registro</Text>
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
      <Button title="Registrarse" onPress={handleRegister} />
      <TouchableOpacity onPress={goToLogin}>
        <Text style={styles.link}>¿Ya tienes una cuenta? <Text style={{ color: 'blue' }}>Pincha aquí</Text></Text>
      </TouchableOpacity>
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
  link: {
    marginTop: 10,
  },
});

export default RegisterScreen;



