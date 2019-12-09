import { combineReducers } from 'redux';
import handleList from './handleList';
import counter from './counter';

export default combineReducers({
  counter,
  handleList,
});
