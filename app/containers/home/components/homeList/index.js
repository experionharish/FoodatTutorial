import React from 'react';
import {
  FlatList,
  View,
  Text
} from 'react-native';
import styles from './styles';
import HomeListItem from '../homeListItem';
import SeparatorComponent from '../../../../components/separatorComponent';

const HomeList = (props) => {
  if(!props.Data.length && !props.Fetching){
    return(
      <View style={styles.noRecordsContainer}>
        <Text style={styles.noRecordsText}>No Data Available.</Text>
      </View>
    )
  }
  else{
    return(
          <FlatList
            style={styles.listContainer}
            data = {props.Data}
            keyExtractor={(item)=>item.url}
            showsVerticalScrollIndicator = {false}
            initialNumToRender = {4}
            ItemSeparatorComponent = {SeparatorComponent}
            renderItem = {({item}) =>
              <HomeListItem
                Data={item}
              />
            }
            />
    )
  }
}

export default HomeList;
