import React,{useEffect} from "react";
import {  View } from "react-native";
import { Button, Icon ,Image,Text} from "react-native-elements"; 

export default function Splashy({ navigation, route }) {
  useEffect(()=>{
    setTimeout(() => {
      navigation.navigate('login')
    }, 2000);
  },[])

  return (
    <>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#164340'}}>
        <Image source={require('./logo.png')} style={{width: 300,height: 140}}/>
        {/* <Text style={{color: 'white', fontSize: 32}}> Ratel May Academy</Text> */}
      </View>
      
    </>
  );
}
