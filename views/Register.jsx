import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function Register({navigation}) {
  return (
    <View style={styles.container}>
        <Text>Register </Text>
      <Button
      title="Logear"
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