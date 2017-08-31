import React from 'react';
import { syncStorage } from 'react-native';
import {StackNavigator, TabNavigator} from 'react-navigation';
import Login from './containers/login';
import Home from './containers/home';
import LoginCheck from './containers/loginCheck';

import { Icon } from 'native-base';

const Routes = StackNavigator({
  LoginCheck: {
    screen: LoginCheck
  },
  Login: {
    screen: Login
  },
  Home: {
    screen: Home
  }
});


export default Routes;
