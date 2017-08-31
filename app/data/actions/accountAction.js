import { Keyboard, Alert, AsyncStorage } from 'react-native';
import {actionWithoutPayload} from './actionDispatcher';
import {
  I18nManager
} from 'react-native';

export default function enableArabic(){
  return(dispatch) => {
    I18nManager.forceRTL(true);
    AsyncStorage.setItem('isRTL', JSON.stringify(true));
    dispatch(actionWithoutPayload('ENABLE_ARABIC'));
  }
}

export function disableArabic(){
  return(dispatch) => {
    I18nManager.forceRTL(false);
    AsyncStorage.setItem('isRTL', JSON.stringify(false));

    dispatch(actionWithoutPayload('DISABLE_ARABIC'));

    }
}
