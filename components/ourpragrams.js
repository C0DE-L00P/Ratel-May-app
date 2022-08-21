import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Button, Image } from "react-native-elements";

const Programs = ({navigation}) => (
  <View style={styles.container}>
    <LinearGradient
      colors={["#0d3b39ed", "transparent"]}
      style={{ flex: 1, width: '100%', justifyContent: "center", alignItems:'center'}}
      locations={[0.4, 1]}
    >
      <Image
        source={require("../src/logo.png")}
        style={{ width: 300, height: 140 }}
      />
    </LinearGradient>
    <View>
      <Text style={{ fontSize: 24, marginBottom: 16, color: "black" }}>
        Our Programs
      </Text>
      {["Memorizing Program", "Recitation Program", "Noor Bayan Program"].map(
        (prog, index) => (
          <View key={index}>
            <Button
              title={prog}
              onPress={()=> navigation.navigate('program', {index: index })}
              buttonStyle={{
                borderRadius: 10,
                backgroundColor: "#0c322f",
                height: 60,
                opacity: 0.7,
              }}
              style={{ marginBottom: 8 }}
            />
          </View>
        )
      )}
    </View>

    {/* <View style={styles.submitButton}> */}

    {/* <View style={styles.subButton}>
            <Button
              title="Memorizing Quraan"
              buttonStyle={{
                borderRadius: 10,
                backgroundColor: "#0c322f",
                height: 60,
                opacity: 0.7,
              }}
              accessibilityLabel="Learn more about this purple button"
              style={{ marginBottom: 8 }}
            />
          </View>
          <View style={styles.subButton2}>
            <Button
              title="Memorizing Quraan"
              buttonStyle={{
                borderRadius: 10,
                backgroundColor: "#0c322f",
                height: 60,
                opacity: 0.7,
              }}
              accessibilityLabel="Learn more about this purple button"
              style={{ marginBottom: 8 }}
            />
          </View>
        </View> */}
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
    paddingBottom: 40
  },
  submitButton: {
    height: 85,
    flex: 3,
    //backgroundColor: "#FFBB34",
    borderColor: "#555555",
    borderWidth: 0,
    borderRadius: 0,
    marginTop: 200,
    //justifyContent: "flex-start"
    paddingTop: 30,
    paddingLeft: 20,
    paddingRight: 20,
    justifyContent: "space-between",
    // marginTop:20
  },
  subButton: {
    height: 300,
    flex: 4,
    //backgroundColor: "#FFBB34",
    borderColor: "#555555",
    borderWidth: 0,
    borderRadius: 0,
    marginTop: 10,
    //justifyContent: "flex-start"
    paddingTop: 45,
    //paddingBottom:20
  },
  subButton2: {
    height: 300,
    flex: 18,
    //backgroundColor: "#FFBB34",
    borderColor: "#555555",
    borderWidth: 0,
    borderRadius: 0,
    marginTop: 10,
    //justifyContent: "flex-start"
    paddingTop: 40,
  },
  image: {
    flex: 4,
    justifyContent: "center",
    width: 300,
  },
  text: {
    color: "white",
    fontSize: 42,
    lineHeight: 700,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#0d3b39",
    opacity: 0.7,
    //#000000c0
  },
  ButonFirst: {
    backgroundColor: "#0d3b39ed",
    color: "#0d3b39ed",
  },
});

export default Programs;
