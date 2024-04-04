// components/DrawerContent.tsx
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { DrawerContentComponentProps } from '@react-navigation/drawer';

function DrawerContent(props: DrawerContentComponentProps) {
  const { navigation } = props;
    return (
      <View style={styles.container}>
        {/* Sección de Perfil */}
        <View style={styles.profileContainer}>
          <Text>Foto</Text>
          <Text>Nombre</Text>
          <Text>Cargo</Text>
        </View>

      {/* Sección de Opciones */}
      <View style={styles.optionsContainer}>
        <Button title="Inicio" onPress={() => navigation.navigate('Home')} />
        <Button title="Reportes" onPress={() => navigation.navigate('Report')} />
        <Button title="Reportes de Asistencia" onPress={() => navigation.navigate('SpecificReport')} />
      </View>

      {/* Sección de Salir */}
      <View style={styles.logoutContainer}>
        <Button title="Salir" onPress={() => {}} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
    },
    profileContainer: {
      // Aquí puedes añadir estilos para el contenedor del perfil
    },
    optionsContainer: {
      // Aquí puedes añadir estilos para el contenedor de las opciones
    },
    logoutContainer: {
      // Aquí puedes añadir estilos para el contenedor de salir
    },
  });

export default DrawerContent;
