import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function Register({navigation, nombre, apellido}) {
  return (
    <View style={styles.container}>
        <Text>Home  hola {nombre} {apellido}</Text>
      <Button
      title="Deslogearse"
      onPress={()=> navigation.navigate('Login')}
      />
    </View>
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