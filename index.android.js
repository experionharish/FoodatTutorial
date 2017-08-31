/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  View,
  StatusBar
} from 'react-native';
import Main from './app/main';


export default class BoilerplateSample extends Component {
  render() {
    return (
      <View style={{height:'100%'}}>
        <StatusBar
           backgroundColor="#fa5c4f"
           barStyle="light-content"
         />
        <Main/>
      </View>
    );
  }
}

AppRegistry.registerComponent('BoilerplateSample', () => BoilerplateSample);
