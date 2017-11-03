import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import Contenedor from './cmps/contenedor.js';



export default class Main extends Component {
  constructor() {
    super();
    this.state={
      unEstado:"Esto es un Estado Inicial"
    }
    this.cambiarEstado = this.cambiarEstado.bind(this);
  }

  cambiarEstado(mensaje){
    this.setState({unEstado:mensaje});
  }


  render() {
    return (
          <Contenedor clickHandler={this.cambiarEstado} estado={this.state.unEstado} />
    );
  }
}

const styles = StyleSheet.create({
  body:{

  }
});
