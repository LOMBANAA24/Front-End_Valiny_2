// src/App.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Importa tus pantallas aquí
import HomeScreen from './screens/Home/HomeScreen'
// import LoginScreen from './screens/Login';
// ...

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        {/* Configura tus rutas de navegación aquí */}
        <Stack.Screen name="Home" component={HomeScreen} />
        {/* <Stack.Screen name="Login" component={LoginScreen} /> */}
        {/* ... */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
