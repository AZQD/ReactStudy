import {delay} from 'redux-saga'
import {put, takeEvery, all, call} from 'redux-saga/effects'
import ajax from 'ajax-promise-simple';
import * as actionFN from '../action'
import * as actionData from '../constant';
console.log(delay, put, takeEvery, all);
console.log(typeof delay);

export function * helloSaga() {
  yield delay(2000);
  console.log('hello Saga!');
}

export function * getCateList(action) {
  const data = yield call( ajax.getJSON('https://ewxtongzhen.58.com/shop/posts/category/b/list'), action);
  console.log(11, data);
}


export default function * rootSaga() {
  yield takeEvery(actionData.GET_CATE_LIST, getCateList);
}
