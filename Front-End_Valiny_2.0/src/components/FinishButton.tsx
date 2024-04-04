// components/FinishButton.tsx
import React from 'react';
import { Button, StyleSheet } from 'react-native';

interface FinishButtonProps {
  onPress: () => void;
}

const FinishButton: React.FC<FinishButtonProps> = ({ onPress }) => {
  return <Button title="Finalizar" onPress={onPress} />;
};

export default FinishButton;
