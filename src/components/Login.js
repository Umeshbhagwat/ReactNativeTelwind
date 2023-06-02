import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, Button, Text } from 'react-native-paper';

const Login = ({navigation}) => {
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = () => {
    // Add your signup logic here
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <View style={styles.container}>
        <View>
          <Text style={{top:15,fontSize:30,fontWeight:'bold'}}>Login</Text>
        </View>
       <View style={{alignItems:'center',justifyContent:"center"}}>
     
      <TextInput
        label="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
        mode="outlined"
        style={styles.input}
      />
      <TextInput
        label="Password"
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry
        mode="outlined"
        style={styles.input}
      />
      <Button
        mode="contained"
        onPress={handleSignup}
        style={styles.button}
        contentStyle={styles.buttonContent}
      >
        Login
      </Button>
     </View> 
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems:'center'
  },
  input: {
   height:50,
   width:300,
   marginTop:30
  },
  button: {
    marginTop:20
  },
  buttonContent: {
    height:50,
    width:100,
    fontWeight:'bold',
    color:'green'
  },
});

export default Login;