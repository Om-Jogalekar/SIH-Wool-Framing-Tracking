  import React , {Component}  from 'react';
import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,Button,TouchableOpacity,TextInput,ImageBackground} from 'react-native';
import Navbar from './navbar';

//  import Button from 'react-bootstrap/Button';

export default function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Implement your authentication logic here
    // You can validate user credentials and navigate to the next screen if successful
    alert(`Login with Email: ${email} and Password: ${password}`);}
  return (<>
    <Navbar/>
<View style={styles.container}>
      <Text style={styles.textStyle}>WoolBazaar</Text>
      <StatusBar style="auto" />
</View>
    <View>
    <ImageBackground 
      source={require('./assets/slide-1.png')}
      style={{width:430 , height:720}}
    >
     <View style={styles.container}>
      <Text>Wool Bazaar</Text>
    </View>
    </ImageBackground>
</View>
<View style={styles.container}>
      <Text style={styles.textStyle}>WoolBazaar</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={setEmail}
        value={email}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        onChangeText={setPassword}
        value={password}
        secureTextEntry
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View> 
  </>
  );}

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    fontSize: 34,
    fontWeight: 'bold',
    marginBottom: -1150,
  },
  input: {
    width: '80%',
    height: 50,
    borderColor: 'blue',
    borderWidth: 2,
    marginBottom: 50,
    padding: 10,
  },
  button: {
    backgroundColor: 'cyan',
    padding: 22,
    borderRadius: 2,
    height : 10,
    
  },
  buttonText: {
  color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    height : 20,
    
    
    
  },

  
});
