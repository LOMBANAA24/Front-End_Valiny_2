// components/QRForm.tsx
import React, { useState } from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import { Picker } from '@react-native-picker/picker';

interface Estudiante {
  nombre?: string;
  documento?: string;
  curso?: string;
  jornada?: string;
  tipoAsistencia?: string;
}

interface QRFormProps {
  estudiante: Estudiante | null;
  onChangeEstudiante: (estudiante: Estudiante) => void;
}

const QRForm: React.FC<QRFormProps> = ({ estudiante, onChangeEstudiante }) => {
  const [nombreValido, setNombreValido] = useState(true);

  const validarNombre = (text: string) => {
    setNombreValido(text.length > 0);
    onChangeEstudiante({ ...estudiante, nombre: text });
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={nombreValido ? styles.input : styles.inputError}
        placeholder="Nombre"
        value={estudiante?.nombre || ''}
        onChangeText={validarNombre}
      />
      <TextInput
        style={styles.input}
        placeholder="Curso"
        value={estudiante?.curso || ''}
        onChangeText={(text) => onChangeEstudiante({ ...estudiante, curso: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Jornada"
        value={estudiante?.jornada || ''}
        onChangeText={(text) => onChangeEstudiante({ ...estudiante, jornada: text })}
      />
      <Picker
        selectedValue={estudiante?.tipoAsistencia || undefined}
        style={styles.input}
        onValueChange={(itemValue: string) =>
          onChangeEstudiante({ ...estudiante, tipoAsistencia: itemValue })
        }
      >
        <Picker.Item label="Seleccione el tipo de asistencia" value="" />
        <Picker.Item label="Falla" value="falla" />
        <Picker.Item label="Asiste" value="asiste" />
        <Picker.Item label="Retardo" value="retardo" />
        <Picker.Item label="Evasión" value="evasion" />
        <Picker.Item label="Falla Justificada" value="fallaJustificada" />
      </Picker>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 8,
    paddingHorizontal: 8,
  },
  inputError: {
    height: 40,
    borderColor: 'red',
    borderWidth: 1,
    marginTop: 8,
    paddingHorizontal: 8,
  },
});

export default QRForm;
