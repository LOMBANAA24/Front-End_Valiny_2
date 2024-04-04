// types/types.ts
import { ParamListBase, RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

export type DrawerParamList = {
  Sesion: undefined;
  Inicio: undefined;
  Reporte: undefined;
  'Reporte espesifico': undefined;
  // Añade aquí tus otras screens
};

export interface StudentAttendance {
  id: string;
  name: string;
  status: string;
}

export type StackParamList = {
  // Define aquí las pantallas de tus Stack Navigators
};

export type DrawerNavigationProp<T extends keyof DrawerParamList> = StackNavigationProp<DrawerParamList, T>;

export type DrawerRouteProp<T extends keyof DrawerParamList> = RouteProp<DrawerParamList, T>;
