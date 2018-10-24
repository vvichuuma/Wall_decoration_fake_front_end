import React, { Component } from "react";
import { View, Text } from "react-native";
import { createStackNavigator } from "react-navigation";

import App from "../screens/App";
import Component1 from "../screens/Component1";
import login from "../screens/Login";
import signup from "../screens/Signup";
import testing from "../screens/Testing";

export default class app extends Component {
  render() {
    return <AppStackNavigator />;
  }
}

const AppStackNavigator = createStackNavigator(
  {
    App: App,
    Comp: Component1,
    signup: signup,
    login: login,
    test: testing
  },

  {
    initialRouteName: "signup"
  }
);


