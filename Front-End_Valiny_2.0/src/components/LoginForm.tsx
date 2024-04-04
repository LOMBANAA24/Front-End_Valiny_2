// components/LoginForm.tsx
import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const LoginForm: React.FC = () => {
  const [usuario, setUsuario] = useState('');
  const [contraseña, setContraseña] = useState('');

  const handleUsuarioChange = (text: string) => {
    setUsuario(text);
  };

  const handleContraseñaChange = (text: string) => {
    setContraseña(text);
  };

  return (
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
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 10,
    paddingLeft: 10,
  },
});

export default LoginForm;
