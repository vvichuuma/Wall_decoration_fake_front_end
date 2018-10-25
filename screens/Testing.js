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
      <View>
        <View>
          <Text>Why the Fuck </Text>
        </View>
        {"\b"}
        <View>
          <Text>this is not working?</Text>
        </View>
      </View>
    );
  }
}

AppRegistry.registerComponent("testing", () => testing);
