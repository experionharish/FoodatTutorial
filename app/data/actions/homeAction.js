import {actionWithoutPayload, actionWithPayload} from './actionDispatcher';
import { getCall } from '../../services/api';
var _ = require('lodash');

export default function homeListApiCall(){
  return(dispatch) => {
    dispatch(homeListApiCallFunction());
  }
}

export function logOutClicked(navigate){
  return(dispatch) => {
    navigate('Login');
    dispatch(actionWithoutPayload('USER_LOGOUT'));
  }
}

export function search(searchStr, data){
  return(dispatch) => {
    //console.log(data);
    var results=_.filter(data,function(item){
        return item.name.toLowerCase().indexOf(searchStr.toLowerCase())>-1;
      });
    //console.log(results);
    dispatch(actionWithPayload('LIST_SEARCH',results));
  }
}

function homeListApiCallFunction(){
  return(dispatch) => {
    dispatch(actionWithoutPayload('HOME_API_CALL_START'));
    getCall('get/cewqQeqTxe',{})
      .then((response) => {
        if(response.status === 200){
          dispatch(actionWithPayload('HOME_API_CALL_SUCCESS',response.data));
        }
        else{
          dispatch(actionWithoutPayload('HOME_API_CALL_FAILURE'));
        }
      })
      .catch((err) => {
        console.log("Home list error : ",err);
        dispatch(actionWithoutPayload('HOME_API_CALL_ERROR'));
      });
  }
}
