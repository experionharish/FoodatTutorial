import React from 'react';
import { StackNavigator } from 'react-navigation';
import Login from './containers/login';
import Home from './containers/home';

const Routes = StackNavigator({
  Login : { screen : Login },
  Home : { screen : Home },

});

export default Routes;
