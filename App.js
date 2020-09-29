import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import { StyleSheet, Platform, View, TouchableHighlight } from "react-native";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import WelcomeScreen from "./app/screens/welcomeScreen";

export default class App extends Component {
  state = {
    welcomeScreen: true,
  };

  render() {
    return (
      <TouchableHighlight
        onPress={() =>
          this.setState({ welcomeScreen: !this.state.welcomeScreen })
        }
        style={{ flex: 1, justifyContent: "center", alignContent: "center" }}
      >
        {this.state.welcomeScreen ? <WelcomeScreen /> : <ViewImageScreen />}
      </TouchableHighlight>
    );
  }
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
