// screens/Home/HomeScreen.tsx
import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { DrawerActions } from '@react-navigation/native';
import Header from '../../components/Header';
import Title from '../../components/Title';
import TextSection from '../../components/TextSection';
import Camera from '../../components/Camera';
import QRForm from '../../components/QRForm';
import FinishButton from '../../components/FinishButton';
import SearchAttendance from '../../components/SearchAttendance';
import AttendanceList from '../../components/AttendanceList';
import { useCameraPermission } from 'react-native-vision-camera';

interface Estudiante {
  nombre?: string;
  documento?: string;
  curso?: string;
  jornada?: string;
  tipoAsistencia?: string;
}

export default function HomeScreen() {
  const navigation = useNavigation();
  const [estudiante, setEstudiante] = useState<Estudiante | null>(null);
  const hasPermission = useCameraPermission(); 

  useEffect(() => {
    async function checkPermission() {
      const permissionGranted = hasPermission; 
      if (!permissionGranted) {
        // Pedir permiso al usuario
        Alert.alert('Permisos de cámara requeridos', 'Por favor, concede permisos de cámara para continuar.');
      }
    }
    checkPermission();
  }, [hasPermission]); 

  const handleOpenMenu = () => {
    navigation.dispatch(DrawerActions.openDrawer());
  };

  const handleQRCodeRead = (e: { data: string }) => {
    const newEstudiante = buscarDatosEstudiante(e.data);
    setEstudiante(newEstudiante);
  };

  const onChangeEstudiante = (newEstudiante: Estudiante) => {
    setEstudiante(newEstudiante);
  };

  const handleFinish = () => {
  };

  return (
    <View style={styles.container}>
      <Header title="Inicio" onPressMenu={handleOpenMenu} />
      <TextSection title="Lectura Código QR" />
      <Camera onQRCodeRead={handleQRCodeRead} />
      {estudiante && <QRForm estudiante={estudiante} onChangeEstudiante={onChangeEstudiante} />}
      <FinishButton onPress={handleFinish} />
      <Title title="Buscar Asistencia" />
      <SearchAttendance selectedStatus="Falla" onSelectStatus={() => {}} onSearchAttendance={() => {}} />
      <AttendanceList students={[]} />
    </View>
  );
}

const buscarDatosEstudiante = (codigoEstudiante: string) => {
  return {
    nombre: '',
    documento: codigoEstudiante,
    curso: '',
    jornada: '',
    tipoAsistencia: '',
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
