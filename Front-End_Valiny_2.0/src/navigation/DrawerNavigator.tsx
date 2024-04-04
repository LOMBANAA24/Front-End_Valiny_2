// navigation/DrawerNavigator.tsx
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeStack from './stacks/HomeStack';
import LoginStack from './stacks/LoginStack';
import ReportStack from './stacks/ReportStack';
import SpecifReportStack from './stacks/SpecifReportStack';
import DrawerContent from '../components/DrawerContent';

const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
      <Drawer.Screen name="Home" component={HomeStack} />
      <Drawer.Screen name="Report" component={ReportStack} />
      <Drawer.Screen name="SpecifReport" component={SpecifReportStack} />
      <Drawer.Screen name="Login" component={LoginStack} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;

