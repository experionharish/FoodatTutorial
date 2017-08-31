import React,{ Component } from 'react';
import {
  View,
  Text,
  Alert,
  AsyncStorage
} from 'react-native';
import styles from './styles';
import LoginForm from './components/loginForm';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import loginApiCall from '../../data/actions/loginAction';
import SplashScreen from 'react-native-splash-screen';

function moveStateToProps(state){
  return {
    login : state.login
  };
}

function matchDispatchToProps(dispatch){
  return bindActionCreators({
    loginApiCall
  },dispatch);
}

class Login extends Component {

  /*
    Use navigationOptions to set the various properties regarding navigation of a screen.
  */
  static navigationOptions = {
      header : null,
      gesturesEnabled:false
  }

  componentDidMount(){
    SplashScreen.hide();
    AsyncStorage.getItem('user').then((value)=>{
      if(value == null){
        //Alert.alert('null');
      } else {
        //Alert.alert('user');
        this.props.navigation.navigate('Home');
      }
    });
  }

  LoginFunc = (values) => {
    this.props.loginApiCall(values,this.props.navigation.navigate);
  }

  render(){
    return(
      <View style={styles.container}>
        <LoginForm
         LoginClicked={this.LoginFunc}
        />
      <Text style={styles.hintText}>
        Enter username as 'user' and password '123'
      </Text>
      </View>
    )
  }
}

export default connect(moveStateToProps,matchDispatchToProps)(Login);
