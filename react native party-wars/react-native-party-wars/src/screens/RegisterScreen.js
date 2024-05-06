import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, Alert, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker'; // Importa expo-image-picker

const RegisterScreen = () => {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [plan, setPlan] = useState('Plan básico');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);
  const [imageSelected, setImageSelected] = useState(false); // Estado para indicar si se ha seleccionado una imagen

  useEffect(() => {
    requestMediaLibraryPermission(); // Solicita permiso al cargar el componente
  }, []);

  const requestMediaLibraryPermission = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert(
        'Permiso necesario',
        'Se requiere permiso para acceder a la biblioteca de fotos.',
        [{ text: 'OK', onPress: () => console.log('OK Pressed') }]
      );
    }
  };

  const handleRegister = async () => {
    try {
      const userData = {
        nome: name,
        email: email,
        password: password,
        plan: plan,
        descripcionPersonal: description,
        image: image,
      };
      const response = await fetch('http://192.168.1.90:3000/usuarios', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });
      console.log(userData);

      if (!response.ok) {
        throw new Error('Error al registrar el usuario');
      }

      navigation.navigate('Main');
    } catch (error) {
      console.error('Error al registrar usuario:', error);
      Alert.alert('Error', 'Ocurrió un error al registrar el usuario. Por favor, inténtalo de nuevo.');
    }
  };

  const goToLogin = () => {
    navigation.navigate('Login');
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.assets[0].uri);
      setImageSelected(true); // Establece el estado como verdadero cuando se selecciona una imagen
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Registro</Text>
      <View style={styles.inputContainer}>
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
      </View>
      <Button title="Seleccionar Imagen" onPress={pickImage} />
      {imageSelected && <Text style={styles.text}>Imagen seleccionada</Text>}
      {image && <Image source={{ uri: image }} style={styles.image} />}
      <View style={styles.buttonContainer}>
        <Button title="Registrarse" onPress={handleRegister} />
        <TouchableOpacity onPress={goToLogin}>
          <Text style={styles.link}>¿Ya tienes una cuenta? <Text style={styles.blueText}>Pincha aquí</Text></Text>
        </TouchableOpacity>
      </View>
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
  heading: {
    fontSize: 22,
    marginBottom: 20,
  },
  inputContainer: {
    width: '100%',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    marginBottom: 10,
  },
  text: {
    marginTop: 10,
    color: 'blue',
  },
  image: {
    width: 200,
    height: 200,
    marginVertical: 10,
  },
  buttonContainer: {
    width: '100%',
    marginTop: 20,
  },
  link: {
    marginTop: 10,
    textAlign: 'center',
  },
  blueText: {
    color: 'blue',
  },
});

export default RegisterScreen;
