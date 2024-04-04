// components/WelcomeMessage.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const WelcomeMessage: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.subtitle}>Bienvenido</Text>
      <Text style={styles.subtitle}>Es un gusto tenerte de vuelta!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  subtitle: {
    fontSize: 18,
  },
});

export default WelcomeMessage;
