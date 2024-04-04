// components/SearchAttendance.tsx
import React, { useState } from 'react';
import { View, Button, StyleSheet, ActivityIndicator, Text } from 'react-native';
import { Picker } from '@react-native-picker/picker';

interface SearchAttendanceProps {
  selectedStatus: string;
  onSelectStatus: (status: string) => void;
  onSearchAttendance: () => void;
}

const SearchAttendance: React.FC<SearchAttendanceProps> = ({
  selectedStatus,
  onSelectStatus,
  onSearchAttendance,
}) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = () => {
    setIsLoading(true);
    onSearchAttendance();
    setIsLoading(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Tipo de asistencia:</Text>
      <Picker
        selectedValue={selectedStatus}
        onValueChange={(itemValue: string) => onSelectStatus(itemValue)}
      >
        <Picker.Item label="Falla" value="Falla" />
        <Picker.Item label="Asiste" value="Asiste" />
        {/* Puedes agregar más opciones según sea necesario */}
      </Picker>
      <Button title="Buscar asistencia" onPress={handleSearch} />
      {isLoading && <ActivityIndicator size="large" color="#0000ff" />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default SearchAttendance;
