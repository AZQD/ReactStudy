import { delay } from 'redux-saga';
import {
  put, takeEvery, all, call, takeLatest
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
  console.log(2, '***正在获取数据***', action);
  return ajax.getJSON('https://ewxtongzhen.58.com/shop/posts/category/b/list');
}

export function * getCateList (action) {
  console.log(1, '***开始获取数据***', action);
  const data = yield call(allCateFetch, action); // 同步执行
  console.log(3, '***获取数据完成***', action);
  console.log('data：', data);
  const cateData = data.data;
  // 把action放到一起集中管理；
  // yield put({type: actionData.GET_CATE_LIST_SUCCESS, cateData});
  yield put(actionFN.getCateListSuccess(cateData));
}


export default function * rootSaga () {
  // 当type为GET_CATE_LIST的action触发时，调用todolist函数

  // 第一种方式
  // yield takeEvery(actionData.GET_CATE_LIST, getCateList);

  // 第二种方式
  yield all([
    takeLatest(actionData.GET_CATE_LIST, getCateList)
  ]);
}
