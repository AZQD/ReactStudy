import { delay } from 'redux-saga';
import {
  put, takeEvery, all, call,
} from 'redux-saga/effects';
import ajax from 'ajax-promise-simple';
import * as actionFN from '../action';
import * as actionData from '../constant';

console.log(delay, put, takeEvery, all);
console.log(typeof delay);

export function * helloSaga () {
  yield delay(2000);
  console.log('hello Saga!');
}

function allCateFetch (action) {
  console.log(3333, action);
  return ajax.getJSON('https://ewxtongzhen.58.com/shop/posts/category/b/list');
}

export function * getCateList (action) {
  console.log(1111);
  const data = yield call(allCateFetch, action); // 同步执行
  console.log(2222);
  console.log('data：', data);
}


export default function * rootSaga () {
  yield takeEvery(actionData.GET_CATE_LIST, getCateList);
}
