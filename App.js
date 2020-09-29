import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Platform, View } from "react-native";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import WelcomeScreen from "./app/screens/welcomeScreen";

export default function App() {
  return (
    <ViewImageScreen />
    //<WelcomeScreen />;
  );
}

/*
Exampel of an alert that has multiple respond buttons
Alert.alert("My title", "My message", [
  { text: "Yes", onPress: () => console.log("Yes") },
  { text: "No", onPress: () => console.log("No") },
])
*/

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? 25 : 0,
  },
});
