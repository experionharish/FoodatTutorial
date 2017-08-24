import { Keyboard, Alert } from 'react-native';
import {actionWithoutPayload} from './actionDispatcher';

export default function loginApiCall(dataToSend,navigate=false){
  return(dispatch) => {
    dispatch(loginApiCallFunction(dataToSend,navigate));
  }
}

function loginApiCallFunction(dataToSend,navigate,signedInFlag){
  Keyboard.dismiss();
  return(dispatch) => {
    dispatch(actionWithoutPayload('LOGIN_START'));
    if(dataToSend.username === 'user' && dataToSend.password === '123'){
      dispatch(actionWithoutPayload('LOGIN_SUCCESS'));
      navigate('Home');
    }
    else{
      dispatch(actionWithoutPayload('LOGIN_FAILURE'));
      let timeOutVar = setTimeout(()=> {
  		 Alert.alert('Login','Invalid username or password.',
  			[
  				{ text : 'OK' , onPress: () => {
  						clearTimeout(timeOutVar);
  					}
  				}
  			],
  			{ cancelable: false }
  			)
  		},500);
    }
  }
}
