// navigation/stacks/SpecifReportStack.tsx
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SpecificReportScreen from '../../screens/SpecificReport/SpecifReportScreen'; // Asegúrate de que la ruta de importación sea correcta

const Stack = createStackNavigator();

const SpecifReportStack: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="SpecificReport" component={SpecificReportScreen} />
    </Stack.Navigator>
  );
};

export default SpecifReportStack;
