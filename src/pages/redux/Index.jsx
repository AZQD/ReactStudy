import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import {createStore, applyMiddleware} from 'redux'
import createSagaMiddleware from 'redux-saga'
import {Provider} from 'react-redux'
import {HashRouter, Switch, hashHistory, Route} from 'react-router-dom';
import reducers from './reducers';
import rootSaga from './saga' //导入Sagas
import Demo1 from './container/Demo1/index'
import Demo2 from './container/Demo2/index'
import Demo3 from './container/Demo3/index'
import Demo4 from './container/Demo4/index'
/**
 * 2、 改变状态树的方法——dispatch & action & reducer
 action是行为的抽象；它是一个普通的js对象；由方法生成；必须有一个type；
 reducer是响应的抽象；传入的参数是当前state和action；它是一个纯方法；传入旧的state和action，返回一个新的状态；
 dispatch是动作的执行，类似于“投”篮的这个动作；
 */

/**
 * // 1、 创建store
 // 存储状态的地方——store
 // store存在于顶层组件，类似于全局变量、静态变量、本地存储的概念，
 // 意思是：状态树存在这个地方，欢迎所有组件随时访问；
 // 我们使用createStore来创建store，用combineReducers来把多个store整合在一起；
 // createStore方法还可以接受第二个参数，表示 State 的最初状态。这通常是服务器给出的。
 */
const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  reducers,
  applyMiddleware(sagaMiddleware) //添加到中间件
);
sagaMiddleware.run(rootSaga);// 运行 Sagas 函数

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
        <Route path="/demo3" component={Demo3}/>
        <Route path="/demo4" component={Demo4}/>
      </Switch>
    </HashRouter>
  </Provider>,
  document.getElementById('box')
);