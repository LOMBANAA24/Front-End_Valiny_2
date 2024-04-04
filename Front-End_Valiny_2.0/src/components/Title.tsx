// components/Title.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface TitleProps {
  title: string;
}

const Title: React.FC<TitleProps> = ({ title }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.separator} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 10,
  },
  separator: {
    height: 1,
    width: '100%',
    backgroundColor: '#D3D3D3',
  },
});

export default Title;

