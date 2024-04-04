// navigation/stacks/SpecifReportStack.tsx
import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { PieChart } from 'react-native-svg-charts';

interface StudentAttendance {
  name: string;
  status: string;
}

const SpecificReportScreen: React.FC = () => {
  const [students, setStudents] = useState<StudentAttendance[]>([
    // Aquí puedes agregar los datos de los estudiantes
    { name: 'Estudiante 1', status: 'Asiste' },
    { name: 'Estudiante 2', status: 'Falla' },
    { name: 'Estudiante 3', status: 'Retardo' },
    { name: 'Estudiante 4', status: 'Evasion' },
    { name: 'Estudiante 5', status: 'Falla Justificada' },
    // ...
  ]);

  const attendanceData = students.reduce(
    (acc, student) => {
      acc[student.status] = (acc[student.status] || 0) + 1;
      return acc;
    },
    {} as Record<string, number>
  );

  const chartData = Object.keys(attendanceData).map((key) => ({
    key,
    value: attendanceData[key],
    svg: { 
      fill: key === 'Asiste' ? 'green' : 
            key === 'Falla' ? 'red' : 
            key === 'Retardo' ? 'yellow' : 
            key === 'Evasion' ? 'blue' : 
            key === 'Falla Justificada' ? 'orange' : 
            'gray' 
    },
  }));
  

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Reporte Específico</Text>

      <PieChart
        style={{ height: 200 }}
        data={chartData}
      />

      <ScrollView>
        {students.map((student) => (
          <View key={student.name} style={styles.row}>
            <Text>{student.name}</Text>
            <Text>{student.status}</Text> 
          </View>
        ))}
      </ScrollView>

      {/* Agrega más detalles o componentes según sea necesario */}
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
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5,
  },
});

export default SpecificReportScreen;
