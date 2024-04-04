import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ReportScreen from '../../screens/Report/ReportScreen';

const Stack = createStackNavigator();

const ReportStack: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Report" component={ReportScreen} />
    </Stack.Navigator>
  );
};

export default ReportStack;
