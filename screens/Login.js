import React, { Component } from "react";
import {
  View,
  Image,
  Text,
  AppRegistry,
  TextInput,
  StyleSheet,
  Button,
  AsyncStorage
} from "react-native";

var axios = require("axios");
console.log(axios);

export default class test extends Component {
  static navigationOptions = {
    header: null
  };

//State Functions Begin:

  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      errors: []
    };
  }

  //State Function End

  iterateErrors() {
    if (this.state.errors) {
      let err = this.state.errors;
      return err.map((data, i) => {
        return (
          <View key={i}>
            <Text style={styles.err}>{data}</Text>
            {"\b"}
          </View>
        );
      });
    }
  }

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
            onChangeText={this.handleChangeText}
            placeholder="Enter Email"
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
            placeholder="Enter Password"
            onChangeText={this.changeit}
            secureTextEntry={true}
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
          <Button title="Submit" color="white" onPress={this.sessions} />
        </View>

        <View style={styles.errors}>
          <Text>{this.iterateErrors()}</Text>
        </View>
      </View>
    );
  }

  handleChangeText = typedText => {
    this.setState({ email: typedText });
  };

  changeit = type => {
    this.setState({ password: type });
  };

  sessions = () => {
     
     var params = {
       
       email: this.state.email,
       password: this.state.password

     };

      axios
      .post("http://192.168.43.19:3000/api/sessions", params)
      .then(async (response) => {
        axios.defaults.headers.common["Authorization"] =
          "Bearer " + response.data.jwt;
        // localStorage.setItem("jwt", response.data.jwt);
        await AsyncStorage.setItem("jwt", response.data.jwt);
        this.props.navigation.navigate("welcome");
      })
      .catch(error => {
        var err = ["Invalid email or password."];
        this.setState({ errors: err });
        console.log(this.state.errors);
        this.email = "";
        this.password = "";
      });

  };
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
    width: 40
  },
  errors: {
    position: "relative",
    top: 20,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 30,
    marginRight: 30,

    flexDirection: "row"
  },
  err: {
    color: "red"
  }
});

AppRegistry.registerComponent("test", () => test);
