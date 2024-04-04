// components/LoginButton.tsx
import React from 'react';
import { Button } from 'react-native';

interface LoginButtonProps {
  onPress: () => void;
  disabled: boolean;
}

const LoginButton: React.FC<LoginButtonProps> = ({ onPress, disabled }) => {
  return <Button title="Iniciar sesión" onPress={onPress} disabled={disabled} />;
};

export default LoginButton;
