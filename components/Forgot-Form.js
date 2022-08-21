import React, { useState } from "react";
import { TextInput, View, Text, CheckBox, Pressable } from "react-native";
import { Button, Input, Icon } from "react-native-elements";
import { Formik, useFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";

const SignupSchema = Yup.object().shape({
  email: Yup.string()
    .matches(/^\w+@\w+.(com|net|org)$/, "Is not in correct format")
    .required("Required"),
  password: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

const ForgotForm = ({ navigation }) => {
  const [isSelected, setSelection] = useState(false);

  return (
    <View style={{ minWidth: "70%" }}>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={SignupSchema}
        onSubmit={(values) => {
          axios
            .post("http://localhost:5000/api/auth/request_pin", {
              email: values.email,
            })
            .then((res) => navigation.navigate("splashy", { user: res.data }))
            .catch((err) => console.error(err));
        }}
      >
        {({
          errors,
          touched,
          handleSubmit,
          handleChange,
          handleBlur,
          values,
        }) => (
          <Form onSubmit={handleSubmit}>
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
              onChange={handleChange("email")}
              onBlur={handleBlur("email")}
              value={values.email}
              errorStyle={{ color: "rgb(250, 90, 90)" }}
              placeholder="Email"
              errorMessage={errors.email && touched.email ? errors.email : null}
              inputStyle={{ outline: "none", fontSize: 16 }}
              leftIcon={
                <Icon
                  name="mail-outline"
                  type="ion-icons"
                  size={16}
                  color="#fff"
                />
              }
            />

            <Input
              name="password"
              placeholder="Password"
              secureTextEntry
              style={{ color: "white" }}
              containerStyle={{
                backgroundColor: "#73c4bd2a",
                borderRadius: 16,
                marginBottom: 16,
              }}
              onChange={handleChange("password")}
              onBlur={handleBlur("password")}
              value={values.password}
              leftIconContainerStyle={{ marginStart: 8, marginEnd: 4 }}
              placeholderTextColor="rgba(255, 255, 255, 0.609)"
              errorStyle={{ color: "rgb(250, 90, 90)" }}
              errorMessage={
                errors.password && touched.password ? errors.password : null
              }
              inputStyle={{ outline: "none", fontSize: 16 }}
              leftIcon={
                <Icon name="lock" type="font-awesome" size={16} color="#fff" />
              }
            />

            <Button
              title="Login"
              buttonStyle={{ borderRadius: 40, backgroundColor: "#0c322f" }}
              onPress={handleSubmit}
              accessibilityLabel="Learn more about this purple button"
              style={{ marginBottom: 8 }}
            />
            <View
              style={{
                justifyContent: "space-between",
                flexDirection: "row",
                flex: 1,
              }}
            >
              <View style={{ flexDirection: "row" }}>
                <CheckBox
                  value={isSelected}
                  onValueChange={setSelection}
                  style={{ marginEnd: 8 }}
                />
                <Text style={{ color: "white" }}>Remember me</Text>
              </View>
              <Pressable onPress={console.log}>
                <Text style={{ color: "white" }}>Forgot your password?</Text>
              </Pressable>
            </View>
          </Form>
        )}
      </Formik>
    </View>
  );
};

export default ForgotForm;