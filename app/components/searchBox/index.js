import React from 'react';
import { View } from 'react-native';
import { SearchBar } from 'react-native-elements';

import styles from './styles.js';

const SearchField = (props) => {
  return (<View>
    <SearchBar
      containerStyle={styles.container}
      inputStyle={styles.searchBox}
      onChangeText={(props)=>{console.log("Text changed");
        props.TextChanged();
      }}
      placeholder='Type Here...' />
  </View>);
}

export default SearchField;
