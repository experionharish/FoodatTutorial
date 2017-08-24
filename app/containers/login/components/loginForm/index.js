import React from 'react';
import {
  View,
  Text
} from 'react-native';
import { Button } from 'react-native-elements';
import { reduxForm , Field } from 'redux-form';
import TextField from '../../../../components/textField';
import styles from './styles';



const LoginForm = (props) => {
  const {pristine, submitting} = props;

  return(
    <View style={styles.container}>
      <View style={styles.fieldContainer}>
        <View>
          <Field name="username" component = {TextField} placeholder="Username"/>
        </View>
        <View>
          <Field name="password" component = {TextField} placeholder="Password"/>
        </View>
      </View>
      <View>
        <Button
          disabled = {submitting}
          title="Login"
          onPress={props.handleSubmit(props.LoginClicked)}
        />
      </View>
    </View>
  )
}

const validate = values => {
  const errors = {};

  if (!values.username) {
    errors.username = 'Please enter your username'
  }

  if (!values.password) {
    errors.password = 'Please enter your password'
  }

  return errors
}

const reduxFormConfig = {form : 'loginForm', validate , fields : ['username','password'],
 initialValues: {
   username: 'user',
   password: '123'
}};
export default reduxForm(reduxFormConfig)(LoginForm);
