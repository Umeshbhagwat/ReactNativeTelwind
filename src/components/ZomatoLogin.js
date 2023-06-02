import { View, Text,StyleSheet,Image} from 'react-native'
import React, { useState } from 'react';
import { TextInput } from 'react-native-paper'
import About from './About';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from "react-native-responsive-dimensions";

export default function ZomatoLogin({navigation}) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = () => {
     if(email ==='umeshbhagwatkopargaon@gmail.com' && password ==="Umesh@123")
     {
       navigation.navigate('About')
     }
     else{
      alert("Please check the Email and Password")
     }
  };

  return (
    <ScrollView style={{flex:1,backgroundColor:"#E52B50"}}>
    <View style={{}}>
        
       <View>        
       <Image
          source={require("../assets/zomato_logo.png")}
          resizeMode="contain"
          style={styles.image}
        ></Image>
       
        <View style={styles.cardmain}>
          
            <View style={{flexDirection:"row",justifyContent:"space-around",}}>
              <View>
                <Text style={styles.textButton}>Login</Text>
              </View>
             
            </View>
            <View style={{top:40,width:300,justifyContent:"center",marginHorizontal:20}}>
               <TextInput placeholder='Email' 
                mode="outlined"
                label="Email"
                value={email}
                onChangeText={(text) => setEmail(text)}
                theme={{ colors: { primary: 'red',underlineColor:'transparent',}}}
               />
            </View>

            <View style={{width:300,justifyContent:"center",top:70,marginHorizontal:20}}>
               <TextInput placeholder='Password' 
                mode="outlined"
                label="Password"
                value={password}
                onChangeText={(text) => setPassword(text)}
                theme={{ colors: { primary: 'red',underlineColor:'transparent',}}}
               />
            </View>
            
            <View style={{top:100,justifyContent:"center",alignItems:"center",}}>
              <TouchableOpacity onPress={()=>handleSignup()}>
                  <View style={{height:50,width:300,backgroundColor:'#E52B50',justifyContent:"center",alignItems:"center",borderRadius:10}}>
                    <Text style={{fontSize:20,fontWeight:"bold",color:"white"}}>Login</Text>
                  </View>
              </TouchableOpacity>
            </View>
           
            <View style={{top:120,alignItems:"center"}}><Text style={{fontSize:20,fontWeight:'bold',color:"black"}}>OR</Text></View>

            <View style={{top:130,justifyContent:"center",alignItems:"center",}}>
              <TouchableOpacity>
                  <View style={{height:50,width:300,backgroundColor:'#5072A7',justifyContent:"center",alignItems:"center",borderRadius:10}}>
                    <Text style={{fontSize:20,fontWeight:"bold",color:"white"}}>Sign In</Text>
                  </View>
              </TouchableOpacity>
            </View>

            <View style={{top:150,alignItems:"center"}}><Text style={{fontSize:20,color:"#E52B50"}}>Forgot Password ? </Text></View>
          
          
        </View> 
       </View>
      
    </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  image:{
    height:70,
    width:400,
    top:30
  },
 
  cardmain:{
    margin: 25,
    width:responsiveWidth(90),
    height:responsiveHeight(70),
    borderRadius:20,
    backgroundColor: "white",
    alignItems:"center",
    paddingBottom:20
  },

    textButton:{
    fontSize:25,
    fontWeight:"bold",
    color:"#E52B50",
    top:20
      }
})