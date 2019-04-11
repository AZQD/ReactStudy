import React, {Component} from 'react'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import {HashRouter, Switch, hashHistory, Route} from 'react-router-dom';
import Demo1 from './Demo1'
import Demo2 from './Demo2'

// Reducer
function counter(state = {count: 0}, action) {
  const count = state.count
  switch (action.type) {
    case 'increase':
      return {count: count + 1}
    default:
      return state
  }
}

// Store
const store = createStore(counter);

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
)