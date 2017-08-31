import React,{ Component } from 'react';
import { AsyncStorage } from 'react-native';
import { Provider } from 'react-redux';
import Routes from './routes';
import store from './store';

export default class Main extends Component{

  render(){

    return(
      <Provider store = {store}>
        <Routes/>
      </Provider>
    )
  }
}
