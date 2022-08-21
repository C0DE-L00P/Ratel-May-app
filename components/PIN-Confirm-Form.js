import React, { useState } from "react";
import { TextInput, View, Text, CheckBox, Pressable } from "react-native";
import { Button, Input, Icon } from "react-native-elements";
import { Formik, useFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { VerificationPin } from "react-verification-pin";
import CodePin from "react-native-pin-code";

const SignupSchema = Yup.object().shape({
  pin: Yup.string().required("Required"),
});

const PINConfirmForm = ({ navigation, route }) => {
  const email = route.params?.email ?? "mohamedgyaseen@gmail.com";

  const [status, setStatus] = useState("process");

  const handleOnFinish = (code) => {
    setStatus("wait");

    // simulating a search on your api
    axios
      .post("http://localhost:5000/api/auth/confirm_pin", {
        email: email,
        pin: code,
      })
      .then((res) => {
        setStatus("success");
        setTimeout(() => {
          navigation.navigate("forgot", reset_data={
            email: email,
            pin: code,
          });
        }, 400);
      })
      .catch((err) => {setStatus("error") ;console.log('err',err)});
  };

  //TODO: شيل القرف دا لو مشتغلش كويس ع الموبايل
  return (
    <View>
      <VerificationPin
        type="number"
        inputsNumber={6}
        status={status}
        title="Enter PIN"
        subTitle="Please, check your email for the verification code"
        onFinish={handleOnFinish}
      />
      {/* <CodePin
  code="2018" // code.length is used if you not pass number prop
  success={() => console.log('hurray!')} // If user fill '2018', success is called
  text="A simple Pin code component" // My title
  error="You fail" // If user fail (fill '2017' for instance)
  autoFocusFirst={false} // disabling auto-focus
/> */}
    </View>
  );
};

export default PINConfirmForm;
