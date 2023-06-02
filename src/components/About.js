import { View, Text ,StyleSheet} from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useSelector, useDispatch } from "react-redux";
import { getAllData } from '../features/gitUserSlice';

export default function About() {

  const dispatch=useDispatch();
 const data= useSelector((state)=>{
   console.log(state.app);
  })

  console.log(data);
  return (
    <View>
      <Text>Welcome To India</Text>
      <View style={{justifyContent:"center",alignItems:"center"}}>
        <TouchableOpacity  onPress={()=>dispatch(getAllData())}>
           <View style={{height:50,width:200, backgroundColor:"red",justifyContent:"center",alignItems:"center"}}>
              <Text style={{fontSize:25,fontWeight:'bold',color:"white"}}>Show Data</Text>
           </View>
        </TouchableOpacity>
      </View>
      <View
          style={{
            top:10,
            borderBottomColor: 'black',
            
            borderBottomWidth: StyleSheet.hairlineWidth,
          }}
     />
    </View>
  )
}