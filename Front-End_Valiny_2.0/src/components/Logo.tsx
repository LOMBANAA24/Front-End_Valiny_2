// components/Logo.tsx
import React from 'react';
import { Image, StyleSheet, View, Text } from 'react-native';

const Logo: React.FC = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/images/logo.jpg')}
        style={styles.logoImage}
      />
      <Text style={styles.title}>DEVIU SYSTEM</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
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
});

export default Logo;
