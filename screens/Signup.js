import React, { Component } from "react";
import {
  Image,
  View,
  Text,
  AppRegistry,
  Button,
  TextInput,
  StyleSheet,
  FlatList,
  TouchableOpacity
} from "react-native";

var axios = require("axios");
console.log(axios);

export default class signup extends Component {
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);

    this.state = {
      first: "",
      last: "",
      email: "",
      password: "",
      password_c: "",
      errors: []
    };
  }

  testdata() {
    return "Computer Code is powerful!!";
  }

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
                onChangeText={val => this.setState({ first: val })}
              />
            </View>

            <View style={styles.one}>
              <Text style={styles.name}>LastName:</Text>
              <TextInput
                style={styles.input}
                placeholder="enter last name"
                onChangeText={val => this.setState({ last: val })}
              />
            </View>

            <View style={styles.one}>
              <Text style={styles.name}>Email:</Text>
              <TextInput
                style={styles.input}
                placeholder="enter email"
                onChangeText={val => this.setState({ email: val })}
              />
            </View>

            <View style={styles.one}>
              <Text style={styles.name}>PassWord:</Text>
              <TextInput
                style={styles.input}
                placeholder="enter password"
                secureTextEntry={true}
                onChangeText={val => this.setState({ password: val })}
              />
            </View>

            <View styles={styles.one}>
              <Text style={styles.name}>PassWordConfirmation:</Text>
              <TextInput
                style={styles.input}
                placeholder="enter password"
                secureTextEntry={true}
                onChangeText={val => this.setState({ password_c: val })}
              />
            </View>
          </View>
          <View style={styles.errors}>
            <Text>{this.iterateErrors()}</Text>
          </View>

          <TouchableOpacity style={styles.submit}>
            <Button
              title="Submit"
              color="white"
              onPress={this.onRegisterPressed.bind(this)}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  onRegisterPressed() {
    console.log("Mark Zuckerberg is an american Computer Porgrammmer");
    var params = {
      first_name: this.state.first,
      last_name: this.state.last,
      email: this.state.email,
      password: this.state.password,
      password_confirmation: this.state.password_c
    };

    console.log(params);

    // axios
    //   .post("http://localhost:3000/api/users", params)
    //   .then(function(response) {
    //     console.log(response.data);
    //   });

    axios
      .post("http://192.168.43.19:3000/api/users", params)
      .then(response => {
        this.props.navigation.navigate("login");
      })
      .catch(error => {
        let error_arr = error.response.data.errors;

        this.setState({ errors: error_arr });

        console.log(this.state.errors);
      });
  }
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
    marginTop: 20
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
    left: 130,
    top: 570,
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

AppRegistry.registerComponent("signup", () => signup);
