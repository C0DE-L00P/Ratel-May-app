import { useRoute } from "@react-navigation/native";
import * as React from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  SafeAreaView,
  FlatList,
} from "react-native";
import { Button } from "react-native-elements";

const Program2 = ({ navigation }) => {
    const route = useRoute()
    //TODO: this 
    console.log(route.params)
  const indexToShow = 2;

  const contentArr = [
    {
      title: "Memorizing the holly Quran",
      premise:
        "﴾ Indeed, it is We who sent down the Qur'an and indeed, We will be its guardian.﴿",
      surah: "Surah Al-Hijr: 9",
      moral:
        "We Offer You a Special Program to learn the Holly Qoraan With the best experienced teachesrs for years with excellentfollow-up and performancement review of what you have learned",
    },
    {
      title: "Quran recitation",
      premise: "﴾ and recite the Qur’ān with measured recitation.﴿",
      surah: "Surah Al-Muzzammil: 4",
      moral:
        "Many face a problem in reciting the Noble Qur’an and are not proficient in reciting the Qur’an as it was revealed to the Prophet Muhammad, but there is nothing wrong with us, as we have prepared a program for you to learn the recitation of the Qur’an as it was revealed with the correct rulings.",
    },

    {
      title: "Nour Al-Bayan courses",
      premise: `﴾ The Messenger of Allah (ﷺ) said, "The best amongst you is the one who learns the Qur'an and teaches it."﴿`,
      surah: "[Al-Bukhari]",
      moral:
        "Nour Al-Bayan courses enable you to learn and benefit both linguistically and scientifically. We have you can learn the correct grammar and memorize the Noble Qur’an simultaneously at the hands of a selection of the best teachers of the Arabic language and the Noble Qur’an",
    },
  ];

  return (
    <SafeAreaView style={mystyle.container}>
      <View style={mystyle.container}>
        <Image style={mystyle.image} source={require("../assets/img2.webp")} />
        <Text style={mystyle.text}>{contentArr[indexToShow].premise}</Text>
        <Text style={mystyle.text}>{contentArr[indexToShow].surah}</Text>
        <Text style={mystyle.text}>{contentArr[indexToShow].moral}</Text>
        <View style={mystyle.subButton}>
          <Button
            onPress={() => navigation.navigate("register")}
            title="Join Us"
            titleStyle={{ color: "black" }}
            buttonStyle={{
              borderRadius: 34,
              backgroundColor: "#acd9e3",
              height: 60,
              opacity: 0.7,
            }}
            accessibilityLabel="Learn more about this purple button"
            style={{ marginBottom: 8 }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const mystyle = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0d3b39ed",
    opacity: 1,
    width: "100%",
  },
  row: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "grey",
    flexDirection: "row",
  },
  decorationview: {
    textAlign: "center",
  },
  subButton: {
    flex: 1,
    //backgroundColor: "#FFBB34",
    borderColor: "#555555",
    borderWidth: 0,
    borderRadius: 50,
    marginTop: 10,
    //justifyContent: "flex-start"
    paddingTop: 20,
    width: 200,
    //paddingBottom:20
  },

  image: {
    width: 200,
    height: 200,
    borderRadius: 200 / 2,
    paddingTop: 20,
    marginTop: 50,
    marginBottom: 32,
  },
  text: {
    // fontWeight:'bold',
    textAlign: "center",
    maxWidth: "80%",
    color: "white",
    marginBottom: 8,
  },
  textfront: {
    marginTop: 10,
    fontSize: 20,
    // fontWeight:'bold',
    color: "#0e3c3a",
  },
});
export default Program2;
