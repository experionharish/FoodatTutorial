import { StyleSheet, Platform } from 'react-native';

const styles = StyleSheet.create({
  listItemContainer : {
		backgroundColor : '#4d4f53',
    borderBottomWidth: 1
  },
  listItemDetailsContainer : {
    flexDirection : 'row',
    justifyContent : 'center',
    flex : 1
  },
  imageToDisplay : {
    width : 50,
    height : 50,
    borderRadius : 35,
    marginTop : 10,
    marginLeft : 10,
    marginBottom: 10
  },
  detailsContainer : {
    flex : 1,
    flexDirection : 'column',
    paddingTop : 15,
    paddingLeft : 10,
  },
  name : {
    color: '#ffffff',
    fontSize : 18,
    fontWeight : 'bold'
  }
});

export default styles;
