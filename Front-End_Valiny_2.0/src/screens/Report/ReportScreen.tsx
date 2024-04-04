// navigation/stacks/ReportScreen.tsx
import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Header from '../../components/Header';
import SearchAttendance from '../../components/SearchAttendance';
import AttendanceList from '../../components/AttendanceList';

const ReportScreen: React.FC = () => {
  const initialStudents = [
    { name: 'Estudiante 1', status: 'Asiste' },
    { name: 'Estudiante 2', status: 'Falla' },
    { name: 'Estudiante 3', status: 'Retardo' },
    { name: 'Estudiante 4', status: 'Evasion' },
    { name: 'Estudiante 5', status: 'Falla Justificada' },
    // ...
  ];

  const [selectedStatus, setSelectedStatus] = useState('');
  const [students, setStudents] = useState(initialStudents);

  const handleSearchAttendance = () => {
    if (selectedStatus) {
      const filteredStudents = initialStudents.filter(student => student.status === selectedStatus);
      setStudents(filteredStudents);
    } else {
      setStudents(initialStudents);
    }
  };

  return (
    <View style={styles.container}>
      <Header title="Resultados diarios" onPressMenu={() => {}} />
      <SearchAttendance
        selectedStatus={selectedStatus}
        onSelectStatus={setSelectedStatus}
        onSearchAttendance={handleSearchAttendance}
      />
      <AttendanceList students={students} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

export default ReportScreen;
