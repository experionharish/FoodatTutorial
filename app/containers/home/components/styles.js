import { StyleSheet, I18nManager} from 'react-native';

const styles = StyleSheet.create({
  outerContainer  :{
    height : '100%',
    width : '100%',
    paddingLeft:5,
    paddingRight: 5,
    backgroundColor : '#F7F7F7',
    justifyContent : 'center'
  },
  container : {
    flex : 1,
    backgroundColor : '#F7F7F7',
    height : '100%',
    width : '100%',
  },
  iconMirror : {
    transform: I18nManager.isRTL? [{scaleX: -1}] : [{scaleX: 1}]
  },
  profileArea : {
    flex : 1,
    alignItems : 'center',
    justifyContent : 'center',
    width : '100%',
    height : '100%',
    backgroundColor : '#fa5c4f',
    paddingTop : 30,
    paddingBottom : 20
  },
  signInButton : {
    alignSelf : 'center',
    backgroundColor : '#6a737b',
    marginTop : 10
  },
  whiteText : {
    color : '#fff',
    fontWeight : 'bold'
  },

  slide : {
    width : '100%',
    height : '100%'
  },
  slideImage : {
    width : '100%',
    height : '100%'
  },
  title : {
    position: 'absolute',
    bottom: 10,
    left:15,
    fontSize: 18,
    color: 'white',
    textShadowColor: 'black',
    textShadowOffset:{width:2, height:1},
    textShadowRadius: 15
  }

});

export default styles;
