import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Input, Button, Div } from 'react-native';
import Flex from './componente/FlexBox/page.js';

export default function App() {

  const handleChange = (e) => {
    setValor(e.target.value);
    localStorage.setItem("valor", e.target.value);
  };

  const handleSubmit = () => {


  }


  return (
    <ScrollView style={styles.container}>
      <Flex></Flex>
      <View style={styles.formContainer}>
        {/*<Text>Hola</Text>
        <Input type="text" value={valor} onChange={handleChange} />
  <Button className={styles.button1} type="button" onClick={handleSubmit}> <Text>Iniciar sesión</Text> </Button>*/}
        <Div class="box">
    <Text>Login</Text>
    <Input type="text" placeholder="Username" />
    <Input type="text" placeholder="Password" />
    <Button>Login</Button>
    <Text>Not a member? Sign Up</Text>
  </Div>
      </View>
    </ScrollView>

    
  ),
}

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#ead0a8",
  },
  formContainer: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    marginBottom: 20,
  },
  body: {
    padding: 0,
    margin: 0
  },
});
  
 {/*
  box: {
    position: absolute,
    height: '100%',
    width: 100%,
    font-family: Helvetica,
    color: #fff,
    background: rgba(0, 0, 0, 0.13),
    padding: 30px 0px,
  }

  .box input: {
    display: block,
    width: 300px,
    margin: 20px auto,
    padding: 15px,
    background: rgba(0, 0, 0, 0.2),
    color: #fff,
    border: 0,
  }
  .box input:focus,
  .box input:active,
  .box button:focus,
  .box button:active {
    outline: none,
  }
  .box button {
    background: #742ecc,
    border: 0,
    color: #fff,
    padding: 10px,
    font-size: 20px,
    width: 330px,
    margin: 20px auto,
    display: block,
    cursor: pointer,
  }
  .box button:active {
    background: #27ae60,
  }
  .box p {
    font-size: 14px,
    text-align: center,
  }
  .box p span {
    cursor: pointer,
    color: #666,
  }
*/}

