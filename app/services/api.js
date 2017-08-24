import axios from 'axios';
import {Alert} from 'react-native';
import pathURL from '../constants/url';

const BASE_URL = pathURL.baseURL;

axios.defaults.validateStatus = (status) => {
	return status>=200 && status <=500;
};

axios.defaults.timeout = 60000;

/*
  Use axios interceptors to configure headers, show response error messages etc.
*/

axios.interceptors.request.use((config) => {
	return config;
},(error) => {
  return Promise.reject(error);
});

axios.interceptors.response.use((response) => {
	  return response;
  },(error) => {
		console.log("error : : : ",error);
		if(error.response == undefined){
			networkErrorAlert();
			return Promise.reject(error);
		}
});

function networkErrorAlert(){
		let timeOutVar = setTimeout(()=> {
		 Alert.alert('Network Error','Please check your internet connection or try again after sometime.',
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

export function getCall(url,params=null){
	return axios.get(BASE_URL+url,{params : params});
}

export function putCall(url,body){
	return axios.put(BASE_URL+url,body);
}

export function postCall(url,body){
	return axios.post(BASE_URL+url,body);
}

export function deleteCall(url,params=null){
	return axios.delete(BASE_URL+url,{params : params});
}
