// components/Camera.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';

interface CameraProps {
  onQRCodeRead: (data: { data: string }) => void;
}

const Camera: React.FC<CameraProps> = ({ onQRCodeRead }) => {
    return (
      <View style={styles.container}>
        <Text style={styles.subtitle}>Lectura Código QR</Text>
        <View style={styles.grayContainer}>
          <Text style={styles.text}>Entrada Comedor Escolar</Text>
        </View>
        <View style={styles.cameraPreview}>
          <QRCodeScanner
            onRead={onQRCodeRead}
            reactivate={true}
            reactivateTimeout={5000}
          />
        </View>
        <View style={styles.instructionContainer}>
          <Text style={styles.instructionText}>Apunta la cámara hacia el código QR para escanearlo.</Text>
        </View>
      </View>
    );
  };
  
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 16,
  },
  grayContainer: {
    backgroundColor: '#ddd',
    padding: 16,
    marginTop: 16,
  },
  text: {
    fontSize: 16,
  },
  cameraPreview: {
    flex: 1,
    width: '100%',
  },
  instructionContainer: {
    padding: 16,
    backgroundColor: '#ddd',
  },
  instructionText: {
    fontSize: 16,
  },
});

export default Camera;
