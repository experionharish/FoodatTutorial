import React, {Component} from 'react';
import {AsyncStorage} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import {NavigationActions} from 'react-navigation';

const resetActionLogin = NavigationActions.reset({
  index: 0,
  actions: [NavigationActions.navigate({routeName: 'Login'})]
})

const resetActionHome = NavigationActions.reset({
  index: 0,
  actions: [NavigationActions.navigate({routeName: 'Home'})]
})

export default class LoginCheck extends Component {

  componentWillMount() {
    AsyncStorage.getItem('user').then((value) => {
      if (value == 'user') {
        console.log("true");
        //this.props.navigation.dispatch(resetActionHome);
        this.props.navigation.navigate('Home');
        /*this.props.navigation.dispatch({
          key: 'Home',
          type: 'ReplaceCurrentScreen',
          routeName: 'Home'
        });*/


      } else {
        console.log("false");
        this.props.navigation.dispatch(resetActionLogin);

      }
      SplashScreen.hide();

    });
  }

  render() {
    return null;
  }
}
