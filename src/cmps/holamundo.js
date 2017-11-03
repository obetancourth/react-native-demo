import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';

export default class HolaMundo extends Component {
  constructor(){
    super();
    this.onPressHandler = this.onPressHandler.bind(this);
  }

  onPressHandler(e){
    this.props.clickHandler(this.props.newMessage || "Click");
  }

  render() {
    return (
      <View style={styles.main}>
        <TouchableHighlight onPress={this.onPressHandler} style={styles.niceButton}>
          <Text>
            {this.props.estado}
          </Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main:{
  },
  niceButton:{
    padding:20,
    backgroundColor:"#DDDDDD"
  }
});
