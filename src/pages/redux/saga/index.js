import { delay } from 'redux-saga';
import {
  put, takeEvery, all, call, takeLatest
} from 'redux-saga/effects';
import ajax from 'ajax-promise-simple';
import * as actionFN from '../action';
import * as actionData from '../constant';
import '../../../mockjs/index';

// console.log(delay, put, takeEvery, all);

export function * helloSaga () {
  yield delay(2000);
  console.log('hello Saga!');
}

function allCateFetch (action) {
  console.log(2, '***正在获取数据***', action);
  return ajax.getJSON('/redux/demo3/category/list');
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

function submitFetch (action) {
  console.log(2, '***正在提交表单***', action);
  return ajax.postJSON('/redux/demo3/submit', action.payload);
}

export function * submitForm (action) {
  console.log(1, '***开始提交表单***', action);
  const {name, phone} = action.payload;
  if (!name || !phone) {
    alert('请填写内容');
    return;
  }
  const data = yield call(submitFetch, action); // 同步执行
  console.log(3, '***提交表单完成***', action);
  console.log('data：', data);
  yield put(actionFN.submitFormSuccess(true));
}


export default function * rootSaga () {
  // 当type为GET_CATE_LIST的action触发时，调用todolist函数

  // 第一种方式
  // yield takeEvery(actionData.GET_CATE_LIST, getCateList);

  // 第二种方式
  yield all([
    takeLatest(actionData.GET_CATE_LIST, getCateList),
    takeLatest(actionData.SUBMIT_FORM, submitForm)
  ]);
}
