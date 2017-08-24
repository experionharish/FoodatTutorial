import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import NavigationBar from 'react-native-navbar';
import styles from './styles';

const CustomNavigationBar = (props) => {

  titleConfig = {
     title : props.Title,
     style : styles.navBarTitle
  };

  leftButtonConfig = {
  title : <Icon name = {props.LeftIcon} size = {30} color = "white" style={styles.icon}/>,
  handler : () => {
		return (
      props.LeftIconClicked()
		)
	}
  };

  rightButtonConfig = {
	title : <Icon name = {props.RightIcon} size = {26} color = "white" style={styles.icon}/>,
	handler : () => {
		return (
      props.RightIconClicked()
		)
	}
  };

  return(
    <NavigationBar
      key={props.Key}
      style = {styles.navbarStyle}
      title = {props.Title && this.titleConfig}
      leftButton={this.leftButtonConfig}
      rightButton={props.RightIcon && this.rightButtonConfig}
      statusBar={{style : 'light-content',tintColor : '#021059'}}
    />
  )
}

export default CustomNavigationBar;
