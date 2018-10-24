import React, { Component } from "react";
import {
  View,
  Image,
  Text,
  AppRegistry,
  TextInput,
  StyleSheet,
  Button
} from "react-native";

export default class test extends Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.login}>Login</Text>
        <View style={styles.back}>
          <Button
            title="<"
            color="red"
            onPress={() => this.props.navigation.navigate("App")}
          />
        </View>

        <View style={styles.Email}>
          <Text style={styles.email}>Email:</Text>
          <TextInput
            style={{
              borderWidth: 1,
              height: 40,
              width: 270,
              borderColor: "grey",
              borderRadius: 20,
              padding: 10
            }}
          />
        </View>

        <View style={styles.Password}>
          <Text style={styles.password}>Password:</Text>
          <TextInput
            style={{
              borderWidth: 1,
              height: 40,
              width: 270,
              borderColor: "grey",
              borderRadius: 20,
              padding: 10
            }}
          />
        </View>

        <View
          style={{
            backgroundColor: "blue",
            width: 120,
            padding: 10,
            borderRadius: 20,
            position: "relative",
            bottom: 30
          }}
        >
          <Button title="Submit" color="white" />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  login: {
    fontSize: 30,
    position: "relative",
    bottom: 140,
    color: "blue"
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white"
  },
  email: {
    fontSize: 20,
    position: "relative",
    left: 10,
    padding: 5
  },
  Email: {
    position: "relative",
    bottom: 110
  },
  password: {
    fontSize: 20,
    position: "relative",
    left: 12,
    padding: 5
  },
  Password: {
    position: "relative",
    bottom: 90
  },
  submit: {
    borderColor: "lightgrey",
    backgroundColor: "red",
    height: 20,
    width: 40
  },
  back: {
    position: "absolute",
    top: 10,
    left: 3,
    height: 50,
    width: 40,
    fontSize: 20
  }
});

AppRegistry.registerComponent("test", () => test);

// <Button
//        title="Home"
//        style={styles.home}
//        onPress={() => this.props.navigation.navigate("App")}
