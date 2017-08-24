import React from 'react';
import {
  View,
  Image,
  Text
} from 'react-native';
import styles from './styles';
import imageURL from '../../../../constants/images';

const ListItem = (props) => {

  return(
      <View style={styles.listItemContainer}>
          <View style={styles.listItemDetailsContainer}>
            {
              props.Data.urlToImage ?
              <Image style={styles.imageToDisplay} resize="contain" defaultSource={imageURL.userProfilePic} source={{uri : props.Data.urlToImage}}/>
               : <Image style={styles.imageToDisplay} resize="contain" source={imageURL.userProfilePic}/>
            }
            <View style={styles.detailsContainer}>
              <Text style={styles.name}>{props.Data.name}</Text>
            </View>
          </View>
      </View>
    )
}

export default ListItem;
