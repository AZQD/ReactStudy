import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import {HashRouter, Switch, hashHistory, Route} from 'react-router-dom';
import Demo1 from './container/Demo1/index'
import Demo2 from './container/Demo2/index'

/**
 * 2、 改变状态树的方法——dispatch & action & reducer
 action是行为的抽象；它是一个普通的js对象；由方法生成；必须有一个type；
 reducer是响应的抽象；传入的参数是当前state和action；它是一个纯方法；传入旧的state和action，返回一个新的状态；
 dispatch是动作的执行，类似于“投”篮的这个动作；
 */
// Reducer
function counter(state = {count: 0}, action) {
  const count = state.count;
  switch (action.type) {
    case 'add':
      return {count: count + 1};
    case 'reduce':
      return {count: count - 1};
    default:
      return state
  }
}

/**
 * // 1、 创建store
 // 存储状态的地方——store
 // store存在于顶层组件，类似于全局变量、静态变量、本地存储的概念，
 // 意思是：状态树存在这个地方，欢迎所有组件随时访问；
 // 我们使用createStore来创建store，用combineReducers来把多个store整合在一起；
 */
const store = createStore(counter);

/**
 * exact的值为bool型，为true是表示严格匹配，为false时为正常匹配。
 如在exact为true时，’/link’与’/’是不匹配的，但是在false的情况下它们又是匹配的。
 */
ReactDOM.render(
  <Provider store={store}>
    <HashRouter history={hashHistory}>
      <Switch>
        <Route exact path="/" component={Demo1}/>
        <Route path="/demo2" component={Demo2}/>
      </Switch>
    </HashRouter>
  </Provider>,
  document.getElementById('box')
);