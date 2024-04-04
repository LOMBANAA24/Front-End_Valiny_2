// navigation/stacks/SpecifReportScreen.tsx
import React, { useState } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import Header from '../../components/Header';
import Title from '../../components/Title';
import AttendanceChart from '../../components/AttendanceChart';
import StudentRow from '../../components/StudentRow';
import { StudentAttendance } from '../../store/types/types'; 
import { attendanceStatusColors } from '../../constants/attendanceStatusColors';

const SpecificReportScreen: React.FC = () => {
  const [students, setStudents] = useState<StudentAttendance[]>([
    { id: '1', name: 'Estudiante 1', status: 'Asiste' },
    { id: '2', name: 'Estudiante 2', status: 'Falla' },
    { id: '3', name: 'Estudiante 3', status: 'Retardo' },
    { id: '4', name: 'Estudiante 4', status: 'Evasion' },
    { id: '5', name: 'Estudiante 5', status: 'Falla Justificada' },
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
      fill: attendanceStatusColors[key] || 'gray' 
    },
  }));

  return (
    <View style={styles.container}>
      <Header title="Reporte Específico" onPressMenu={() => {}} />
      <Title title="Reporte Específico" />
      <AttendanceChart data={chartData} />
      <ScrollView>
        {students.map((student) => (
          <StudentRow key={student.id} name={student.name} status={student.status} />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default SpecificReportScreen;
