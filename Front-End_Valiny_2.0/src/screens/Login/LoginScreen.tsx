// screens/Home/LoginScreen.tsx
import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet, Image } from 'react-native';

const LoginScreen: React.FC = () => {
  const [usuario, setUsuario] = useState('');
  const [contraseña, setContraseña] = useState('');

  const handleUsuarioChange = (text: string) => {
    setUsuario(text);
  };

  const handleContraseñaChange = (text: string) => {
    setContraseña(text);
  };

  const handleSubmit = () => {
    if (usuario && contraseña) {
      Alert.alert('¡BIENVENIDO!');
      // Aquí puedes poner el código para manejar el inicio de sesión
    } else {
      Alert.alert('Por favor, ingresa usuario y contraseña.');
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('./assets/igages/logo.jpg')}
        style={styles.logoImage}
      />
      <Text style={styles.title}>DEVIU SYSTEM</Text>
      <Text style={styles.subtitle}>Bienvenido</Text>
      <Text style={styles.subtitle}>Es un gusto tenerte de vuelta!</Text>
      <View>
        <TextInput 
          style={styles.input}
          placeholder="Usuario" 
          value={usuario} 
          onChangeText={handleUsuarioChange}
        />
        <TextInput 
          style={styles.input}
          placeholder="Contraseña" 
          value={contraseña} 
          onChangeText={handleContraseñaChange}
          secureTextEntry
        />
        <Button title="Iniciar sesión" onPress={handleSubmit} disabled={!usuario || !contraseña} />
      </View>
      <View>
        <Text>¿Olvidaste tu contraseña?</Text>
        {/* Aquí puedes poner un botón o algo similar para manejar la recuperación de la contraseña */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoImage: {
    width: 100,
    height: 100,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 18,
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 10,
    paddingLeft: 10,
  },
});

export default LoginScreen;

