import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';
import {Actions} from 'react-native-router-flux';

export default class Main2 extends Component {
  constructor(){
    super();
    this.onPressHandler = this.onPressHandler.bind(this);
  }
  onPressHandler(e){
    Actions.main();
  }
  render() {
    return (
      <View>
        <TouchableHighlight onPress={this.onPressHandler} style={styles.btn}>
          <Text>
              Ir a Principal
          </Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  btn:{
    padding:20,
    backgroundColor:"#EEEEEE"
  }
});
