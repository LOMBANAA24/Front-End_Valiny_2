// screens/Home/HomeScreen.tsx
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Button, TextInput } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useNavigation } from '@react-navigation/native';
import { DrawerActions } from '@react-navigation/native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import { check, PERMISSIONS, RESULTS } from 'react-native-permissions';

interface Estudiante {
  nombre: string;
  documento: string;
  curso: string;
  jornada: string;
  tipoAsistencia: string;
}

export default function HomeScreen() {
  const navigation = useNavigation();
  const [codigoEstudiante, setCodigoEstudiante] = useState('');
  const [estudiante, setEstudiante] = useState<Estudiante | null>(null);

  useEffect(() => {
    check(PERMISSIONS.ANDROID.CAMERA)
      .then((result) => {
        switch (result) {
          case RESULTS.UNAVAILABLE:
            console.log('This feature is not available (on this device / in this context)');
            break;
          case RESULTS.DENIED:
            console.log('The permission has not been requested / is denied but requestable');
            break;
          case RESULTS.GRANTED:
            console.log('The permission is granted');
            break;
          case RESULTS.BLOCKED:
            console.log('The permission is denied and not requestable anymore');
            break;
        }
      })
      .catch((error) => {
        // …
      });
  }, []);

  const handleOpenMenu = () => {
    navigation.dispatch(DrawerActions.openDrawer());
  };

  const buscarDatosEstudiante = (codigoEstudiante: string) => {
    return {
      nombre: '',
      documento: codigoEstudiante,
      curso: '',
      jornada: '',
      tipoAsistencia: '',
    };
  };

  const handleQRCodeRead = (e: { data: string }) => {
    const newEstudiante = buscarDatosEstudiante(e.data);
    setEstudiante(newEstudiante);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Inicio</Text>
        <Button title="Menú" onPress={handleOpenMenu} />
      </View>

      <Text style={styles.subtitle}>Lectura Código QR</Text>

      <View style={styles.grayContainer}>
        <Text style={styles.text}>Entrada Comedor Escolar</Text>
      </View>

      <QRCodeScanner
        onRead={handleQRCodeRead}
        reactivate={true}
        reactivateTimeout={5000}
      />

      {estudiante && (
        <>
          <TextInput
            style={styles.input}
            placeholder="Nombre"
            value={estudiante.nombre}
            onChangeText={(text) => setEstudiante({ ...estudiante, nombre: text })}
          />
          <TextInput
            style={styles.input}
            placeholder="Curso"
            value={estudiante.curso}
            onChangeText={(text) => setEstudiante({ ...estudiante, curso: text })}
          />
          <TextInput
            style={styles.input}
            placeholder="Jornada"
            value={estudiante.jornada}
            onChangeText={(text) => setEstudiante({ ...estudiante, jornada: text })}
          />
          <Picker
            selectedValue={estudiante.tipoAsistencia}
            style={styles.input}
            onValueChange={(itemValue) =>
              setEstudiante({ ...estudiante, tipoAsistencia: itemValue })
            }
          >
            <Picker.Item label="Seleccione el tipo de asistencia" value="" />
            <Picker.Item label="Falla" value="falla" />
            <Picker.Item label="Asiste" value="asiste" />
            <Picker.Item label="Retardo" value="retardo" />
            <Picker.Item label="Evasión" value="evasion" />
            <Picker.Item label="Falla Justificada" value="fallaJustificada" />
          </Picker>
        </>
      )}
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
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
  form: {
    marginTop: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 8,
    paddingHorizontal: 8,
  },
});
