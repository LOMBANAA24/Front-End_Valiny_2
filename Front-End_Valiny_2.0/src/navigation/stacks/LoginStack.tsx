// navigation/stacks/LoginStack.tsx
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../../screens/Login/LoginScreen';

// Crea un tipo para los parámetros de tu Stack Navigator
type LoginStackParamList = {
  Login: undefined; // Define una pantalla de 'Login' que no toma parámetros
  // Puedes añadir más pantallas aquí si necesitas
};

// Crea el Stack Navigator
const Stack = createStackNavigator<LoginStackParamList>();

const LoginStack: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={LoginScreen} />
      {/* Añade más pantallas aquí si necesitas */}
    </Stack.Navigator>
  );
};

export default LoginStack;
