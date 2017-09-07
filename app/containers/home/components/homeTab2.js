import React,{ Component } from 'react';
import {
  I18nManager,
  View,
  Text
} from 'react-native';
import {
  Tabs,
  Tab,
  Item,
  Icon,
  Input
} from 'native-base';
import styles from './styles';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import homeListApiCall, { search, logOutClicked } from '../../../data/actions/homeAction';
import HomeList from './homeList';
import Loader from '../../../components/loader';

function moveStateToProps(state){
  return {
    home : state.home
  };
}

function matchDispatchToProps(dispatch){
  return bindActionCreators({
    search,
    homeListApiCall,
    logOutClicked
  },dispatch);
}

class HomeTab2 extends Component {

  /*
    Use navigationOptions to set the various properties regarding navigation of a screen.
  */
  static navigationOptions = {
      header : null,
      gesturesEnabled:false
  }

  componentDidMount(){
    this.props.homeListApiCall();
  }

  componentWillReceiveProps(nextProps){
    if (nextProps.home.data != this.props.home.data) {
        //console.log("nextprop not equal new prop");
    } else{
        //console.log("nextprop came");
    }
  }

  filterData(filterStr){
    this.props.search(filterStr, this.props.home.fullData);
  }

  logOutClicked(){
    this.props.logOutClicked(this.props.navigation.navigate);
  }

  render(){
    return(
      <View style={styles.outerContainer}>
        {/* <CustomNavigationBar
           Key="home"
           Title = "Home"
           RightIcon = "ios-log-out"
           RightIconClicked = {() => this.logOutClicked()}
         /> */}
        <View style={styles.container}>
          {
            I18nManager.isRTL ?
            <Item>
                        <Input placeholder='بحث' style={{color:'#4d4f53', padding:10}}  onChangeText={(text) => {this.filterData(text);}}/>
                        <Icon style={{color:'#4d4f53', padding:10, transform: [{scaleX: -1}]}} active name='search' />
            </Item>
            :
            <Item>
                        <Icon style={{color:'#4d4f53', padding:10}} active name='search' />
                        <Input placeholder='Search' style={{color:'#4d4f53', padding:10}} onChangeText={(text) => {this.filterData(text);}}/>
            </Item>

          }

          <Loader Visible={this.props.home.fetching}/>
          <HomeList
            Data={this.props.home.data}
            Fetching={this.props.home.fetching}
          />
        </View>
      </View>
    )
  }
}

export default connect(moveStateToProps,matchDispatchToProps)(HomeTab2);
