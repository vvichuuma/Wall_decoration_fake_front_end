import React, { Component } from "react";
import {
  Image,
  View,
  Text,
  AppRegistry,
  Button,
  TextInput,
  StyleSheet,
  TouchableOpacity
} from "react-native";

export default class signup extends Component {
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
    this.state = { first: "" };
    this.state = { last: "" };
  }

  render() {
    return (
      <View>
        <View style={styles.container}>
          <Text style={styles.func}>Signup</Text>
          <View style={styles.back}>
            <Button
              title="<"
              color="red"
              onPress={() => this.props.navigation.navigate("App")}
            />
          </View>
          <View style={styles.soothu}>
            <View style={styles.one}>
              <Text style={styles.name}>FirstName:</Text>
              <TextInput
                style={styles.input}
                placeholder="enter first name"
                onChangeText={this.firstname}
              />
            </View>

            <View style={styles.one}>
              <Text style={styles.name}>LastName:</Text>
              <TextInput
                style={styles.input}
                placeholder="enter last name"
                onChangeText={this.lastname}
              />
            </View>

            <View style={styles.one}>
              <Text style={styles.name}>Email:</Text>
              <TextInput
                style={styles.input}
                placeholder="enter email"
                onChangeText={this.email}
              />
            </View>

            <View style={styles.one}>
              <Text style={styles.name}>PassWord:</Text>
              <TextInput
                style={styles.input}
                placeholder="enter password"
                secureTextEntry={true}
                onChangeText={this.password}
              />
            </View>

            <View styles={styles.one}>
              <Text style={styles.name}>PassWordConfirmation:</Text>
              <TextInput
                style={styles.input}
                placeholder="enter password"
                secureTextEntry={true}
                onChangeText={this.password_c}
              />
            </View>
          </View>
          <TouchableOpacity style={styles.submit}>
            <Button
              title="Submit"
              color="white"
              onPress={() => {
                console.log("Computer Code is awesome");
              }}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  firstname = type => {
    this.setState = { first: type };
  };

  lastname = lasty => {
    this.setState = { last: lasty };
  };
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    height: "100%",
    width: "100%"
  },

  input: {
    height: 40,
    width: 310,
    borderRadius: 20,
    position: "relative",
    top: 10,
    left: 30,
    alignItems: "center",
    borderColor: "grey",
    borderWidth: 1,
    padding: 10
  },
  name: {
    fontSize: 20,
    position: "relative",
    top: 40,
    left: 10
  },

  name: {
    padding: 5,
    position: "relative",
    top: 10,
    fontSize: 15
  },
  soothu: {
    marginTop: 40
  },
  func: {
    fontSize: 35,
    color: "blue",
    position: "relative",
    left: 140,
    top: 20
  },
  butt: {
    position: "absolute",
    top: 180
  },
  hee: {
    color: "red"
  },
  submit: {
    width: 100,
    height: 40,
    backgroundColor: "blue",
    position: "absolute",
    left: 150,
    top: 540,
    borderRadius: 20
  },
  wid: {
    color: "white",
    position: "relative",
    top: 10,
    left: 27,
    fontSize: 15
  },
  home: {
    position: "relative",
    top: 25
  },
  one: {
    marginBottom: 10
  },
  back: {
    position: "absolute",
    top: 10,
    left: 3,
    height: 50,
    width: 40
  }
});

AppRegistry.registerComponent("signup", () => signup);
