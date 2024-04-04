// components/TextSection.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface TextSectionProps {
  title: string;
}

const TextSection: React.FC<TextSectionProps> = ({ title }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default TextSection;
