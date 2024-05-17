import React from 'react';
import { Button, View, StyleSheet } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import Evento from './components/Evento';
import UsuarioGithub from './components/UsuarioGithub';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <View style={Estilos.container}>
      <Button 
        title='Evento'
        onPress={() => Navigation.navigate('Evento')} 
      />
      <Button 
        title='Usúario GitHub'
        onPress={() => Navigation.navigate('Github')} 
      />
    </View>
  );
}