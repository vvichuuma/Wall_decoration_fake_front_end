import React, { Component } from "react";
import { AppRegistry, Image, View, Text, Button } from "react-native";

export default class Component1 extends Component {
  static navigationOptions = {
    header: null
  };
  render() {
    return (
      <View>
        <Text>Zuckerberg is a Computer Programmer</Text>

        <Button
          title="Home"
          onPress={() => this.props.navigation.navigate("App")}
        />
      </View>
    );
  }
}

AppRegistry.registerComponent("Component1", () => Component1);
