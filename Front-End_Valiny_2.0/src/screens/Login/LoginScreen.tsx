import React from 'react';
import { View, StyleSheet } from 'react-native';
import Logo from '../../components/Logo';
import WelcomeMessage from '../../components/WelcomeMessage';
import LoginForm from '../../components/LoginForm';
import LoginButton from '../../components/LoginButton';
import Header from '../../components/Header';

const LoginScreen: React.FC = () => {
  const handleSubmit = () => {
    // Aquí puedes poner el código para manejar el inicio de sesión
  };

  return (
    <View style={styles.container}>
      <Header title="Login" onPressMenu={() => {}} />
      <Logo />
      <WelcomeMessage />
      <LoginForm />
      <LoginButton onPress={handleSubmit} disabled={false} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default LoginScreen;
