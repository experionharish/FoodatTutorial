import React,{ Component } from 'react';
import {
  I18nManager,
  View,
  Text
} from 'react-native';
import {
  Container,
  Content,
  Tabs,
  Tab,
  TabHeading,
  Item,
  Icon,
  Input,
  StyleProvider
} from 'native-base';
import { TabNavigator } from 'react-navigation';

import styles from './styles';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import homeListApiCall, { search, logOutClicked } from '../../data/actions/homeAction';
import Loader from '../../components/loader';
import Toolbar from '../../components/toolbar';
import HomeTab1 from './components/homeTab1';
import Account from './components/account';


const Home = TabNavigator({
  Home: {
    screen: HomeTab1,
    navigationOptions: {
        tabBarIcon: ({tintColor}) => (<Icon name="home" style={{ color: tintColor }} />),
    }
  },
  Favourites: {
    screen: HomeTab1,
    navigationOptions: {
        tabBarIcon: ({tintColor}) => (<Icon name="ios-star" style={{ color: tintColor }} />),
    }
  },
  Account: {
    screen: Account,
    navigationOptions: {
        tabBarIcon: ({tintColor}) => (<Icon name="person" style={{ color: tintColor }}/>),
    }
  },
}, {
  tabBarPosition: 'bottom',
  tabBarOptions: {
    activeTintColor: '#fff',
    inactiveTintColor: '#ffb900',
    showIcon: true,
    showLabel: false,
    style: styles.tabBar,
    indicatorStyle: {backgroundColor:'transparent'}
  },
  initialRouteName: 'Account'
});


class HomeView extends Component {
//
//   /*
//     Use navigationOptions to set the various properties regarding navigation of a screen.
//   */
  static navigationOptions = {
      header : null,
      gesturesEnabled:false
  }
//
//   logOutClicked(){
//     this.props.logOutClicked(this.props.navigation.navigate);
//   }
//
  render(){
    return(
      <Container>
        <Toolbar />
          <Home />
      </Container>
    )
  }
}

export default HomeView;
