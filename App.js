import { StatusBar } from "expo-status-bar";
import { Easing, StyleSheet, Text, View } from "react-native";
//Leave this file empty as much as you can
//Only react-navigation would be here
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import "bootstrap/dist/css/bootstrap.min.css";

import {
  createStackNavigator,
  TransitionSpecs,
  HeaderStyleInterpolators,
  CardStyleInterpolators,
} from "@react-navigation/stack";
import Splashy from "./src/splashy";
import Login from "./src/login";
import Main from "./src/main";
import Events from "./components/events";
// import Forgot from "./src/out";
import Register from "./src/Register";
import Sessions from "./src/sessions";
import ForgotForm from "./components/Forgot-Form";
import PINConfirmForm from "./components/PIN-Confirm-Form";
import Room from "./components/Room";
import Programs from "./components/ourpragrams";
import Program from "./components/memorizingquraan";
// import Another from "./src/another";

const Stack = createNativeStackNavigator();

const config = {
  animation: "spring",
  config: {
    stiffness: 1000,
    damping: 50,
    mass: 3,
    overshootClamping: false,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};

const closeConfig = {
  animation: "timing",
  config: {
    duration: 200,
    easing: Easing.linear,
  },
};

const transitionOptions = {
  gestureDirection: "vertical",
  transitionSpec: {
    open: config,
    close: closeConfig,
  },
  cardStyleInterpolator: CardStyleInterpolators.forModalPresentationIOS,
};

export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="splashy">
          <Stack.Screen
            name="main"
            component={Main}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="room"
            component={Room}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="events"
            component={Events}
            options={{ title: 'Events' , headerTitleAlign: 'center'}}
          />
          <Stack.Screen
            name="sessions"
            component={Sessions}
            options={{ title: 'Sessions' , headerTitleAlign: 'center'}}
          />
          <Stack.Screen
            name="pin"
            component={PINConfirmForm}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="forgot"
            component={ForgotForm}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="register"
            component={Register}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="splashy"
            component={Splashy}
            options={{
              ...transitionOptions,
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="login"
            component={Login}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="programs"
            component={Programs}
            options={{ title: 'Home' , headerTitleAlign: 'center'}}
          />
          <Stack.Screen
            name="program"
            component={Program}
            options={{  headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
