import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native'; // Agrega useFocusEffect
import AsyncStorage from '@react-native-async-storage/async-storage'; // Importa AsyncStorage

const LoginScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loggedInUser, setLoggedInUser] = useState(null);

  // Utiliza useFocusEffect para llamar a checkSession() cada vez que el componente se enfoque
  useFocusEffect(
    React.useCallback(() => {
      checkSession();
    }, [])
  );

  const checkSession = async () => {
    try {
      // Verifica si existe un usuario almacenado en AsyncStorage
      const user = await AsyncStorage.getItem('userData');
      if (user) {
        // Si hay un usuario, actualiza el estado para mostrar su nombre
        setLoggedInUser(JSON.parse(user).nome);
      }
    } catch (error) {
      console.error('Error al verificar la sesión:', error);
    }
  };

  const handleLogin = async () => {
    try {
      const response = await fetch(`http://192.168.1.90:3000/usuarios/login/${email}/${password}`);
      const userData = await response.json();

      // Verificar si se recibió un ID de usuario válido del servidor
      if (userData.id) {
        // Guardar los detalles del usuario en AsyncStorage si lo deseas
        await AsyncStorage.setItem('userData', JSON.stringify(userData));

        // Si el inicio de sesión es exitoso, mostramos un alert con el nombre del usuario
        Alert.alert('Inicio de Sesión Exitoso', `Hola, ${userData.nome}`);

        // Luego navegamos a la pantalla 'Main'
        navigation.navigate('Main', { id: userData.id });
      } else {
        // Si no se recibe un ID de usuario válido, mostrar un mensaje de error
        throw new Error('Correo electrónico o contraseña incorrectos');
      }
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      Alert.alert('Error', 'Correo electrónico o contraseña incorrectos');
    }
  };

  const handleRegister = () => {
    // Redirige a la pantalla de registro
    navigation.navigate('Register');
  };

  const handleLogout = async () => {
    try {
      // Borrar los datos del usuario del AsyncStorage
      await AsyncStorage.removeItem('userData');
      // Actualizar el estado loggedInUser a null
      setLoggedInUser(null);
    } catch (error) {
      console.error('Error al cerrar sesión:', error);
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {loggedInUser ? (
        <>
          <Text>Bienvenido, {loggedInUser}</Text>
          <Button title="Cerrar Sesión" onPress={handleLogout} />
        </>
      ) : (
        <>
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
        </>
      )}
    </View>
  );
};

export default LoginScreen;



