// components/AttendanceList.tsx
import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import StudentRow from './StudentRow';  // Asegúrate de importar StudentRow

interface StudentAttendance {  // Define StudentAttendance
  name: string;
  status: string;
}

interface AttendanceListProps {
  students: StudentAttendance[];
  onStudentPress?: (student: StudentAttendance) => void;
}

const AttendanceList: React.FC<AttendanceListProps> = ({ students, onStudentPress }) => {
  return (
    <View style={styles.container}>
      <ScrollView>
        {students.map((student) => (
          <StudentRow
            key={student.name}
            name={student.name}
            status={student.status}
            onPress={() => onStudentPress && onStudentPress(student)}
          />
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
});

export default AttendanceList;
