import React, { Component } from "react";
import {
  Image,
  View,
  Text,
  AppRegistry,
  StyleSheet,
  Button,
  TouchableOpacity
} from "react-native";

class myapp extends Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <View>
        <Text style={styles.tex}>Wall Decoration App</Text>
        <TouchableOpacity>
          <View>
            <Button
              style={styles.login}
              title="LOGIN"
              onPress={() => this.props.navigation.navigate("login")}
            />
            <Button
              style={styles.signup}
              title="SIGNUP"
              onPress={() => this.props.navigation.navigate("signup")}
            />
            <Button
              style={styles.signup}
              title="CAMERA"
              onPress={() => this.props.navigation.navigate("camera")}
            />

          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

export default myapp;

const styles = StyleSheet.create({
  tex: {
    color: "blue",
    fontSize: 26,
    position: "absolute",
    top: 200,
    left: 80
  },
  button: {
    color: "red"
  },
  box: {
    height: 70,
    width: 150,
    backgroundColor: "red",
    borderRadius: 20,
    position: "relative",
    left: 112,
    top: 280
  },
  zesty: {
    color: "white",
    position: "relative",
    left: 30,
    top: 25,
    fontSize: 20
  }
});

AppRegistry.registerComponent("myapp", () => myapp);
