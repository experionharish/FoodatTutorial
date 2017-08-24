import { StyleSheet, Dimensions } from 'react-native';

const {width,height} = Dimensions.get('window');

const styles = StyleSheet.create({
  noRecordsContainer : {
    paddingVertical : '50%',
    alignItems : 'center',
    justifyContent : 'center'
  },
  noRecordsText : {
    fontSize : 17,
    color : '#aaaaaa',
    backgroundColor : 'transparent',
  },
  listContainer : {
    flex : 1,
    height : height
  }
});

export default styles;
