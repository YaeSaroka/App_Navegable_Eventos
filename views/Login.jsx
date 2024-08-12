
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function Login({navigation}) {
    const Nombre = "nombre", Apellido = "123";

  return (
<View style={styles.container}>
    <Text>LOGIN </Text>
    
      <Button
      title="Registrarse"
      onPress={()=> navigation.navigate('Register')}
      />

      <Button
      title="Logear"
      onPress={()=> navigation.navigate('Home', Nombre, Apellido)}
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