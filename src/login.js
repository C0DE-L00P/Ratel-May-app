import React from "react";
import LoginForm from "../components/Login-Form";
import { View, Text, Button, StyleSheet, ImageBackground } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Avatar } from 'react-native-elements'

export default function Login({ navigation }) {
 
  return (
    <ImageBackground
      source={require("../assets/bg.webp")}
      style={styles.container}
    >
      <LinearGradient
        colors={["#0d3b39ed", "transparent"]}
        style={{ flex: 1 }}
        locations={[0.6, 1]}
      >
        <View style={{justifyContent: 'center', alignItems: 'center',flex: 1}}>
        {/* <Text>This is Login Page</Text>
        <Button title="Go Back" onPress={() => navigation.goBack()} /> */}
        <Avatar rounded icon={{ name: 'person' }} size={160} containerStyle={{backgroundColor: '#73c4bd2a', marginBottom: 40}}/>
        <LoginForm navigation={navigation}/>
        </View>
      </LinearGradient>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // remove width and height to override fixed static size
    width: null,
    height: null,
  },
});
