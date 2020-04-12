import { combineReducers } from 'redux';
import AppReducer from './appReducer';
import getCat from './getCat';

//import any future reducers created and pass down as a key value into combineReducers below

export default combineReducers({
  app: AppReducer,
  getCat: getCat
});