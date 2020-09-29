import React from "react";
import { ImageBackground, StyleSheet, Text, Image, View } from "react-native";

function WelcomeScreen(props) {
  return (
    <ImageBackground
      source={require("../assets/background.jpg")}
      style={styles.background}
    >
      <View style={styles.logo_view}>
        <Image
          source={require("../assets/logo-red.png")}
          style={styles.logo_image}
        />
        <Text>Sell what you don't need</Text>
      </View>
      <View style={styles.login_button}></View>
      <View style={styles.register_button}></View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
  },
  logo_view: {
    top: "10%",
    alignSelf: "center",
    position: "absolute",
  },
  logo_image: {
    width: 100,
    height: 100,
    alignSelf: "center",
  },
  login_button: {
    width: "100%",
    height: 70,
    backgroundColor: "#fc5c65",
  },
  register_button: {
    width: "100%",
    height: 70,
    backgroundColor: "#4ECDC4",
  },
});

export default WelcomeScreen;
