import React from "react";
import {
  Image,
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  ScrollView
} from "react-native";
import { FileSystem, FaceDetector, MediaLibrary, Permissions } from "expo";
import { MaterialIcons } from "@expo/vector-icons";
import Photo from "./Photo";
var axios = require("axios");

const PHOTOS_DIR = FileSystem.documentDirectory + "photos";

export default class GalleryScreen extends React.Component {
  state = {
    faces: {},
    images: {},
    photos: [],
    selected: [],
    hola: ""
  };

  componentDidMount = async () => {
    const photos = await FileSystem.readDirectoryAsync(PHOTOS_DIR);
    this.setState({ photos });
  };

  toggleSelection = (uri, isSelected) => {
    let selected = this.state.selected;
    if (isSelected) {
      selected.push(uri);
    } else {
      selected = selected.filter(item => item !== uri);
    }
    this.setState({ selected });
  };

  //Function_to_Target:

  saveToGallery = async () => {
    const photos = this.state.selected;

    //console.log(photos);

    var words = photos;
    var named = words[0].split('/').pop()
    var name_1 = named.split('.')
    var name_x = name_1[0];
    console.log(name_x);
    var name_y = name_1[1];
    console.log(name_y);
    var endd = ("image" + "/" + name_y).toString();
    console.log(endd);


    //console.log(words[0]);

    this.setState({ hola: words[0] });

    var namez = "Final_try";

    var formData = new FormData();

    formData.append("name", namez);
    // formData.append("image", words[0]);
    formData.append("image", {
      uri: words[0],
      name: named,
      type: endd
    });

    console.log("--------");
    //console.log(words[0].split('/').pop());
    console.log("-------");

    axios
      .post("http://192.168.43.19:3000/api/photocreate", formData)
      .then(function(response) {
        console.log(response.data);
      });
  };
  //Function_to_Target_Ends_here

  renderPhoto = fileName => (
    <Photo
      key={fileName}
      uri={`${PHOTOS_DIR}/${fileName}`}
      onSelectionToggle={this.toggleSelection}
    />
  );

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.navbar}>
          <TouchableOpacity style={styles.button} onPress={this.props.onPress}>
            <MaterialIcons name="arrow-back" size={25} color="white" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={this.saveToGallery}>
            <Text style={styles.whiteText}>Save selected to gallery</Text>
          </TouchableOpacity>
        </View>
        <ScrollView contentComponentStyle={{ flex: 1 }}>
          <View style={styles.pictures}>
            {this.state.photos.map(this.renderPhoto)}
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: "white"
  },
  navbar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#4630EB"
  },
  pictures: {
    flex: 1,
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 8
  },
  button: {
    padding: 20
  },
  whiteText: {
    color: "white"
  }
});
