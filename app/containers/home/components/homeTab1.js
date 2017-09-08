import React,{ Component } from 'react';
import {
  I18nManager,
  View,
  Text,
  Image,
  Dimensions,
  Easing,
  FlatList,
  ScrollView,
  TouchableHighlight
} from 'react-native';
import {
  Tabs,
  Tab,
  Item,
  Icon,
  Input,
  Thumbnail
} from 'native-base';
import styles from './styles';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import homeListApiCall, { search, logOutClicked } from '../../../data/actions/homeAction';
import HomeList from './homeList';
import Loader from '../../../components/loader';

import Carousel from 'react-native-snap-carousel';
import imageURL from '../../../constants/images';
import SeparatorComponent from '../../../components/separatorComponent';


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

class HomeTab1 extends Component {

  /*
    Use navigationOptions to set the various properties regarding navigation of a screen.
  */
  static navigationOptions = {
      header : null,
      gesturesEnabled:false
  }

  componentDidMount(){
    //this.props.homeListApiCall();
  }

  logOutClicked(){
    this.props.logOutClicked(this.props.navigation.navigate);
  }


  _renderItem ({item, index}) {
        return (
          <TouchableHighlight>
            <View style={{width: Dimensions.get('window').width-110, height: 160}}>
              <Image style={{width: Dimensions.get('window').width-115, height: 150, borderRadius:5}} resize="contain" source={{uri : 'http://d2f0ora2gkri0g.cloudfront.net/bkpam299773_img1.jpg'}}/>
                <Text style={styles.title}>{ item.name }</Text>
            </View>
          </TouchableHighlight>
        );
  }

  _renderItem2 ({item, index}) {
        return (
            <View style={{width: Dimensions.get('window').width-200, height: 140}}>
              <Image style={{width: Dimensions.get('window').width-205, height: 130, borderRadius:5}} resize="contain" source={{uri : 'https://dantricdn.com/2017/photo-1-1496112063625.jpg'}}/>
                <Text style={styles.title}>{ item.name }</Text>
            </View>
        );
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
        <ScrollView showsVerticalScrollIndicator={false}>
          {/* <Loader Visible={this.props.home.fetching}/> */}
          <Text style={{fontWeight:'bold', paddingTop:5, paddingBottom:5, paddingLeft:5}}>SUGGESTED FOR YOU</Text>
          <Carousel
              ref={(c) => { this._carousel = c; }}
              data={this.props.home.data}
              renderItem={this._renderItem}
              sliderWidth={Dimensions.get('window').width}
              itemWidth={Dimensions.get('window').width-110}
              animationOptions={{duration: 600, easing: Easing.ease}}
              inactiveSlideScale={1}
              inactiveSlideOpacity={0.9}
              swipeThreshold={50}
              activeSlideAlignment={'start'}
              containerCustomStyle={{marginTop:10}}
            />
            <Text style={{fontWeight:'bold', paddingTop:5, paddingBottom:5, paddingLeft:5}}>TRENDING NOW</Text>
            <Carousel
                ref={(c) => { this._carousel = c; }}
                data={this.props.home.data}
                renderItem={this._renderItem2}
                sliderWidth={Dimensions.get('window').width}
                itemWidth={Dimensions.get('window').width-200}
                animationOptions={{duration: 600, easing: Easing.ease}}
                inactiveSlideScale={1}
                inactiveSlideOpacity={0.9}
                activeSlideAlignment={'start'}
                containerCustomStyle={{marginTop:5}}
              />
            <Text style={{fontWeight:'bold', paddingTop:5, paddingBottom:5, paddingLeft:5}}>RESTAURANTS NEARBY</Text>

            <FlatList
              style={{flex:1}}
              data = {this.props.home.data}
              keyExtractor={(item)=>item.url}
              showsVerticalScrollIndicator = {false}
              initialNumToRender = {4}
              renderItem = {({item}) =>
                  <View style={{flexDirection : 'row', flex:1,borderRadius:3, marginTop:10, marginLeft:5, marginRight:5, paddingTop:2,paddingLeft:2,paddingBottom:2, borderWidth:1}}>
                    <Image style={{width: 100, height: 100, borderRadius:3}} resize="contain" source={{uri : 'http://img.sndimg.com/food/image/upload/w_614,h_461/v1/img/recipes/13/53/50/piciTOU6N.jpg'}}/>
                    <View style={{flex:1, marginLeft:5,marginRight:5}}>
                      <Text style={{fontSize:17, fontWeight:'bold'}}>{item.name}</Text>
                      <Text style={{fontSize:12}}>Coffee Bar</Text>
                      <SeparatorComponent />
                      <View style={{flexDirection : 'row', marginTop:15}}>
                        <Text style={{fontSize:13}}>Avg Delivery: </Text>
                        <Text style={{fontSize:13, fontWeight:'bold'}}>50 Min</Text>

                      </View>
                    </View>

                  </View>
                }
              />
        </ScrollView>
      </View>
    )
  }
}

export default connect(moveStateToProps,matchDispatchToProps)(HomeTab1);
