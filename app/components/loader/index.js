import React from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  Modal,
} from 'react-native';
import styles from './styles';

const Loader = (props) => {
  return (
    <Modal
		animationType="none"
		transparent={true}
		visible={props.Visible}
    onRequestClose={() => false}
    >
    <View style={styles.container}>
      <View style={styles.activityIndicatorView}>
       <ActivityIndicator
          color = "black"
          style={[styles.activityIndicator, {height: 80}]}
          size="large"
        />
      </View>
     </View>
    </Modal>
  )
}

export default Loader;
