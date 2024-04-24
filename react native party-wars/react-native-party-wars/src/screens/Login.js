import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState(null);

  const handleLogin = async () => {
    try {
      const response = await fetch(`http://192.168.1.90:3000/usuarios/login/${email}/${password}`);
      const userData = await response.json();
      setUser(userData);
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      Alert.alert('Error', 'Ocurrió un error al iniciar sesión. Por favor, inténtalo de nuevo.');
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Inicio de Sesión</Text>
      <TextInput
        placeholder="Correo electrónico"
        value={email}
        onChangeText={setEmail}
        style={{ borderWidth: 1, padding: 10, marginVertical: 10, width: 250 }}
      />
      <TextInput
        placeholder="Contraseña"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={{ borderWidth: 1, padding: 10, marginVertical: 10, width: 250 }}
      />
      <Button title="Iniciar Sesión" onPress={handleLogin} />
      {user && (
        <View style={{ marginTop: 20 }}>
          <Text>ID: {user.id}</Text>
          <Text>Nombre: {user.nome}</Text>
          <Text>Correo electrónico: {user.email}</Text>
          <Text>Contraseña: {user.password}</Text>
          <Text>Plan: {user.plan}</Text>
          <Text>Descripción Personal: {user.descripcionPersonal}</Text>
        </View>
      )}
    </View>
  );
};

export default LoginScreen;


