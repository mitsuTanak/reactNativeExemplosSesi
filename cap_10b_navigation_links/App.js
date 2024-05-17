import React from 'react';
import Evento from './components/Evento';
import UsuarioGithub from './components/UsuarioGithub';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { View } from 'react-native-reanimated/lib/typescript/Animated';
import { Button } from 'react-native';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <View style={Estilos.container}>
      <Button 
        title='Evento'
        onPress={() =>}
      />
    </View>
  );
}