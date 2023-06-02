import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { TextInput, Button, Text } from 'react-native-paper';
import Login from './Login';
const SignUp = ({navigation}) => {
  const [name, setName] = useState('');
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
          <Text style={{top:15,fontSize:30,fontWeight:'bold'}}>SignUp</Text>
        </View>
       <View style={{alignItems:'center',justifyContent:"center"}}>
      <TextInput
        label="Name"
        value={name}
        onChangeText={(text) => setName(text)}
        mode="outlined"
        style={styles.input}
      />
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
        SignUp
      </Button>
      <View style={{marginTop:20}}>
        <TouchableOpacity onPress={()=>navigation.navigate('Login')}>
           <Text style={{fontSize:25,fontWeight:'bold'}}>Login</Text>
        </TouchableOpacity>
      </View>
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

export default SignUp;
