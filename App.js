/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import Main from './src/main.js';
import Main2 from './src/Main2.js';
import {Scene, Router, ActionConst } from 'react-native-router-flux';
// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' +
//     'Cmd+D or shake for dev menu',
//   android: 'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });

export default class App extends Component<{}> {
  render() {
    return (
      <Router>
          <Scene key="root">
              <Scene key="main" component={Main} title="Principal" type={ActionConst.REPLACE} />
              <Scene key="main2" component={Main2} title="Secundario" type={ActionConst.REPLACE}/>
          </Scene>
      </Router>

    );
  }
}
