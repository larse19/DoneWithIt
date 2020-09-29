import React from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  Image,
  View,
  StatusBar,
  TouchableHighlightBase,
} from "react-native";

let text = "";

updateText = () => {
  this.text = "Hey";
};

function ViewImageScreen(props) {
  StatusBar.setBarStyle("light-content");

  return (
    <TouchableHighlightBase onPress={updateText()}>
      <View style={styles.view}>
        <View style={styles.close} />
        <View style={styles.delete} />
        <Text style={{ top: 20 }}>{this.text}</Text>
        <Image
          resizeMode="contain"
          style={styles.image}
          source={require("../assets/chair.jpg")}
        />
      </View>
    </TouchableHighlightBase>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: "black",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  close: {
    width: 50,
    height: 50,
    position: "absolute",
    top: StatusBar.currentHeight + 20,
    left: 20,
    backgroundColor: "#fc5c65",
  },
  delete: {
    width: 50,
    height: 50,
    position: "absolute",
    top: StatusBar.currentHeight + 20,
    right: 20,
    backgroundColor: "#4ECDC4",
  },
});

export default ViewImageScreen;
