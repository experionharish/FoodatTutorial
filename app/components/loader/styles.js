import { StyleSheet, Dimensions } from 'react-native';

const tab = Dimensions.get('window').width > 600;

const styles = StyleSheet.create({
  container : {
    height : '100%',
    width : '100%'
  },
  activityIndicator : {
    position : 'absolute',
    top : '46%',
    left : '43%',
    justifyContent : 'center',
    alignItems : 'center'
  },
  activityIndicatorView : {
    flex : 1,
    backgroundColor : 'white',
    opacity : 0.5,
  }
});

export default styles;
