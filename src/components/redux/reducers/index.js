import {combineReducers} from 'redux'
import cateList from './cateList'
import counter from './counter'

export default combineReducers({
  counter,
  cateList
});