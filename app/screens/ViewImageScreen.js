import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  Image,
  View,
  StatusBar,
  TouchableHighlight,
} from "react-native";

class ViewImageScreen extends Component {
  state = {
    text: "hej",
  };

  updateText = () => {
    this.setState({ text: "Hello" });
  };

  render() {
    StatusBar.setBarStyle("light-content");
    return (
      <View style={styles.view}>
        <View style={styles.close} />
        <View style={styles.delete} />

        <Image
          resizeMode="contain"
          style={styles.image}
          source={require("../assets/chair.jpg")}
        />

        <Text
          style={{
            color: "white",
            position: "absolute",
            top: 50,
            right: "50%",
          }}
        >
          {this.state.text}
        </Text>
      </View>
    );
  }
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
