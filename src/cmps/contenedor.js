import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';
import HolaMundo from './holamundo.js';
import {Actions} from 'react-native-router-flux';
export default class Contenedor extends Component {
  constructor(){
    super();
    this.onPressHandler = this.onPressHandler.bind(this);
  }
  onPressHandler(e){
    let a = 1;
    if(a){
        Actions.main2();
    }else{
        console.log("No Hacer Nada");
    }

  }
  render() {
    return (
      <View sylte={styles.main}>
          <HolaMundo {...this.props} newMessage={"Hola Mundo Click 1"} />
          <HolaMundo {...this.props} newMessage={"Hola Mundo Click 2"} />
          <HolaMundo {...this.props} newMessage={"Hola Mundo Click 3"} />
          <HolaMundo {...this.props} newMessage={"Hola Mundo Click 4"} />
          <TouchableHighlight onPress={this.onPressHandler} style={styles.btn}>
            <Text>Ir A Secundario</Text>
          </TouchableHighlight>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  main:{
    flex:1,
    alignItems:"center",
    justifyContent:"center"
  },
  btn:{
    padding:20,
    backgroundColor:"#EEEEEE"
  }
});
