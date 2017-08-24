import React from 'react';
import { TextInput,
  Text,
  View
} from 'react-native';
import styles from './styles';

const TextField = props => {
	const {input , placeholder , name , meta: { touched, error }} = props;
  return (
		<View>
			<TextInput
      secureTextEntry = {placeholder == 'Password'}
      style = {styles.inputField}
      underlineColorAndroid = "transparent"
      placeholderTextColor = "white"
      placeholder = {placeholder}
      autoCapitalize = 'none'
      autoCorrect = {false} 
      {...input}
      >
      </TextInput>
      {touched && (error && <Text style={styles.errorText}>{error}</Text>)}
    </View>
	)
}

export default TextField;
