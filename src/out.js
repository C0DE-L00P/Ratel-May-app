import axios from "axios";
import React, { useRef, useState } from "react";
import { View } from "react-native";
import { Button, Icon, Input } from "react-native-elements";

export default function Forgot() {
  const [userTemp, setUserTemp] = useState({});

  return <View>
    <FirstPage userTemp={userTemp} setUserTemp={setUserTemp}/>
  </View>;
}

const FirstPage = (props) => {

  function requestPIN() {
    console.log('email',props.userTemp.email)
    // axios
    //   .post("http://localhost:5000/api/auth/request_pin", {
    //       email: email.current,
    //   })
    //   .then((res) => console.log(res))
    //   .catch((err) => console.error(err));
  }
  //TODO: maybe validate it later on

  return (
    <View>
      <Input
        style={{ color: "white" }}
        containerStyle={{
          backgroundColor: "#73c4bd2a",
          borderRadius: 16,
          marginBottom: 8,
          padding: 0,
        }}
        leftIconContainerStyle={{ marginStart: 8, marginEnd: 4 }}
        placeholderTextColor="rgba(255, 255, 255, 0.609)"
        name="email"
        onChange={(e)=>setUserTemp({...props.userTemp, email: "csa"})}
        errorStyle={{ color: "rgb(250, 90, 90)" }}
        placeholder="Email"
        // errorMessage={}
        inputStyle={{ outline: "none", fontSize: 16 }}
        leftIcon={
          <Icon name="mail-outline" type="ion-icons" size={16} color="#fff" />
        }
      />

      <Button
        title="Send"
        buttonStyle={{ borderRadius: 40, backgroundColor: "#0c322f" }}
        onPress={requestPIN}
        accessibilityLabel="Send Verification code"
        style={{ marginBottom: 8 }}
      />
    </View>
  );
};
