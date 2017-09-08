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
    this.state={showLanguageSection : false, profilePic: imageURL.userProfilePic};

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
    //this.switchArabic();
    //Alert.alert("Value : "+ I18nManager.isRTL + " " +this.props.account.arabic);
    //this.props.disableArabic();
    //SplashScreen.hide();
    AsyncStorage.getItem('isRTL').then((value)=>{
      if(JSON.parse(value)){
        this.props.enableArabic();
      } else {
        this.props.disableArabic();
      }
    });

    AsyncStorage.getItem('profilePicture').then((value)=>{
      if(value != null){
        this.setState({profilePic:value});
      }
    });
  }



  switchArabic=()=>{
    this.props.account.arabic ? this.props.disableArabic() : this.props.enableArabic();


  }

  showAlert=()=>{
    //Alert.alert("" + this.state.showLanguageSection);
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    this.setState({showLanguageSection:!this.state.showLanguageSection});
  }

  render(){

    return(
      <Container style={styles.outerContainer}>
        <Content style={styles.container}>
          <View style={styles.profileArea}>
            <View style={{alignItems:'center'}}>
              <Thumbnail style={{borderWidth:2, borderColor:'#fff'}} large source={{uri:this.state.profilePic}} />
              <Icon name='camera' onPress={()=>{
                ImagePicker.openCamera({
                  width: 300,
                  height: 400,
                  cropping: true,
                  includeBase64: true
                }).then(image => {
                  console.log(image);
                  this.setState({profilePic:'data:image/png;base64,'+image.data});
                  AsyncStorage.setItem('profilePicture', this.state.profilePic);
                });
              }} style={{position:'absolute', bottom:-10, right:8, color:'#CCB'}}/>
            </View>

            <Button style={styles.signInButton}>
              <Text style={styles.whiteText}>SIGN IN</Text>
            </Button>
          </View>

          <Button full light style={{height:50}}>
            <Left><Text style={{fontSize: 16}}>My Orders</Text></Left>
            <Right><Icon name='ios-arrow-forward' style={styles.iconMirror}/></Right>
          </Button>
          <ListItem><Text></Text></ListItem>
          <Button full light style={{height:50}}
            onPress={this.showAlert}>
            <Left><Text style={{fontSize: 16}}>Change Language</Text></Left>
            <Right>
              {
                this.state.showLanguageSection ?
                <Icon name='ios-arrow-forward' style={[styles.iconMirror, {transform: [{rotate:'90deg'}]}]}/>
                :
                <Icon name='ios-arrow-forward' style={styles.iconMirror}/>
              }
            </Right>
          </Button>

          {
            this.state.showLanguageSection ?
            <ListItem>
              <Left>
                <Text>Arabic : </Text>
                <CheckBox checked={this.props.account.arabic} onPress={()=>{
                  if(!this.props.account.arabic){
                    this.props.enableArabic();
                    // Immediately reload the React Native Bundle
                    //RNRestart.Restart();
                  }
                }}/>
              </Left>
              <Left>
                <Text>English : </Text>
                <CheckBox checked={!this.props.account.arabic} onPress={()=>{
                  if(this.props.account.arabic){
                    this.props.disableArabic();
                    // Immediately reload the React Native Bundle
                    //RNRestart.Restart();
                  }
                }}/>
              </Left>
            </ListItem>
            :
            <View style={{height:0}}/>
          }

          <Button full light style={{marginTop:2, marginBottom:2, height:50}}>
            <Left><Text style={{fontSize: 16}}>Help & Support</Text></Left>
            <Right><Icon name='ios-arrow-forward' style={styles.iconMirror} /></Right>
          </Button>



        </Content>
      </Container>
    )
  }
}

export default connect(moveStateToProps,matchDispatchToProps)(Account);
