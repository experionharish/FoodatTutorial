import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import loginReducer from './loginReducer';
import homeReducer from './homeReducer';

const appReducers = combineReducers({
  form : formReducer,
  login : loginReducer,
  home : homeReducer
});

/* USER_LOGOUT is a action to clear the store when user logs out */

const rootReducers = (state, action) => {
  if (action.type === 'USER_LOGOUT') {
    state = undefined
  }
  return appReducers(state,action)
}

export default rootReducers;
