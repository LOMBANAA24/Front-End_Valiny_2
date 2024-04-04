// components/StudentRow.tsx
import React from 'react';
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { attendanceStatusColors } from '../constants/attendanceStatusColors'; 

interface StudentRowProps {
  name: string;
  status: string;
  onPress?: () => void; 
}

const StudentRow: React.FC<StudentRowProps> = ({ name, status, onPress }) => {
  const getStatusIcon = (status: string) => {
    let iconName = '';
    let iconColor = attendanceStatusColors[status] || 'gray'; 

    switch (status) {
      case 'Asiste':
        iconName = 'check-circle';
        break;
      case 'Falla':
        iconName = 'times-circle';
        break;
      default:
        iconName = 'question-circle';
    }

    return <Icon name={iconName} size={24} color={iconColor} />;
  };

  return (
    <TouchableOpacity style={styles.row} onPress={onPress}>
      <Text>{name}</Text>
      <View style={styles.statusContainer}>
        {getStatusIcon(status)}
        <Text>{status}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5,
  },
  statusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default StudentRow;
