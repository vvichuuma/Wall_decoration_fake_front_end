import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import Draggable from "react-native-draggable";


var axios = require('axios')
console.log(axios);

export default class App extends React.Component {


  static navigationOptions={
    header: null
  };


  constructor(props) {
    super(props);
    this.state = {

          sauce: {uri: "http://192.168.43.19:3000/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBGdz09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--32aa361a666c4802545ff65a69673aad1af614c0/1540781890551.jpg"},
              source: "",
              photos:[],
              sucks: {uri:""},
              fina: {}


    };
  }

  request(){

     axios.get("http://192.168.43.19:3000/api/photo").then(response => {

         //console.log(response.data);
            var photos = response.data["Vish_photos"];
            var validPhotos = photos.filter(photo => photo.image_url)
            console.log(validPhotos)
             this.setState({
                source: validPhotos[0]['image_url'] 
             });
             console.log('----------')
                console.log(this.state.source);
               console.log('----------') 
            
            //source: require("");
     });
  }


   finalphoto(){
       console.log('Code is powerful');
       //console.log(this.state.photos);
       //  this.setState({
       //          source: this.state.photos[0]
       //       });
        
        console.log(this.state.source);
        const fin = this.state.source;
        
        var obj = {
            
            uri: `${fin}`

        }
      
      console.log('====')
      console.log(obj);
      console.log("===")

      this.setState({ fina: obj})
       
       console.log(this.state.fina);


   }

   getimage(){

      const img  =   "Vish ia a ";
      return img;
   }

   getfina(){


     console.log("=============")

      var source = ("http://192.168.43.19:3000/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBGdz09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--32aa361a666c4802545ff65a69673aad1af614c0/1540781890551.jpg");

      return source;

      var obj = JSON.parse(`{ "uri": ${source}`);
      
      console.log(obj);

      console.log("=============")


   }

  render() {
    return (
      <View style={styles.container}>
   
        <Draggable
          renderShape="image"
          imageSource={this.state.sauce}
          renderSize={100}
          offsetX={0}
          offsetY={0}
          reverse={false}
        />
         
           <Draggable
          renderShape="image"
          imageSource={this.state.fina}
          renderSize={100}
          offsetX={0}
          offsetY={0}
          reverse={false}
        />

         <Button
       onPress={this.request.bind(this)}
       title="backend"
       color="#841584"/>
        
             <Button
       onPress={this.finalphoto.bind(this)}
       title="photos_ans"
       color="red"/>



       

      
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});