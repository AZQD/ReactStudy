import { combineReducers } from 'redux';
import handleList from './handleList';
import counter from './counter';
import handleForm from './handleForm';

export default combineReducers({
  counter,
  handleList,
  handleForm
});
