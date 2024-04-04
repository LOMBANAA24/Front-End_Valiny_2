// components/AttendanceChart.tsx
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { PieChart } from 'react-native-svg-charts';

interface AttendanceChartProps {
  data: { key: string; value: number; svg: { fill: string } }[];
}

const AttendanceChart: React.FC<AttendanceChartProps> = ({ data }) => {
  return (
    <View style={styles.container}>
      <PieChart style={styles.chart} data={data} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginBottom: 20,
  },
  chart: {
    height: 200,
    width: 200,
  },
});

export default AttendanceChart;
