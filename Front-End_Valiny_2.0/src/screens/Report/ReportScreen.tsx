// navigation/stacks/ReportStack.tsx
import React, { useState } from 'react';
import { View, Text, Button, TextInput, StyleSheet, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';

interface StudentAttendance {
  name: string;
  status: string;
}

const ReportStack: React.FC = () => {
  const [selectedStatus, setSelectedStatus] = useState('');
  const [students, setStudents] = useState<StudentAttendance[]>([
    // Aquí puedes agregar los datos de los estudiantes
    { name: 'Estudiante 1', status: 'Asiste' },
    { name: 'Estudiante 2', status: 'Falla' },
    { name: 'Estudiante 3', status: 'Retardo' },
    { name: 'Estudiante 4', status: 'Evasion' },
    { name: 'Estudiante 5', status: 'Falla Justificada' },
    // ...
  ]);

  const handleSearchAttendance = () => {
    // Aquí puedes implementar la lógica para filtrar los estudiantes basándote en selectedStatus
    // Actualiza el estado de students con la lista filtrada
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Resultados diarios</Text>

      <Text>Busqueda de asistencia</Text>
      <Picker
        selectedValue={selectedStatus}
        onValueChange={(itemValue) => setSelectedStatus(itemValue)}
      >
        <Picker.Item label="Falla" value="Falla" />
        <Picker.Item label="Asiste" value="Asiste" />
        {/* Aquí puedes agregar más Picker.Items según sea necesario */}
      </Picker>

      <Button title="Buscar asistencia" onPress={handleSearchAttendance} />

      <Text style={styles.subtitle}>Reporte específico</Text>
      
      {/* Aquí se muestran los nombres de los estudiantes y su estado de asistencia */}
      <ScrollView>
        {students.map((student) => (
          <View key={student.name} style={styles.row}>
            <Text>{student.name}</Text>
            {/* Aquí puedes reemplazar este componente Text por un icono u otro indicador visual del estado de asistencia */}
            <Text>{student.status}</Text> 
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 18,
    marginTop: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5,
  },
});

export default ReportStack;
