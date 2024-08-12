import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './views/Login.jsx'
import Register from './views/Register.jsx'
import LoginNavigation from './navigation/LoginNavigation.jsx';
import { useState } from 'react';

export default function App() {
  return (
    <NavigationContainer>
      <LoginNavigation/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
