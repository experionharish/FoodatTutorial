/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  View
} from 'react-native';
import Main from './app/main';


export default class BoilerplateSample extends Component {
  render() {
    return (
      <View style={{height:'100%'}}>
        <Main/>
      </View>
    );
  }
}

AppRegistry.registerComponent('BoilerplateSample', () => BoilerplateSample);
