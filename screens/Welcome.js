import React, { Component } from 'react';
import { View, Text, AppRegistry, StyleSheet, TouchableOpacity,AsyncStorage, Button } from 'react-native';
import { Ionicons,FontAwesome } from '@expo/vector-icons';

import { ImagePicker } from 'expo';



 var axios = require('axios')
 console.log('axios')

 export default class welcome extends Component{

  static navigationOptions={
    header: null
  };

  constructor(props){
    super(props);

    this.state = {
       name: '',
       img: ''

    }

  }


  //Getting Requests from backend:

   user(){
    axios.get('http://localhost:3000/api/current').then(function(response){
        Name = response.data.Current_User.first_name
        this.setState({ name: Name})
    }.bind(this))  
   }

   images(){
      axios.get('http://localhost:3000/api/tasks').then(function(response){
           console.log(response.data.List_of_tasks);

           var num = response.data.List_of_tasks;

           var im = (num.length - 1);

           var lss = num[im]

           console.log(lss.name);

            this.setState({ img: lss.name})
                    // var im = response.data[len-1].name 
           // console.log(im);


      }.bind(this))
   }


  render(){

     return(
        <View>
           <Text style={styles.welcome}>
             <Text>{this.state.name} !!</Text>
             Welcome <Text>{this.user()}</Text>
             <Text>{this.state.img}</Text>

             <Text>{this.images()}</Text>
           </Text>

          
          <TouchableOpacity style={styles.logout} onPress={this.quit}>
             <FontAwesome name='power-off' size={20} color='black'/>
          </TouchableOpacity>

            <Button
              style={styles.si}
              title="CAMERA"
              onPress={() => this.props.navigation.navigate("camera")}
            />

            <View>
            <input type='file' />
            </View>

        </View>

      );
  }

  //Defining Fucntions:

  quit = () => {

    delete axios.defaults.headers.common["Authorization"];
    //localStorage.removeItem("jwt");
      AsyncStorage.removeItem("jwt");
    this.props.navigation.navigate('App');
  }



 }


 AppRegistry.registerComponent('welcome', () => welcome)


 const styles = StyleSheet.create({
   
    welcome: {

      color:'red',
      fontSize:20,
      position:'relative',
      left:110,
      top:60

    },

    logout: {
        position:'relative',
        left:340
     },

     si: {
      position:'absolute',
      top:50
     }



 });