import React,{ Component } from 'react';
import enableArabic, { disableArabic } from '../../../data/actions/accountAction';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styles from './styles';
import SplashScreen from 'react-native-splash-screen';
import ImagePicker from 'react-native-image-crop-picker';

import {
  I18nManager,
  Text,
  Alert,
  AsyncStorage,
  UIManager,
  LayoutAnimation,
  Animated
} from 'react-native';
import {
  Container,
  CheckBox,
  Content,
  View,
  Item,
  Input,
  Icon,
  Thumbnail,
  Button,
  List,
  ListItem,
  Left,
  Body,
  Right,
} from 'native-base';

import imageURL from '../../../constants/images';

UIManager.setLayoutAnimationEnabledExperimental
  && UIManager.setLayoutAnimationEnabledExperimental(true);

function moveStateToProps(state){
  return {
    account : state.account
  };
}

function matchDispatchToProps(dispatch){
  return bindActionCreators({
    enableArabic,
    disableArabic
  },dispatch);
}




class Account extends Component {
  constructor(props) {
    super(props);
  }


  /*
    Use navigationOptions to set the various properties regarding navigation of a screen.
  */
  static navigationOptions = {
      header : null,
      gesturesEnabled:false
  }

  componentWillMount(){

  }

  componentDidMount(){

  }

  render(){

    return(
      <Container style={styles.outerContainer}>
        <Content style={styles.container}>
          <View style={styles.profileArea}>
            <View style={{alignItems:'center'}}>
              <Thumbnail style={{borderWidth:2, borderColor:'#fff'}} large source={{uri:''}} />

            </View>

            <Button style={styles.signInButton}>
              <Text style={styles.whiteText}>SIGN IN</Text>
            </Button>
          </View>
        </Content>
      </Container>
    )
  }
}

export default connect(moveStateToProps,matchDispatchToProps)(Account);
