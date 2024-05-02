import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await fetch(`http://192.168.1.90:3000/usuarios/login/${email}/${password}`);
      const userData = await response.json();
      
      // Si el inicio de sesión es exitoso, mostramos un alert con el ID del usuario
      Alert.alert('Inicio de Sesión Exitoso', `ID del usuario: ${userData.id}`);

      // Luego navegamos a la pantalla 'Main'
      navigation.navigate('Main');

    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      Alert.alert('Error', 'Ocurrió un error al iniciar sesión. Por favor, inténtalo de nuevo.');
    }
  };

  const handleRegister = () => {
    // Redirige a la pantalla de registro
    navigation.navigate('Register');
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
      <Text style={{ marginVertical: 10 }}>¿No tienes una cuenta aún? <Text style={{ color: 'blue' }} onPress={handleRegister}>Registrarse</Text></Text>
    </View>
  );
};

export default LoginScreen;